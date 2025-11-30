import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AbstractShape } from '@/components/AbstractShape';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-navy/30"></span>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-navy/70">Boutique Analytics Consultancy</p>
            </div>

            <h1 className="font-serif font-medium text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] mb-10 tracking-tighter text-balance text-navy">
              Decisions, <br/>
              <span className="text-navy/40">Clarified.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-14 font-light max-w-xl text-balance border-l border-navy/10 pl-6">
              We help small and mid-sized organisations cut through complexity. Clear, actionable intelligence for senior leaders who value precision over jargon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-deep text-lg px-12 h-16 group rounded-none shadow-xl shadow-navy/10 relative overflow-hidden"
                asChild
              >
                 <a href="mailto:hello@eigenconsulting.com?subject=Analytics consulting enquiry">
                   <span className="relative z-10 flex items-center">
                      Email Us
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
                <Link to="/services">Our Services</Link>
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

      {/* MID-PAGE CTA SECTION */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-balance">
               Expertise Without The Bureaucracy
            </h2>
            <p className="text-lg text-white/70 mb-10 font-light max-w-2xl mx-auto">
              We provide direct access to senior specialists. No junior teams, no account managers, just results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-navy text-lg px-10 h-16 group rounded-none shadow-xl"
                asChild
              >
                <Link to="/about">
                  About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 h-16 rounded-none"
                asChild
              >
                <Link to="/approach">How We Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
