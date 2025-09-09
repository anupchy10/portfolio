import { useRef, useEffect, useCallback } from 'react';

const useHobbiesAnimation = ({
  selector = '.hobby-card',
  rootMargin = '-100px 0px -100px 0px',
  threshold = 0,
  once = false
} = {}) => {
  const containerRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const scrollDirection = useRef('down');
  const observerRef = useRef(null);

  // Track scroll direction
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current) {
      scrollDirection.current = 'down';
    } else {
      scrollDirection.current = 'up';
    }
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add scroll listener for direction tracking
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Find all hobby card elements
    const hobbyCards = container.querySelectorAll(selector);
    
    // Set initial hidden state for all cards (fade-down: translate from top + fade-out)
    hobbyCards.forEach(element => {
      if (!element.classList.contains('opacity-0')) {
        element.classList.add('opacity-0', '-translate-y-6');
        element.classList.remove('opacity-100', 'translate-y-0');
      }
    });

    // Create IntersectionObserver for hobby cards
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const enteringElements = [];
        const leavingElements = [];

        // Separate entering and leaving elements
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            enteringElements.push(entry);
          } else {
            leavingElements.push(entry);
          }
        });

        // Reset leaving elements
        leavingElements.forEach(entry => {
          const element = entry.target;
          element.classList.remove('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-out');
          element.classList.add('opacity-0', '-translate-y-6');
          element.style.transitionDelay = '';
        });

        // Handle entering elements with staggered animation
        if (enteringElements.length > 0) {
          // Sort elements by their vertical position
          const sortedEntries = [...enteringElements].sort((a, b) => {
            const aRect = a.target.getBoundingClientRect();
            const bRect = b.target.getBoundingClientRect();
            
            if (scrollDirection.current === 'down') {
              // Top to bottom when scrolling down
              return aRect.top - bRect.top;
            } else {
              // Bottom to top when scrolling up
              return bRect.top - aRect.top;
            }
          });

          // Apply staggered animation to sorted elements with 200ms delay per index
          sortedEntries.forEach((entry, index) => {
            const element = entry.target;
            const delay = index * 200; // Progressive 200ms delay per visible card
            
            // Set inline transition delay
            element.style.transitionDelay = `${delay}ms`;
            
            // Apply fade-down animation classes
            element.classList.remove('opacity-0', '-translate-y-6');
            element.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-out');
          });
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    // Observe all hobby cards
    hobbyCards.forEach(card => {
      observerRef.current.observe(card);
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selector, rootMargin, threshold, once, handleScroll]);

  return containerRef;
};

export default useHobbiesAnimation;