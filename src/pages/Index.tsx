import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Database, Target, Check, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { AbstractShape } from '@/components/AbstractShape';
import { BlueprintDiagram } from '@/components/BlueprintDiagram';
import { ProfessionalCard } from '@/components/ProfessionalCard';
import { Button } from '@/components/ui/button';
import { StrategicFrameworks } from '@/components/StrategicFrameworks';
import { AboutUs } from '@/components/AboutUs';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
         {/* Subtle background noise/grain could be added here via CSS */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-navy/60 mb-6">Trusted by Fortune 500 Leaders</p>

            <h1 className="font-serif font-semibold text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 tracking-tight text-balance">
              <span className="text-navy/50">Transform Complexity</span>{" "}
              <span className="text-navy">Into Growth.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-light max-w-xl text-balance">
              We help enterprise leaders cut through operational complexity and unlock real value. Data-driven transformation that delivers measurable results, not vague promises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-deep text-lg px-10 h-16 group rounded-none shadow-lg shadow-navy/20"
                asChild
              >
                <a href="#expertise">
                  View Our Expertise
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
               <Button
                variant="outline"
                size="lg"
                className="border-2 border-navy/20 text-navy hover:bg-navy/5 text-lg px-10 h-16 group rounded-none"
                asChild
              >
                <a href="#the-firm">Our Approach</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <AbstractShape />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRUST & CLARITY */}
      <section id="expertise" className="py-32 px-6 section-break">
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
                <Link to="/services/analytics" className="mt-8 pt-8 border-t border-border flex items-center text-sm font-bold text-navy cursor-pointer group hover:text-navy-deep underline decoration-2 underline-offset-4">
                  Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
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
                <Link to="/services/operations" className="mt-8 pt-8 border-t border-border flex items-center text-sm font-bold text-navy cursor-pointer group hover:text-navy-deep underline decoration-2 underline-offset-4">
                  Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
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
                <Link to="/services/investment" className="mt-8 pt-8 border-t border-border flex items-center text-sm font-bold text-navy cursor-pointer group hover:text-navy-deep underline decoration-2 underline-offset-4">
                  Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ProfessionalCard>
          </div>
        </div>
      </section>

      {/* STRATEGIC FRAMEWORKS TABS SECTION */}
      <StrategicFrameworks />

      {/* PROMINENT MID-PAGE CTA SECTION */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-balance">
              Get Your Complimentary Strategic Audit
            </h2>
            <p className="text-lg text-white/70 mb-3 font-light">
              30-minute consultation with no commitment
            </p>
            <p className="text-sm text-white/50 mb-10 uppercase tracking-wide">
              Limited to 3 audits per month
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-navy text-lg px-10 h-16 group rounded-none shadow-xl"
                asChild
              >
                <a href="#contact">
                  Claim Your Audit
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 h-16 rounded-none"
                asChild
              >
                <a href="#expertise">View Our Approach</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <AboutUs />

      {/* SECTION 3: THE WHY US */}
      <section id="the-firm" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 border border-navy text-navy text-xs font-bold tracking-widest uppercase mb-6">
                The Laboratory
              </span>
              <h2 className="font-serif text-5xl md:text-6xl font-medium text-navy mb-8 text-balance">
                Beyond Benchmarks. <br/> Proven Results.
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              Most consultancies rely on case studies and industry averages. We rely on the mathematical structure hidden in your own data.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
              We don't guess. We calculate. We prove. We deliver results you can measure and trust, even when markets are uncertain.
            </p>

            <div className="space-y-6">
              {[
                'Eigenvalue analysis to identify your most powerful revenue drivers',
                'Principal component analysis to simplify complex market data',
                'Mathematical optimisation of your cost structure',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full border border-navy/20 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                     <Check size={14} />
                  </div>
                  <p className="text-foreground text-lg font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary/30 border border-border/50 p-12 backdrop-blur-sm relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-navy/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-navy/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-navy/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-navy/40" />

            <BlueprintDiagram />
            <div className="mt-8 text-center">
                 <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Figure 1.1: Signal Isolation</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: EXPERTISE PREVIEW */}
      <section id="industries" className="py-32 px-6 section-break">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-navy mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Applying rigorous analytical methods across sectors where accuracy drives results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Financial Services', slug: 'financial-services', desc: 'Regulatory compliance meets growth', count: 12 },
              { name: 'Technology', slug: 'technology', desc: 'Scale without breaking systems', count: 18 },
              { name: 'Manufacturing', slug: 'manufacturing', desc: 'Operational efficiency gains', count: 9 },
              { name: 'Healthcare', slug: 'healthcare', desc: 'Patient outcomes + profitability', count: 7 },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group relative bg-white border border-border p-8 flex flex-col justify-between hover:border-navy/30 transition-all duration-300 h-64 overflow-hidden block"
                >
                   <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
                   <div className="relative z-10">
                     <h3 className="font-serif text-2xl text-navy mb-3 group-hover:-translate-y-1 transition-transform duration-300">
                       {industry.name}
                     </h3>
                     <p className="text-sm text-muted-foreground">{industry.desc}</p>
                   </div>
                   <div className="relative z-10">
                     <span className="text-xs font-bold tracking-widest uppercase text-navy underline decoration-2 underline-offset-4">
                        View {industry.count} Case Studies →
                     </span>
                   </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-navy-deep text-white py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 pb-12 border-b border-white/10">
            <h3 className="font-serif text-3xl mb-4 tracking-tight">Start Your Transformation</h3>
            <p className="text-xl text-white/80 mb-6 font-light">hello@eigenconsulting.com</p>
            <p className="text-sm text-white/50 mb-8">As featured in Financial Times, McKinsey Quarterly, Harvard Business Review</p>
            <Link to="/login" className="text-sm text-white/60 hover:text-white underline underline-offset-4">Client Portal Login</Link>
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-14">
            <div>
              <h3 className="font-serif text-lg mb-5 tracking-tight">Services</h3>
              <ul className="space-y-3 text-white/60 font-light text-sm">
                <li><Link to="/services/strategy" className="hover:text-white transition-colors">Strategy</Link></li>
                <li><Link to="/services/operations" className="hover:text-white transition-colors">Operations</Link></li>
                <li><Link to="/services/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
                <li><Link to="/services/implementation" className="hover:text-white transition-colors">Implementation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-5 tracking-tight">Industries</h3>
              <ul className="space-y-3 text-white/60 font-light text-sm">
                <li><Link to="/industries/financial-services" className="hover:text-white transition-colors">Financial Services</Link></li>
                <li><Link to="/industries/technology" className="hover:text-white transition-colors">Technology</Link></li>
                <li><Link to="/industries/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link></li>
                <li><Link to="/industries/healthcare" className="hover:text-white transition-colors">Healthcare</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-5 tracking-tight">Legal</h3>
              <ul className="space-y-3 text-white/60 font-light text-sm">
                <li><Link to="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/legal/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/legal/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-5 tracking-tight">Johannesburg</h3>
              <p className="text-white/60 leading-relaxed mb-3 font-light text-sm">
                Sandton City<br />
                Johannesburg, 2196<br />
                South Africa
              </p>
              <p className="font-mono text-xs text-white/40 tracking-widest">
                26.2041° S, 28.0473° E
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-serif font-bold text-2xl tracking-tighter">EIGEN</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">
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
