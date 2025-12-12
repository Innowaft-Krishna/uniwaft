import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/5 dark:from-brand-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 dark:text-white mb-8">About Univaft</h2>
            <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed mb-8">
              Univaft isn't just a dev shop; we are your strategic technology partner. 
              Born from a passion for clean code and exceptional design, we help startups 
              and established enterprises navigate the digital landscape.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed mb-12">
              We focus on building scalable solutions that grow with your business, fostering long-term partnerships built on transparency, quality, and reliability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
               <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-cyan-600 dark:text-brand-primary mb-2">100+</span>
                  <span className="text-base font-semibold text-slate-500 uppercase tracking-widest">Projects</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-blue-600 dark:text-brand-secondary mb-2">60+</span>
                  <span className="text-base font-semibold text-slate-500 uppercase tracking-widest">Clients</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-teal-600 dark:text-teal-500 mb-2">100%</span>
                  <span className="text-base font-semibold text-slate-500 uppercase tracking-widest">Delivery</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-panel p-10 rounded-3xl relative z-10 border-t border-l border-white/50 dark:border-white/10">
                <div className="space-y-8">
                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-cyan-50 dark:bg-slate-800 rounded-xl text-cyan-600 dark:text-brand-primary"><Users className="w-6 h-6"/></div>
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-2xl">Client-Centric</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mt-2 leading-relaxed">We treat your product as our own.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-600 dark:text-brand-secondary"><Briefcase className="w-6 h-6"/></div>
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-2xl">Business First</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mt-2 leading-relaxed">Tech that solves real business problems.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-emerald-50 dark:bg-slate-800 rounded-xl text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-6 h-6"/></div>
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-2xl">Quality Assured</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mt-2 leading-relaxed">Rigorous testing standards for every release.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Background Blob behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[60px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};