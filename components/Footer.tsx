import React from 'react';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: string, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative pt-24 pb-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-10 mb-20">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col items-start space-y-8">
            <span className="text-3xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
              Univaft
            </span>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Building scalable digital solutions that help businesses grow. From custom software to cloud infrastructure, we are your partners in innovation.
            </p>
          </div>
          
          {/* Column 2: Company Links */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col space-y-8">
              <h4 className="text-lg font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                Company
              </h4>
              <ul className="space-y-5">
                <li>
                  <button 
                    onClick={() => onNavigate?.('about')} 
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors text-lg font-medium"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('careers')} 
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors text-lg font-medium"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('contact')} 
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors text-lg font-medium"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Connect / Socials */}
          <div className="flex flex-col md:items-end">
            <div className="flex flex-col space-y-8">
              <h4 className="text-lg font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                Connect
              </h4>
              
              <div className="flex flex-col space-y-4">
                <a href="tel:+918464065256" className="flex items-center gap-3 text-lg text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
                   <Phone className="w-5 h-5 flex-shrink-0" />
                   <span>+91 84640 65256</span>
                </a>
                <a href="mailto:univaft@gmail.com" className="flex items-center gap-3 text-lg text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>univaft@gmail.com</span>
                </a>
              </div>

              <div className="flex items-center gap-5">
                {/* LinkedIn - Blue #0077b5 */}
                <a href="#" className="group p-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] dark:hover:border-[#0077b5] transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                {/* Instagram - Gradient */}
                <a href="#" className="group relative p-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 overflow-hidden transition-all duration-300">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{
                      background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
                    }}
                  ></div>
                  <Instagram className="w-6 h-6 relative z-10 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </a>
                {/* X/Twitter - Black in light mode, White in dark mode */}
                <a href="#" className="group p-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-base font-medium">
            © {new Date().getFullYear()} Univaft. All rights reserved.
          </p>
          <div className="flex gap-10 text-base font-medium text-slate-500">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};