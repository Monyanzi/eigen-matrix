import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Database, Target, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { AbstractShape } from '@/components/AbstractShape';
import { BlueprintDiagram } from '@/components/BlueprintDiagram';
import { ProfessionalCard } from '@/components/ProfessionalCard';
import { Button } from '@/components/ui/button';
import { StrategicFrameworks } from '@/components/StrategicFrameworks';
import { AboutUs } from '@/components/AboutUs';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden min-h-[90vh] flex items-center">
         {/* Subtle background noise/grain could be added here via CSS */}
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-navy/30"></span>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-navy/70">Trusted by Fortune 500 Leaders</p>
            </div>

            <h1 className="font-serif font-medium text-7xl md:text-8xl lg:text-[6.5rem] leading-[0.95] mb-10 tracking-tighter text-balance">
              <span className="text-navy/40 block mb-2">Transform</span>
              <span className="text-navy block">Complexity Into Growth.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-14 font-light max-w-xl text-balance border-l border-navy/10 pl-6">
              We help enterprise leaders cut through operational complexity and unlock real value. Data-driven transformation that delivers measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-deep text-lg px-12 h-16 group rounded-none shadow-xl shadow-navy/10 relative overflow-hidden"
                asChild
              >
                <a href="#expertise">
                   <span className="relative z-10 flex items-center">
                      View Our Expertise
                      <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                   </span>
                   <span className="absolute inset-0 bg-navy-deep translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </a>
              </Button>
               <Button
                variant="outline"
                size="lg"
                className="border border-navy/20 text-navy hover:bg-navy text-lg px-12 h-16 group rounded-none hover:text-white transition-all duration-300"
                asChild
              >
                <a href="#the-firm">Our Approach</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent z-10 mix-blend-overlay pointer-events-none" />
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
      <section id="the-firm" className="py-32 px-6 bg-slate-50">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-navy/20 bg-white text-navy text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
                <span className="w-2 h-2 rounded-full bg-navy animate-pulse" />
                The Laboratory
              </div>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-navy mb-8 text-balance leading-tight">
                Beyond Benchmarks. <br/> Proven Results.
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 font-light">
              Most consultancies rely on case studies and industry averages. We rely on the mathematical structure hidden in your own data.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light">
              We don't guess. We calculate. We prove. We deliver results you can measure and trust, even when markets are uncertain.
            </p>

            <div className="space-y-8">
              {[
                'Eigenvalue analysis to identify your most powerful revenue drivers',
                'Principal component analysis to simplify complex market data',
                'Mathematical optimisation of your cost structure',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-6 group cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy bg-white group-hover:bg-navy group-hover:text-white transition-all duration-300 shadow-sm">
                     <Check size={16} />
                  </div>
                  <p className="text-navy text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white border border-border p-16 shadow-2xl shadow-navy/5 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                 style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-navy z-10" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-navy z-10" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-navy z-10" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-navy z-10" />

            <div className="relative z-10">
                <BlueprintDiagram />
            </div>

            <div className="mt-10 text-center relative z-10">
                 <div className="inline-block px-4 py-1 bg-navy/5 border border-navy/10 rounded-full">
                    <p className="font-mono text-xs tracking-widest text-navy/70 uppercase">Figure 1.1: Signal Isolation</p>
                 </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: EXPERTISE PREVIEW */}
      <section id="industries" className="py-32 px-6">
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
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white h-12 px-8 rounded-none hidden md:flex">
                View All Industries
            </Button>
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
           <div className="mt-12 md:hidden">
             <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white h-12 rounded-none">
                View All Industries
            </Button>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-navy-deep text-white py-24 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20 pb-20 border-b border-white/5">
             <div>
                <h3 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight text-white">Start Your <br/>Transformation</h3>
                 <div className="flex items-center gap-4 group cursor-pointer">
                     <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-all duration-300">
                        <ArrowRight size={20} className="-rotate-45" />
                     </span>
                     <p className="text-2xl md:text-3xl text-white/90 font-light group-hover:translate-x-2 transition-transform duration-300">hello@eigenconsulting.com</p>
                 </div>
             </div>
             <div className="flex flex-col justify-end">
                <p className="text-sm text-white/40 uppercase tracking-widest mb-4">As Featured In</p>
                <div className="flex flex-wrap gap-8 text-white/60 font-serif text-xl">
                    <span>Financial Times</span>
                    <span className="opacity-30">•</span>
                    <span>Harvard Business Review</span>
                    <span className="opacity-30">•</span>
                    <span>McKinsey Quarterly</span>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-1">
                <Link to="/" className="group flex items-center gap-2 mb-8">
                    <span className="w-8 h-8 bg-white text-navy flex items-center justify-center font-serif text-lg font-bold">E</span>
                    <span className="font-serif font-bold text-2xl tracking-tighter text-white">
                        EIGEN
                    </span>
                </Link>
                <p className="text-white/50 leading-relaxed font-light text-sm max-w-xs">
                    Eigen Consulting combines advanced mathematics with strategic expertise to solve the most complex business challenges.
                </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Services</h3>
              <ul className="space-y-4 text-white/70 font-light text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Strategy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Operations</li>
                <li className="hover:text-white transition-colors cursor-pointer">Analytics</li>
                <li className="hover:text-white transition-colors cursor-pointer">Implementation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Industries</h3>
              <ul className="space-y-4 text-white/70 font-light text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Financial Services</li>
                <li className="hover:text-white transition-colors cursor-pointer">Technology</li>
                <li className="hover:text-white transition-colors cursor-pointer">Manufacturing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Healthcare</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Johannesburg</h3>
              <p className="text-white/70 leading-relaxed mb-4 font-light text-sm">
                Sandton City<br />
                Johannesburg, 2196<br />
                South Africa
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="font-mono text-xs text-white/50 tracking-widest">
                    26.2041° S, 28.0473° E
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/30 uppercase tracking-widest">
                © {new Date().getFullYear()} Eigen Consulting. All rights reserved.
              </p>
              <div className="flex gap-8">
                  <a href="#" className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
                  <a href="#" className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
