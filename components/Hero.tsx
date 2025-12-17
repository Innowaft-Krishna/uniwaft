import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

interface HeroProps {
  onNavigate: (view: string, sectionId?: string) => void;
}

const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.2);
    y.set((clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 50 } }
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden perspective-1000">
      {/* Content */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        
        <motion.div
          variants={item}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 dark:bg-brand-primary/10 dark:border-brand-primary/20 dark:text-brand-accent text-base font-semibold mb-8 backdrop-blur-md"
        >
          <span>Tech Consulting</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-brand-accent animate-pulse"></span>
          <span>Product Engineering</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-brand-accent animate-pulse"></span>
          <span>Cloud Solutions</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.1]"
        >
          Building Digital <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 dark:from-brand-primary dark:via-cyan-400 dark:to-blue-600 bg-300% animate-gradient">
            Experiences That Scale
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-3xl text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed"
        >
          Uniwaft is a technology solutions company delivering scalable software, web, and mobile applications tailored to business needs, focusing on innovation, reliability, and user-centric design.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <MagneticButton
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-brand-primary dark:hover:bg-cyan-600 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_40px_rgba(8,145,178,0.6)] dark:shadow-[0_0_20px_rgba(6,182,212,0.3)] dark:hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] focus:outline-none"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton
            onClick={() => onNavigate('home', 'services')}
            className="group inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-2 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 rounded-full transition-all duration-300 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none backdrop-blur-sm"
          >
            View Services
            <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Decorative Glows specifically for Hero */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/20 dark:bg-brand-primary/10 rounded-full blur-[100px] -z-10" 
      />
    </section>
  );
};