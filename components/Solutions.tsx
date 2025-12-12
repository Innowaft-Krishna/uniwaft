import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ShoppingCart, Globe, Server } from 'lucide-react';

const solutions = [
  {
    title: 'SaaS Platforms',
    description: 'Multi-tenant architectures for modern software services.',
    icon: <Globe className="h-8 w-8 text-white" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'E-Commerce & Marketplaces',
    description: 'Secure, high-conversion online stores and trading platforms.',
    icon: <ShoppingCart className="h-8 w-8 text-white" />,
    color: 'from-blue-600 to-indigo-500',
  },
  {
    title: 'Internal Business Tools',
    description: 'Custom ERPs, CRMs, and workflow automation systems.',
    icon: <Server className="h-8 w-8 text-white" />,
    color: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'Analytics & Dashboards',
    description: 'Data visualization tools for actionable business intelligence.',
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    color: 'from-emerald-500 to-cyan-500',
  },
];

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">Solutions for Modern Businesses</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">We don't just write code; we solve complex business problems across various industries.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer shadow-sm hover:shadow-xl dark:shadow-none transition-shadow"
            >
              <div className="absolute inset-0 bg-white dark:bg-slate-800 transition-colors group-hover:bg-slate-50 dark:group-hover:bg-slate-700"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 h-full flex flex-col items-start">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${solution.color} mb-6 shadow-lg`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{solution.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 text-base">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};