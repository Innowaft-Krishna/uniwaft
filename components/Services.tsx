import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud, Layout } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />,
    title: 'Custom Web Applications',
    description: 'Scalable, high-performance web apps tailored to streamline your business operations and engage users.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions delivering seamless experiences on iOS and Android devices.',
  },
  {
    icon: <Cloud className="h-10 w-10 text-sky-600 dark:text-sky-400" />,
    title: 'Cloud & DevOps Engineering',
    description: 'Robust cloud infrastructure, automated CI/CD pipelines, and secure server management for maximum uptime.',
  },
  {
    icon: <Layout className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
    title: 'UI/UX Design & Prototyping',
    description: 'User-centric interfaces and interactive prototypes that ensure intuitive and delightful user journeys.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">What Uniwaft Does</h2>
          <div className="h-1.5 w-24 bg-cyan-600 dark:bg-brand-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2, delay: 0, ease: "easeOut" } }}
              className="h-full glass-panel p-8 rounded-3xl transition-all duration-200 group border border-white/20 dark:border-white/5 hover:border-cyan-500/50 dark:hover:border-brand-primary/50 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl hover:shadow-[0_20px_40px_-15px_rgba(8,145,178,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] flex flex-col"
            >
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 w-fit group-hover:bg-cyan-50 dark:group-hover:bg-brand-primary/10 transition-colors duration-200">
                <div className="group-hover:scale-110 transition-transform duration-200">
                   {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-brand-primary transition-colors duration-200">{service.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};