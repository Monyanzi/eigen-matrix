import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">About EIGEN</h4>
              <h2 className="font-serif text-5xl md:text-6xl font-medium text-navy mb-8 text-balance">
                Rigorous Analysis. Real Results.
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-border">
              <div>
                <p className="font-mono text-3xl font-bold text-navy mb-1">150+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Projects Delivered</p>
              </div>
              <div>
                <p className="font-mono text-3xl font-bold text-navy mb-1">89%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Avg ROI Increase</p>
              </div>
              <div>
                <p className="font-mono text-3xl font-bold text-navy mb-1">12</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Industries Served</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-navy pl-6 mb-10 italic text-xl text-navy/80 font-light">
              "Eigen didn't just give us answers. They showed us how to find them ourselves."
              <footer className="text-sm text-muted-foreground not-italic mt-3">Chief Strategy Officer, FTSE 100 Company</footer>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
              We are consultants for leaders who demand proof over promises. We use mathematics and data science to cut through the noise and identify what actually matters for your business.
            </p>

            <div className="space-y-4 mb-12">
              {[
                'Deep analytical expertise across strategy, operations, and digital transformation',
                'Proprietary frameworks grounded in mathematics and proven methodologies',
                'Measurable outcomes you can track and trust',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <CheckCircle2 size={20} className="text-navy flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <p className="text-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-navy hover:bg-navy-deep text-lg px-10 h-16 group rounded-none shadow-lg shadow-navy/20"
              asChild
            >
              <a href="#contact">
                Claim Your Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/3862134/pexels-photo-3862134.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="EIGEN team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy text-white p-8 max-w-xs shadow-xl">
              <p className="font-mono text-4xl font-bold mb-2">75+</p>
              <p className="text-sm font-light">Years of combined consulting excellence across continents</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
