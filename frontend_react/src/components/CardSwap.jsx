import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

export const Card = ({ children, className }) => {
  return (
    <div className={cn("bg-white p-8 rounded-2xl shadow-xl w-full h-[280px] flex flex-col", className)}>
      <div className="flex-1 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

const CardSwap = ({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const intervalRef = useRef(null);
  const verticalOffsetRef = useRef(0);
  const extraBottomDistanceRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate position for a card at a given index
  const getCardPosition = (index, totalCards) => {
    const extraBottomDistance = extraBottomDistanceRef.current;
    if (index === totalCards - 1) {
      // Bottom card gets extra distance
      return index * verticalDistance + extraBottomDistance;
    }
    return index * verticalDistance;
  };

  // Update all card positions based on their current order in cardsRef
  const updateCardPositions = (cards, offset) => {
    const extraBottomDistance = extraBottomDistanceRef.current;
    cards.forEach((card, arrayIndex) => {
      // Calculate what position this card should be at (0 = top, 1 = middle, 2 = bottom)
      const positionIndex = arrayIndex;
      const top = getCardPosition(positionIndex, cards.length);
      const left = positionIndex * cardDistance - 80;
      
      gsap.set(card, {
        top: `${top + offset}px`,
        left: `${left}px`,
        width: '100%',
        zIndex: cards.length - positionIndex,
        opacity: positionIndex === 0 ? 1 : 0.7,
        scale: positionIndex === 0 ? 1 : 0.95,
      });
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = Array.from(containerRef.current.children);
    if (cards.length === 0) return;

    // Store extra bottom distance
    extraBottomDistanceRef.current = verticalDistance * 0.0;
    const extraBottomDistance = extraBottomDistanceRef.current;

    let setupTimeout;

    // Set initial positions
    const setupPositions = () => {
      cardsRef.current = [...cards]; // Store copy of array
      
      // Set initial positions
      cards.forEach((card, index) => {
        const top = getCardPosition(index, cards.length);
        gsap.set(card, {
          position: 'absolute',
          top: `${top}px`,
          left: `${index * cardDistance - 80}px`,
          width: '100%',
          zIndex: cards.length - index,
          opacity: index === 0 ? 1 : 0.7,
          scale: index === 0 ? 1 : 0.95,
        });
      });
      
      // Center cards vertically
      const container = containerRef.current;
      if (container && cards[0]) {
        // Use fixed card height (280px) instead of measuring
        const fixedCardHeight = 280;
        // Calculate total height including extra bottom distance
        const totalHeight = (cards.length - 1) * verticalDistance + extraBottomDistance + fixedCardHeight;
        const containerHeight = container.offsetHeight;
        const offsetTop = Math.max(0, (containerHeight - totalHeight) / 2);
        verticalOffsetRef.current = offsetTop;
        
        // Apply vertical offset to all cards
        cards.forEach((card) => {
          const currentTop = gsap.getProperty(card, 'top');
          gsap.set(card, {
            top: `${parseFloat(currentTop) + offsetTop}px`,
          });
        });
      }
    };

    // Delay setup to ensure cards are rendered with proper dimensions
    setupTimeout = setTimeout(() => {
      setupPositions();
    }, 100);

    // Animation function
    const animate = () => {
      if (isPaused) return;

      const cards = cardsRef.current;
      if (cards.length === 0) return;
      
      const offset = verticalOffsetRef.current;
      
      // Move top card (index 0) to bottom
      const topCard = cards[0];
      const bottomIndex = cards.length - 1;
      const bottomTop = getCardPosition(bottomIndex, cards.length);
      const bottomLeft = bottomIndex * cardDistance - 80;

      gsap.to(topCard, {
        duration: 0.6,
        top: `${bottomTop + offset}px`,
        left: `${bottomLeft}px`,
        width: '100%',
        zIndex: 1,
        opacity: 0.7,
        scale: 0.95,
        ease: 'power2.out',
      });

      // Move all other cards up one position
      for (let i = 1; i < cards.length; i++) {
        const card = cards[i];
        const newIndex = i - 1;
        const newTop = getCardPosition(newIndex, cards.length);
        const newLeft = newIndex * cardDistance - 80;
        
        gsap.to(card, {
          duration: 0.6,
          top: `${newTop + offset}px`,
          left: `${newLeft}px`,
          width: '100%',
          zIndex: cards.length - newIndex,
          opacity: newIndex === 0 ? 1 : 0.7,
          scale: newIndex === 0 ? 1 : 0.95,
          ease: 'power2.out',
        });
      }

      // After animation completes, reorder the array and update positions
      setTimeout(() => {
        // Reorder cards array for next iteration
        const newOrder = [...cards.slice(1), cards[0]];
        cardsRef.current = newOrder;
        
        // Update DOM order to maintain z-index stacking
        newOrder.forEach((card) => {
          containerRef.current.appendChild(card);
        });

        // Ensure positions are correct after DOM reordering
        updateCardPositions(newOrder, offset);
      }, 600);
    };

    // Start interval
    intervalRef.current = setInterval(() => {
      animate();
    }, delay);

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (setupTimeout) {
        clearTimeout(setupTimeout);
      }
    };
  }, [cardDistance, verticalDistance, delay, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full flex items-center justify-start", className)}
      style={{ height: '500px', minHeight: '400px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default CardSwap;
