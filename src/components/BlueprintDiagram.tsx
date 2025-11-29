import { motion } from 'framer-motion';

export const BlueprintDiagram = () => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid Background */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="600" height="400" fill="url(#grid)" />

      {/* Scatter Plot - Before */}
      <g opacity="0.6">
        {[
          [100, 120], [120, 180], [140, 150], [160, 220], [180, 170],
          [200, 240], [220, 200], [240, 260], [260, 230], [280, 280]
        ].map((point, i) => (
          <motion.circle
            key={`scatter-${i}`}
            cx={point[0]}
            cy={point[1]}
            r="4"
            fill="hsl(var(--muted-foreground))"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          />
        ))}
      </g>

      {/* Transformation Arrow */}
      <motion.path
        d="M 320 200 L 360 200"
        stroke="hsl(var(--navy))"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--navy))" />
        </marker>
      </defs>

      {/* Linear Regression Line - After */}
      <motion.line
        x1="400"
        y1="120"
        x2="560"
        y2="280"
        stroke="hsl(var(--navy))"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />

      {/* Fitted Points */}
      <g>
        {[
          [420, 140], [440, 160], [460, 180], [480, 200], [500, 220],
          [520, 240], [540, 260]
        ].map((point, i) => (
          <motion.circle
            key={`fitted-${i}`}
            cx={point[0]}
            cy={point[1]}
            r="3"
            fill="hsl(var(--navy))"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 + i * 0.08, duration: 0.3 }}
          />
        ))}
      </g>

      {/* Labels */}
      <text x="180" y="320" fontSize="12" fill="hsl(var(--muted-foreground))" fontFamily="Inter">
        Raw Data
      </text>
      <text x="460" y="320" fontSize="12" fill="hsl(var(--navy))" fontFamily="Inter" fontWeight="600">
        Signal Extracted
      </text>
    </svg>
  );
};
