import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Database, Target } from 'lucide-react';
import { Header } from '@/components/Header';
import { AbstractShape } from '@/components/AbstractShape';
import { BlueprintDiagram } from '@/components/BlueprintDiagram';
import { ProfessionalCard } from '@/components/ProfessionalCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-navy">
              The Science of Strategic Clarity.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-light">
              We help enterprise leaders strip away operational noise and scale their fundamental value. Data-driven transformation, without the ambiguity.
            </p>
            
            <Button
              size="lg"
              className="bg-navy hover:bg-navy-deep text-lg px-8 h-14 group"
            >
              View Our Expertise
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <AbstractShape />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRUST & CLARITY */}
      <section className="py-24 px-6 section-break">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
              First Principles Thinking for the C-Suite.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProfessionalCard delay={0.1}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  Signal Extraction
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We use advanced linear algebra to identify the core drivers of your revenue. Not correlations—causations.
              </p>
            </ProfessionalCard>

            <ProfessionalCard delay={0.2}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  Structural Alignment
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Reorganizing your operational vectors to move in a single, profitable direction. Eliminating energy loss through misalignment.
              </p>
            </ProfessionalCard>

            <ProfessionalCard delay={0.3}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  Capital Efficiency
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Mathematically proving where resource allocation yields the highest variance in growth. Every dollar, justified.
              </p>
            </ProfessionalCard>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE WHY US */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-sm font-medium rounded-full mb-4">
                The Laboratory
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                McKinsey gives you benchmarks. We give you proofs.
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Traditional consulting relies on case studies and industry averages. Eigen relies on the inherent geometry of your data.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't guess. We compute. We prove. We deliver mathematical certainty in an uncertain market.
            </p>

            <div className="space-y-3">
              {[
                'Eigenvalue decomposition of revenue streams',
                'Principal component analysis of market variables',
                'Orthogonal transformation of cost structures',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2.5" />
                  <p className="text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-background border border-border rounded-md p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BlueprintDiagram />
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: EXPERTISE PREVIEW */}
      <section className="py-24 px-6 section-break">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Industries We Transform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Applying rigorous quantitative methods across sectors where precision matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Financial Services',
              'Technology',
              'Manufacturing',
              'Healthcare',
            ].map((industry, i) => (
              <motion.div
                key={i}
                className="professional-card rounded-md p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-serif text-xl font-semibold text-navy">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif font-bold text-xl mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Operations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Implementation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl mb-4">Industries</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl mb-4">Johannesburg Office</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-2">
                Sandton City<br />
                Johannesburg, 2196<br />
                South Africa
              </p>
              <p className="text-sm text-white/70">
                26.2041° S, 28.0473° E
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-serif font-bold text-2xl tracking-wide">EIGEN</p>
              <p className="text-sm text-white/50">
                © {new Date().getFullYear()} Eigen Consulting. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
