import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { AboutUs } from '@/components/AboutUs';
import { BlueprintDiagram } from '@/components/BlueprintDiagram';
import { Button } from '@/components/ui/button';

const About = () => {
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
              About Eigen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Combining advanced mathematics with strategic expertise to solve the most complex business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT US TABS */}
      <AboutUs />

      {/* THE LABORATORY SECTION */}
      <section className="py-32 px-6 bg-slate-50">
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
              Let's Discuss Your Challenges
            </h2>
            <p className="text-lg text-white/70 mb-10 font-light">
              Schedule a confidential consultation with our team.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-navy text-lg px-10 h-16 group rounded-none shadow-xl"
              asChild
            >
              <a href="/contact">
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
