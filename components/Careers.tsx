import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Frontend Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering'
  },
  {
    title: 'Backend Developer (Node.js)',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    department: 'Engineering'
  },
  {
    title: 'UI/UX Designer',
    type: 'Contract',
    location: 'Remote',
    department: 'Design'
  }
];

export const Careers: React.FC = () => {
  return (
    <section className="py-32 relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-brand-primary font-bold tracking-widest text-base uppercase mb-3 block">Join Our Team</span>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">Build the Future With Us</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed">
            We are always looking for passionate individuals who love technology and innovation. 
            Join us in building scalable solutions for global clients.
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-8 group hover:border-brand-primary/30 transition-all"
            >
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{job.title}</h3>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-base text-slate-500 dark:text-slate-400 font-medium">
                  <span className="flex items-center gap-2"><Briefcase className="w-5 h-5"/> {job.department}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 self-center"></span>
                  <span>{job.type}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 self-center"></span>
                  <span>{job.location}</span>
                </div>
              </div>
              <button className="px-8 py-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-base hover:bg-brand-primary hover:text-white transition-colors flex items-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5"/>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center bg-brand-primary/5 rounded-3xl p-12 border border-brand-primary/10"
        >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Don't see your role?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-xl">We are always open to meeting talented people. Send your resume to our HR team.</p>
            <a href="mailto:careers@univaft.com" className="text-brand-primary font-bold hover:underline text-xl">careers@univaft.com</a>
        </motion.div>
      </div>
    </section>
  );
};