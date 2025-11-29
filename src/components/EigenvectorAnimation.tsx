import { motion } from 'framer-motion';

export const EigenvectorAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid Lines */}
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 40}
            x2="800"
            y2={i * 40}
            stroke="hsl(var(--cyan))"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 2,
              delay: i * 0.05,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 1,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="800"
            stroke="hsl(var(--cyan))"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 2,
              delay: i * 0.05,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 1,
            }}
          />
        ))}

        {/* Primary Vector */}
        <motion.line
          x1="400"
          y1="400"
          x2="600"
          y2="200"
          stroke="hsl(var(--cyan))"
          strokeWidth="3"
          animate={{
            x2: [600, 650, 600],
            y2: [200, 150, 200],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="cyan-glow"
        />

        {/* Secondary Vector */}
        <motion.line
          x1="400"
          y1="400"
          x2="200"
          y2="600"
          stroke="hsl(var(--cyan))"
          strokeWidth="2"
          strokeOpacity="0.5"
          animate={{
            x2: [200, 150, 200],
            y2: [600, 650, 600],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Origin Point */}
        <motion.circle
          cx="400"
          cy="400"
          r="5"
          fill="hsl(var(--cyan))"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="cyan-glow"
        />
      </svg>
    </div>
  );
};
