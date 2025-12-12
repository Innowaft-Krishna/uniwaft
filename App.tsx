import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Process } from './components/Process';
import { Technologies } from './components/Technologies';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Careers } from './components/Careers';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [theme, setTheme] = useState('dark');
  
  // Initialize theme based on preference or default to dark
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleNavigate = (view: string, sectionId?: string) => {
    setCurrentView(view);
    
    if (view === 'home') {
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: "easeInOut" as const }
  };

  return (
    <div className="font-sans antialiased text-lg text-slate-600 dark:text-slate-300 selection:bg-cyan-600 dark:selection:bg-brand-primary selection:text-white bg-slate-50 dark:bg-slate-950 overflow-x-hidden min-h-screen flex flex-col transition-colors duration-300 leading-relaxed">
      
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-300/30 dark:bg-indigo-900/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0], 
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-cyan-300/30 dark:bg-cyan-900/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -40, 0], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-blue-300/30 dark:bg-blue-900/10 rounded-full blur-[120px]" 
        />
      </div>

      <Navbar currentView={currentView} onNavigate={handleNavigate} theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10 flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div key="home" {...pageTransition}>
              <Hero onNavigate={handleNavigate} />
              <Services />
              <Solutions />
              <Process />
              <Technologies />
            </motion.div>
          )}

          {currentView === 'careers' && (
            <motion.div key="careers" {...pageTransition} className="pt-20">
              <Careers />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div key="about" {...pageTransition} className="pt-20">
              <About />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div key="contact" {...pageTransition} className="pt-20 min-h-screen">
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </div>
  );
};

export default App;