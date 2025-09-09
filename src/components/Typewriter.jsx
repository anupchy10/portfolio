import React, { useState, useEffect, useMemo } from 'react';

const useTypewriter = ({ words, typingSpeed, deletingSpeed, pause }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  // Check if user prefers reduced motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    // If user prefers reduced motion, show the first word statically
    if (prefersReducedMotion) {
      setCurrentText(words[0] || '');
      setIsTyping(false);
      return;
    }

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        // Deleting phase
        setCurrentText(prev => prev.slice(0, -1));
        
        // If we've deleted everything, move to next word
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing phase
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word is complete, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pause);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, pause, prefersReducedMotion]);

  return {
    text: currentText,
    isComplete: currentText.length === words[currentWordIndex]?.length && !isDeleting,
    prefersReducedMotion
  };
};

const Typewriter = ({ 
  words = [], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pause = 1000,
  className = '',
  ...props 
}) => {
  const { text, prefersReducedMotion } = useTypewriter({
    words,
    typingSpeed,
    deletingSpeed,
    pause
  });

  if (words.length === 0) {
    return null;
  }

  return (
    <span className={className} {...props} aria-live="polite">
      {text}
      {!prefersReducedMotion && (
        <span
          className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-pulse"
          aria-hidden="true"
        />
      )}
    </span>
  );
};

export default Typewriter;