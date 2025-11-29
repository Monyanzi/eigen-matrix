import { motion } from 'framer-motion';
import { ArrowRight, Grid3x3, Filter, TrendingUp } from 'lucide-react';
import { CustomCursor } from '@/components/CustomCursor';
import { EigenvectorAnimation } from '@/components/EigenvectorAnimation';
import { TypewriterText } from '@/components/TypewriterText';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-void noise-bg overflow-hidden">
      <CustomCursor />

      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-void via-void to-void-gradient opacity-50" />

      {/* SECTION 1: THE HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <EigenvectorAnimation />
        
        <motion.div
          className="relative z-10 text-center max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-8 gradient-text">
            Transformation Without Distortion.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
            We isolate the signal. We discard the noise. We scale the truth.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="glass-card text-foreground hover:text-cyan transition-all duration-300 text-lg px-8 py-6 group"
            >
              <span className="mono">Initialize Matrix</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border border-cyan/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-cyan rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: THE DEFINITION */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mono text-cyan text-sm mb-4">// Definition</p>
            <h2 className="text-5xl font-bold mb-6">
              <TypewriterText text="Eigen." />
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              German: <span className="text-foreground italic">inherent, intrinsic, characteristic.</span>
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In linear algebra, an eigenvector is a non-zero vector that changes at most by a scalar factor when a linear transformation is applied to it. The corresponding eigenvalue is the factor by which the eigenvector is scaled.
            </p>
          </motion.div>

          <motion.div
            className="perspective-1000"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <GlassCard className="mono text-sm" hover={false}>
                <div className="flex items-center gap-2 mb-4 text-cyan">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-auto text-muted-foreground">Terminal v1.0</span>
                </div>
                
                <div className="space-y-2">
                  <p className="text-cyan">$ python Principal_Component_Analysis.py</p>
                  <p className="text-muted-foreground">Loading dataset...</p>
                  <p className="text-muted-foreground">Computing covariance matrix...</p>
                  <p className="text-muted-foreground">Calculating eigenvalues...</p>
                  <p className="text-foreground">
                    Eigenvalue 1: <span className="text-cyan">λ₁ = 42.8</span>
                  </p>
                  <p className="text-foreground">
                    Eigenvalue 2: <span className="text-cyan">λ₂ = 18.3</span>
                  </p>
                  <p className="text-foreground">
                    Variance explained: <span className="text-cyan">94.7%</span>
                  </p>
                  <p className="text-cyan animate-pulse">█</p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE METHODOLOGY - BENTO GRID */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mono text-cyan text-sm mb-4">// Methodology</p>
            <h2 className="text-5xl font-bold">Core Principles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Card 1 - Large */}
            <GlassCard className="md:col-span-4 md:row-span-2 flex flex-col justify-between min-h-[400px]">
              <div>
                <Grid3x3 className="w-12 h-12 text-cyan mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold mb-4">Orthogonality</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Untangling entangled variables. We decompose complex systems into independent dimensions, ensuring each component operates without interference. This is the foundation of clarity.
                </p>
              </div>
              <div className="mt-8">
                <div className="mono text-xs text-cyan">
                  Matrix Rank: <span className="text-foreground">Full</span> | 
                  Condition Number: <span className="text-foreground">1.02</span>
                </div>
              </div>
            </GlassCard>

            {/* Card 2 - Tall */}
            <GlassCard className="md:col-span-2 md:row-span-3 flex flex-col justify-between min-h-[600px]">
              <div>
                <Filter className="w-12 h-12 text-cyan mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold mb-4">Dimensionality Reduction</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Collapsing market noise into clear signals. Through principal component analysis, we distill thousands of variables into the essential few that drive outcomes.
                </p>
              </div>
              
              {/* Visual Representation */}
              <div className="space-y-3">
                {[
                  { label: 'PC1', value: 68 },
                  { label: 'PC2', value: 23 },
                  { label: 'PC3', value: 9 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mono text-xs mb-1">
                      <span className="text-cyan">{item.label}</span>
                      <span className="text-foreground">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-cyan"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Card 3 - Wide */}
            <GlassCard className="md:col-span-4 flex items-center gap-8 min-h-[180px]">
              <TrendingUp className="w-12 h-12 text-cyan flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Vector Alignment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ensuring capital and talent move with magnitude. We align organizational vectors to maximize directional force, eliminating energy lost to misalignment.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE TEAM */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mono text-cyan text-sm mb-4">// Architects</p>
            <h2 className="text-5xl font-bold">System Designers</h2>
          </motion.div>

          <GlassCard hover={false}>
            <div className="overflow-x-auto">
              <table className="w-full mono text-sm">
                <thead>
                  <tr className="border-b border-border/10">
                    <th className="text-left py-4 px-6 text-cyan font-medium">Name</th>
                    <th className="text-left py-4 px-6 text-cyan font-medium">Role</th>
                    <th className="text-left py-4 px-6 text-cyan font-medium">Specialization</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Thabo Mokoena', role: 'Lead Architect', spec: 'Tensor Calculus' },
                    { name: 'Sarah van der Merwe', role: 'Data Physicist', spec: 'Stochastic Processes' },
                    { name: 'Kagiso Ndlovu', role: 'Systems Engineer', spec: 'Optimization Theory' },
                    { name: 'Amara Okafor', role: 'Vector Analyst', spec: 'Manifold Learning' },
                  ].map((member, i) => (
                    <motion.tr
                      key={i}
                      className="border-b border-border/5 hover:bg-card/5 transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <td className="py-4 px-6 text-foreground group-hover:text-cyan transition-colors">
                        {member.name}
                      </td>
                      <td className="py-4 px-6 text-muted-foreground">{member.role}</td>
                      <td className="py-4 px-6 text-muted-foreground">{member.spec}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SECTION 5: FOOTER - THE TERMINAL */}
      <footer className="relative border-t border-border/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <h2 className="text-7xl font-bold mb-6">EIGEN.</h2>
              <p className="mono text-sm text-muted-foreground">
                Johannesburg // Coordinates: 26.2041° S, 28.0473° E
              </p>
            </div>

            <div className="mono text-sm space-y-3">
              <a href="#" className="block text-cyan hover:text-cyan-glow transition-colors">
                &gt; Contact
              </a>
              <a href="#" className="block text-cyan hover:text-cyan-glow transition-colors">
                &gt; Legal
              </a>
              <a href="#" className="block text-cyan hover:text-cyan-glow transition-colors">
                &gt; System_Status
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border/5">
            <p className="mono text-xs text-muted-foreground text-center">
              © 2025 Eigen Consulting. All vectors reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
