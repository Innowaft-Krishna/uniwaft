import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const techs = [
  'React', 'Next.js', 'Node.js', 'TypeScript',
  'Flutter', 'React Native', 'Python', 'Go',
  'Firebase', 'AWS', 'Docker', 'PostgreSQL',
  'GraphQL', 'Tailwind CSS', 'Figma', 'Kubernetes'
];

const MagneticPill = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
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
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-28 bg-slate-100 dark:bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">Technologies We Use</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">We leverage the latest and most reliable stacks to build future-proof software.</p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <MagneticPill className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-lg md:text-xl font-bold hover:border-brand-primary dark:hover:border-brand-primary transition-colors shadow-sm hover:shadow-md cursor-default inline-block">
                {tech}
              </MagneticPill>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};