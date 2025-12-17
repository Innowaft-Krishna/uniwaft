import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: 'Discovery & Strategy',
    description: 'We analyze your requirements and build a solid roadmap.',
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'Design & Prototyping',
    description: 'Creating interactive mockups to visualize the final product.',
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Development & Testing',
    description: 'Writing clean code and rigorous testing for reliability.',
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'Launch & Support',
    description: 'Deployment and ongoing maintenance to ensure success.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-cyan-600 dark:text-brand-primary font-bold tracking-widest text-base uppercase">The Workflow</span>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 dark:text-white mt-4">How Uniwaft Works With You</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-brand-primary/30 flex items-center justify-center text-cyan-600 dark:text-brand-primary shadow-[0_0_20px_rgba(8,145,178,0.1)] dark:shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-8 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">{step.description}</p>
              
              {/* Connector line for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute top-20 left-1/2 w-1 h-16 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};