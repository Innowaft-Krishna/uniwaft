import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, brightness: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 
                     w-12 h-12 md:w-14 md:h-14 
                     rounded-full 
                     bg-brand-primary dark:bg-brand-primary
                     text-white 
                     shadow-lg 
                     dark:shadow-cyan-500/20
                     hover:shadow-xl 
                     hover:shadow-cyan-500/30
                     dark:hover:shadow-cyan-500/40
                     flex items-center justify-center
                     transition-all duration-300
                     backdrop-blur-sm
                     border border-cyan-400/20
                     hover:border-cyan-300/40
                     hover:bg-cyan-400 dark:hover:bg-cyan-400"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};


