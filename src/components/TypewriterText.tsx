import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

export const TypewriterText = ({ text, className = '' }: TypewriterTextProps) => {
  const letters = text.split('');

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: index * 0.03,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};
