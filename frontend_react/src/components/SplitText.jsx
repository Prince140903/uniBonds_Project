import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

const SplitText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars', // 'chars', 'words', or 'lines'
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimatedRef.current) return;

    const container = containerRef.current;
    const textContent = container.textContent;

    // Clear container
    container.innerHTML = '';

    let elements = [];

    if (splitType === 'chars') {
      // Split into characters
      const chars = textContent.split('');
      chars.forEach((char, index) => {
        if (char === ' ') {
          const span = document.createElement('span');
          span.innerHTML = '&nbsp;';
          span.style.display = 'inline';
          container.appendChild(span);
        } else {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          container.appendChild(span);
          elements.push(span);
        }
      });
    } else if (splitType === 'words') {
      // Split into words
      const words = textContent.split(' ');
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.marginRight = '0.25em';
        
        word.split('').forEach((char) => {
          const charSpan = document.createElement('span');
          charSpan.textContent = char;
          charSpan.style.display = 'inline-block';
          wordSpan.appendChild(charSpan);
          elements.push(charSpan);
        });
        
        if (wordIndex < words.length - 1) {
          const space = document.createElement('span');
          space.innerHTML = '&nbsp;';
          wordSpan.appendChild(space);
        }
        
        container.appendChild(wordSpan);
      });
    }

    // Set initial state
    elements.forEach((el, index) => {
      gsap.set(el, {
        ...from,
        delay: delay / 1000 + (index * (duration / elements.length)),
      });
    });

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;

            // Animate each element
            elements.forEach((el, index) => {
              gsap.to(el, {
                ...to,
                duration: duration,
                ease: ease,
                delay: delay / 1000 + (index * (duration / elements.length)),
                onComplete: index === elements.length - 1 ? onLetterAnimationComplete : null,
              });
            });

            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  const getTextAlignClass = () => {
    switch (textAlign) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(className, getTextAlignClass())}
    >
      {text}
    </div>
  );
};

export default SplitText;

