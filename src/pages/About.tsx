import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
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
              About Eigen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              We are a boutique team of senior specialists dedicated to clarity, precision, and business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & PHILOSOPHY */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
           <div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mb-8 text-balance">
                 Founded on the belief that data should simplify, not complicate.
              </h2>
           </div>
           <div className="text-lg text-muted-foreground font-light leading-relaxed space-y-6">
              <p>
                 Too many organisations are drowning in data but starving for insight. They have dashboards that no one looks at, reports that don't drive action, and analytics teams that are disconnected from business reality.
              </p>
              <p>
                 Eigen Consulting was created to bridge that gap. We don't just build technical solutions; we solve business problems. We believe in rigorous mathematics applied with practical wisdom.
              </p>
              <p>
                 We work with a select number of clients at a time, ensuring that every project gets the attention of senior experts. No "bait and switch" staffing, no bureaucracy, just direct access to people who know how to get things done.
              </p>
           </div>
        </div>
      </section>

      {/* TEAM / VALUES (Optional placeholder for team or values) */}
      <section className="py-32 px-6 bg-slate-50 border-y border-navy/5">
         <div className="max-w-[1400px] mx-auto">
             <div className="grid md:grid-cols-3 gap-12">
                <div>
                   <h3 className="font-serif text-2xl text-navy mb-4">Precision First</h3>
                   <p className="text-muted-foreground font-light leading-relaxed">
                      We value accuracy above all. In analytics, "good enough" is rarely good enough. We ensure our numbers are right and our logic is sound.
                   </p>
                </div>
                <div>
                   <h3 className="font-serif text-2xl text-navy mb-4">Business Focused</h3>
                   <p className="text-muted-foreground font-light leading-relaxed">
                      We start with the business question, not the dataset. If it doesn't help you make a better decision or improve performance, we don't do it.
                   </p>
                </div>
                <div>
                   <h3 className="font-serif text-2xl text-navy mb-4">Transparent Partnership</h3>
                   <p className="text-muted-foreground font-light leading-relaxed">
                      We work openly and collaboratively. We share our methods, explain our working, and transfer knowledge to your team so you can own the results.
                   </p>
                </div>
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
              Work With Us
            </h2>
            <p className="text-lg text-white/70 mb-10 font-light">
              See if we are the right fit for your organisation.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-navy text-lg px-10 h-16 group rounded-none shadow-xl"
              asChild
            >
              <a href="mailto:hello@eigenconsulting.com?subject=Partnership Enquiry">
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

export default About;
