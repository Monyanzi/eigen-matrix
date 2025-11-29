import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProfessionalCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ProfessionalCard = ({ children, className = '', delay = 0 }: ProfessionalCardProps) => {
  return (
    <motion.div
      className={`professional-card rounded-md p-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};
