import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

const CountUp = ({
  from = 0,
  to,
  separator = '',
  direction = 'up',
  duration = 1,
  className = '',
  delay = 0,
  decimals = 0,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(from);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;

            // Wait for delay
            const timeout = setTimeout(() => {
              const startValue = from;
              const endValue = to;

              const obj = { value: startValue };
              animationRef.current = gsap.to(obj, {
                value: endValue,
                duration: duration,
                ease: 'power2.out',
                onUpdate: function () {
                  const currentValue = direction === 'up' 
                    ? obj.value 
                    : endValue - (obj.value - startValue);
                  
                  let formattedValue;
                  
                  if (decimals > 0) {
                    formattedValue = currentValue.toFixed(decimals);
                  } else {
                    formattedValue = Math.floor(currentValue).toString();
                  }

                  // Add separator if provided (only for integers)
                  if (separator && decimals === 0) {
                    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
                  }

                  setCount(formattedValue);
                },
                onComplete: () => {
                  // Ensure final value is set
                  let finalValue;
                  if (decimals > 0) {
                    finalValue = to.toFixed(decimals);
                  } else {
                    finalValue = Math.floor(to).toString();
                    // Add separator if provided (only for integers)
                    if (separator) {
                      finalValue = finalValue.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
                    }
                  }
                  
                  setCount(finalValue);
                },
              });
            }, delay);

            return () => clearTimeout(timeout);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [from, to, separator, direction, duration, delay, decimals]);

  const displayValue = () => {
    return `${prefix}${count}${suffix}`;
  };

  return (
    <span ref={elementRef} className={cn(className)}>
      {displayValue()}
    </span>
  );
};

export default CountUp;

