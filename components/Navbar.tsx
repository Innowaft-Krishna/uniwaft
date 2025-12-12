import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, sectionId?: string) => void;
  theme: string;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, theme, toggleTheme }) => {
  const links = [
    { name: 'Home', view: 'home' },
    { name: 'About', view: 'about' },
    { name: 'Careers', view: 'careers' },
    { name: 'Contact', view: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 focus:outline-none transition-colors"
            >
              Uniwaft
            </button>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="flex items-center space-x-4 sm:space-x-8">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => onNavigate(link.view)}
                  className={`text-base sm:text-lg font-medium transition-colors duration-200 hover:text-cyan-600 dark:hover:text-brand-primary focus:outline-none whitespace-nowrap ${
                    currentView === link.view ? 'text-cyan-600 dark:text-brand-primary font-bold' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700"></div>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 sm:w-6 sm:h-6" /> : <Moon className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};