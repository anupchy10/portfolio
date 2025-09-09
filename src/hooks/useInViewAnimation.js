import { useRef, useEffect } from 'react';

const useInViewAnimation = (animationClasses = '') => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state - hide element for animation
    element.classList.add('opacity-0');

    // Create the observer with 200px trigger points
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is visible - add animation classes with proper delay handling
          const classes = animationClasses.split(' ').filter(cls => cls.trim());
          
          // Check if there's a delay class
          const delayClass = classes.find(cls => cls.startsWith('delay-'));
          
          if (delayClass) {
            // Extract delay value (e.g., 'delay-100' -> 100)
            const delayValue = parseInt(delayClass.replace('delay-', ''));
            
            // Set a timeout for the delay
            setTimeout(() => {
              element.classList.add(...classes);
              element.classList.remove('opacity-0');
            }, delayValue);
          } else {
            // No delay - apply all classes immediately
            element.classList.add(...classes);
            element.classList.remove('opacity-0');
          }
        } else {
          // Element is not visible - reset for re-animation
          const classes = animationClasses.split(' ').filter(cls => cls.trim());
          element.classList.remove(...classes);
          // Add back opacity-0 for next animation
          element.classList.add('opacity-0');
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '200px 0px 200px 0px' // 200px trigger point from both top and bottom
      }
    );

    // Start observing
    observer.observe(element);

    // Cleanup observer on unmount
    return () => {
      observer.unobserve(element);
    };
  }, [animationClasses]);

  return elementRef;
};

export default useInViewAnimation;