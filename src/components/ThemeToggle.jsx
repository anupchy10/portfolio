import React, { useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

// Hook for using View Transitions API
export const useThemeTransition = () => {
  const startTransition = useCallback((updateFn) => {
    if ('startViewTransition' in document) {
      document.startViewTransition(updateFn);
    } else {
      updateFn();
    }
  }, []);

  return { startTransition };
};

const ThemeToggle = ({ 
  variant = 'circle', 
  start = 'center', 
  className = '',
  showLabel = false 
}) => {
  const { isDark, toggleTheme } = useTheme();
  const { startTransition } = useThemeTransition();

  const handleClick = useCallback(() => {
    // Inject animation styles for this specific transition
    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement('style');
    style.id = styleId;

    // Generate animation CSS based on variant
    let css = '';
    const positions = {
      center: 'center',
      'top-left': 'top left',
      'top-right': 'top right',
      'bottom-left': 'bottom left',
      'bottom-right': 'bottom right',
    };

    if (variant === 'circle') {
      const cx = start === 'center' ? '50' : start.includes('left') ? '0' : '100';
      const cy = start === 'center' ? '50' : start.includes('top') ? '0' : '100';
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-expand 0.4s ease-out;
            transform-origin: ${positions[start]};
          }
          @keyframes circle-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
            }
          }
        }
      `;
    } else if (variant === 'circle-blur') {
      const cx = start === 'center' ? '50' : start.includes('left') ? '0' : '100';
      const cy = start === 'center' ? '50' : start.includes('top') ? '0' : '100';
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-blur-expand 0.5s ease-out;
            transform-origin: ${positions[start]};
            filter: blur(0);
          }
          @keyframes circle-blur-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%);
              filter: blur(4px);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
              filter: blur(0);
            }
          }
        }
      `;
    } else if (variant === 'polygon') {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            animation: ${isDark ? 'wipe-in-light' : 'wipe-in-dark'} 0.4s ease-out;
          }
          @keyframes wipe-in-dark {
            from {
              clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            }
            to {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
          }
          @keyframes wipe-in-light {
            from {
              clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            }
            to {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
          }
        }
      `;
    }

    if (css) {
      style.textContent = css;
      document.head.appendChild(style);

      // Clean up animation styles after transition
      setTimeout(() => {
        const styleEl = document.getElementById(styleId);
        if (styleEl) {
          styleEl.remove();
        }
      }, 3000);
    }

    // Use View Transitions API with the theme toggle
    startTransition(() => {
      toggleTheme();
    });
  }, [isDark, toggleTheme, variant, start, startTransition]);

  return (
    <Button
      variant="outline"
      size={showLabel ? 'default' : 'icon'}
      onClick={handleClick}
      className={cn(
        'relative overflow-hidden transition-all duration-300 hover:scale-105',
        'border border-gray-300 dark:border-gray-600',
        'bg-white dark:bg-gray-800',
        'text-gray-600 dark:text-gray-300',
        'hover:bg-gray-50 dark:hover:bg-gray-700',
        'hover:text-gray-900 dark:hover:text-white',
        showLabel && 'gap-2',
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="relative flex items-center justify-center">
        {isDark ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300" />
        )}
      </div>
      {showLabel && (
        <span className="text-sm font-medium">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </Button>
  );
};

export default ThemeToggle;