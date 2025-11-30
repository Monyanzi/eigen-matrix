import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { AbstractShape } from '@/components/AbstractShape';
import { Button } from '@/components/ui/button';

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
                <Link to="/expertise">
                   <span className="relative z-10 flex items-center">
                      View Our Expertise
                      <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                   </span>
                   <span className="absolute inset-0 bg-navy-deep translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>
              </Button>
               <Button
                variant="outline"
                size="lg"
                className="border border-navy/20 text-navy hover:bg-navy text-lg px-12 h-16 group rounded-none hover:text-white transition-all duration-300"
                asChild
              >
                <Link to="/about">Our Approach</Link>
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
                <Link to="/contact">
                  Claim Your Audit
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 h-16 rounded-none"
                asChild
              >
                <Link to="/expertise">View Our Approach</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-white py-24 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20 pb-20 border-b border-white/5">
             <div>
                <h3 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight text-white">Start Your <br/>Transformation</h3>
                 <div className="flex items-center gap-4 group cursor-pointer">
                     <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-all duration-300">
                        <ArrowRight size={20} className="-rotate-45" />
                     </span>
                     <a href="mailto:hello@eigenconsulting.com" className="text-2xl md:text-3xl text-white/90 font-light group-hover:translate-x-2 transition-transform duration-300">hello@eigenconsulting.com</a>
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
