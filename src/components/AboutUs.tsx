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

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              We are consultants for leaders who demand proof over promises. In a world of endless options and competing advice, we use mathematics and data science to cut through the noise and identify what actually matters for your business.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
              We don't believe in one-size-fits-all solutions or borrowed benchmarks. Your business is unique. Your challenges are specific. Your data holds the answers.
            </p>

            <div className="space-y-5 mb-12">
              {[
                'Deep analytical expertise across strategy, operations, and digital transformation',
                'Proprietary frameworks grounded in mathematics and proven methodologies',
                'Commitment to measurable outcomes you can track and trust',
                'Partnership approach focused on building capability within your team',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <CheckCircle2 size={24} className="text-navy flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <p className="text-foreground text-lg leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-navy hover:bg-navy-deep text-lg px-8 h-14 group rounded-none"
              asChild
            >
              <a href="#contact">
                Start a Conversation
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
            <div className="absolute -bottom-6 -right-6 bg-navy text-white p-8 rounded-lg max-w-xs shadow-xl">
              <p className="font-serif text-2xl mb-2">[Years of Combined Consulting Excellence]</p>
              <p className="text-sm font-light">Delivering transformation across continents and sectors</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
