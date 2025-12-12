import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CTO, FinStream',
    quote: "Univaft transformed our legacy system into a modern cloud powerhouse. Their attention to detail and architectural decisions were spot on.",
  },
  {
    name: 'Sarah Chen',
    role: 'Founder, Retailify',
    quote: "Working with the Univaft team was seamless. They understood our vision from day one and delivered a mobile app that our customers love.",
  },
  {
    name: 'Michael Ross',
    role: 'Director of Product, HealthTech',
    quote: "Reliable, innovative, and incredibly skilled. Univaft didn't just build software; they helped refine our product strategy.",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 dark:text-white mb-4">What Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-10 rounded-3xl relative"
            >
              <Quote className="h-10 w-10 text-brand-primary/30 absolute top-8 right-8" />
              <p className="text-xl text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed relative z-10">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg">{item.name}</h4>
                  <p className="text-slate-500 text-base">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};