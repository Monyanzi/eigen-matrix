import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';

interface ProfessionalCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ProfessionalCard = ({ children, className = '', delay = 0 }: ProfessionalCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`professional-card rounded-none p-10 ${className}`} // changed rounded-md to rounded-none for sharper look
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      style={{
        // @ts-ignore
        "--mouse-x": useMotionTemplate`${mouseX}px`,
        "--mouse-y": useMotionTemplate`${mouseY}px`,
      }}
    >
      {children}
    </motion.div>
  );
};
