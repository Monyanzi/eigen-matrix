import { motion } from 'framer-motion';
import { Search, Stethoscope, PencilRuler, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Approach = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* PAGE HEADER */}
      <section className="py-24 md:py-32 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-navy mb-6">
              Our Approach
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              A structured, transparent process designed to deliver clarity and value at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
             {[
               {
                 icon: Search,
                 step: "01",
                 title: "Discover",
                 desc: "We begin by understanding your business context, stakeholders, and existing data landscape. No assumptions, just listening and learning to ensure we solve the right problem."
               },
               {
                 icon: Stethoscope,
                 step: "02",
                 title: "Diagnose",
                 desc: "We analyse your data and systems to identify root causes, bottlenecks, and opportunities. This stage delivers a clear assessment of where you are and what is possible."
               },
               {
                 icon: PencilRuler,
                 step: "03",
                 title: "Design",
                 desc: "We architect a tailored solution, whether a strategic roadmap, a dashboard suite, or an operating model. We iterate with your team to ensure the design fits your reality."
               },
               {
                 icon: Rocket,
                 step: "04",
                 title: "Deliver",
                 desc: "We implement the solution with precision, ensuring technical robustness and user adoption. We don't just hand over code; we ensure your team is empowered to use it."
               }
             ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex gap-8 group"
                >
                   <div className="hidden md:flex flex-col items-center">
                      <span className="font-mono text-sm text-navy/30 mb-4">{item.step}</span>
                      <div className="w-[1px] h-full bg-navy/10 group-hover:bg-navy/30 transition-colors"></div>
                   </div>
                   <div>
                      <div className="w-16 h-16 rounded-full bg-slate-50 border border-navy/10 flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-3xl text-navy mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg font-light">{item.desc}</p>
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
              Start with Discovery
            </h2>
            <p className="text-lg text-white/70 mb-10 font-light">
              Let's discuss where you are and where you want to be.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-navy text-lg px-10 h-16 group rounded-none shadow-xl"
              asChild
            >
              <a href="mailto:hello@eigenconsulting.com?subject=Project Enquiry">
                Email Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
