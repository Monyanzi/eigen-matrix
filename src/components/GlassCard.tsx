import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className = '', hover = true }: GlassCardProps) => {
  return (
    <motion.div
      className={`glass-card rounded-md p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={
        hover
          ? {
              borderColor: 'hsl(var(--cyan) / 0.5)',
              boxShadow: '0 0 20px hsl(var(--cyan) / 0.2)',
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
};
