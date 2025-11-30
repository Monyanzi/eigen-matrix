import { motion } from 'framer-motion';
import { Database, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { ProfessionalCard } from '@/components/ProfessionalCard';
import { StrategicFrameworks } from '@/components/StrategicFrameworks';
import { Button } from '@/components/ui/button';

const Expertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* PAGE HEADER */}
      <section className="py-24 md:py-32 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-navy mb-6">
              Our Expertise
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Rigorous thinking for decisive leadership. Data-driven transformation that delivers measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Our Approach</h4>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-navy text-balance max-w-3xl">
              Rigorous Thinking for Decisive Leadership.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProfessionalCard delay={0.1}>
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 border border-navy/10 flex items-center justify-center bg-background">
                    <Database className="w-6 h-6 text-navy" strokeWidth={1} />
                  </div>
                  <span className="font-mono text-sm text-navy/40">01</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-navy mb-4">
                  Find What Truly Matters
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Advanced mathematics to pinpoint revenue drivers. We prove causation, not just correlation.
                </p>
              </div>
            </ProfessionalCard>

            <ProfessionalCard delay={0.2}>
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 border border-navy/10 flex items-center justify-center bg-background">
                    <Target className="w-6 h-6 text-navy" strokeWidth={1} />
                  </div>
                  <span className="font-mono text-sm text-navy/40">02</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-navy mb-4">
                  Get Everyone Moving Together
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Reorganise operations so every team works towards the same profitable goal.
                </p>
              </div>
            </ProfessionalCard>

            <ProfessionalCard delay={0.3}>
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 border border-navy/10 flex items-center justify-center bg-background">
                    <TrendingUp className="w-6 h-6 text-navy" strokeWidth={1} />
                  </div>
                  <span className="font-mono text-sm text-navy/40">03</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-navy mb-4">
                  Make Every Pound Count
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Mathematical proof of where investment delivers strongest returns. No guesswork.
                </p>
              </div>
            </ProfessionalCard>
          </div>
        </div>
      </section>

      {/* STRATEGIC FRAMEWORKS */}
      <StrategicFrameworks />

      {/* INDUSTRIES SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl md:text-6xl font-medium text-navy mb-6 leading-tight">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Applying rigorous analytical methods across sectors where accuracy drives results.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Financial Services', desc: 'Regulatory compliance meets growth' },
              { name: 'Technology', desc: 'Scale without breaking systems' },
              { name: 'Manufacturing', desc: 'Operational efficiency gains' },
              { name: 'Healthcare', desc: 'Patient outcomes + profitability' },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white border border-border p-10 flex flex-col justify-between hover:border-navy transition-all duration-500 h-80 hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/10"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className="text-navy -rotate-45" />
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="font-serif text-3xl text-navy mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {industry.name}
                  </h3>
                  <div className="h-[1px] w-12 bg-navy/20 mb-4 group-hover:w-full transition-all duration-500" />
                  <p className="text-base text-muted-foreground font-light">{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/70 mb-10 font-light">
              Get your complimentary strategic audit with no commitment.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-navy text-lg px-10 h-16 group rounded-none shadow-xl"
              asChild
            >
              <a href="/contact">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
