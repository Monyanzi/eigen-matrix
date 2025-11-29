import { motion } from 'framer-motion';

export const AbstractShape = () => {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Smooth Topological Surface */}
        <motion.path
          d="M 100 200 Q 150 120, 200 180 T 300 200 Q 320 220, 300 260 T 200 240 Q 150 280, 100 200 Z"
          fill="url(#gradient1)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Secondary Layer */}
        <motion.path
          d="M 120 210 Q 160 150, 200 190 T 280 210 Q 300 230, 280 260 T 200 250 Q 160 280, 120 210 Z"
          fill="url(#gradient2)"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
        />

        {/* Accent Lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M ${150 + i * 25} 160 Q ${200 + i * 10} 200, ${150 + i * 25} 240`}
            stroke="hsl(var(--navy))"
            strokeWidth="1"
            opacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--navy))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
