import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = `Project Inquiry from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nProject Brief:\n${formState.message}`;
    const mailtoLink = `mailto:Univaft@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Reset form
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 dark:text-white mb-8">Let's Build Something Together</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12 text-xl leading-relaxed">Have a project in mind? We'd love to hear about it. Send us a message and let's start the conversation.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 text-slate-600 dark:text-slate-300">
                <div className="w-14 h-14 rounded-full bg-cyan-50 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-brand-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-base text-slate-500 uppercase tracking-wide font-semibold">Email Us</p>
                  <p className="text-xl font-bold">Contact@Univaft.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-slate-600 dark:text-slate-300">
                <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-brand-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-base text-slate-500 uppercase tracking-wide font-semibold">Visit Us</p>
                  <p className="text-xl font-bold">Rajahmundry, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-slate-600 dark:text-slate-400 mb-3">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 dark:focus:border-brand-primary focus:ring-1 focus:ring-cyan-500 dark:focus:ring-brand-primary text-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-slate-600 dark:text-slate-400 mb-3">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 dark:focus:border-brand-primary focus:ring-1 focus:ring-cyan-500 dark:focus:ring-brand-primary text-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-slate-600 dark:text-slate-400 mb-3">Project Brief</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 dark:focus:border-brand-primary focus:ring-1 focus:ring-cyan-500 dark:focus:ring-brand-primary text-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-brand-primary dark:to-cyan-600 text-white font-bold text-xl rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};