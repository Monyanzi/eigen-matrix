import { motion } from 'framer-motion';
import { BarChart3, PieChart, LineChart, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Focused analytics capabilities designed to drive business performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-t border-navy/10 pt-10"
            >
                <div className="w-12 h-12 bg-navy/5 text-navy flex items-center justify-center mb-6">
                    <BarChart3 strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-navy mb-4">Analytics Strategy & Roadmaps</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                    We help you define a clear path for your data initiatives, aligning technical investment with business goals to ensure ROI.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Clear investment prioritisation based on value.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Technology stack assessment and selection.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Data governance frameworks that work.
                    </li>
                </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-t border-navy/10 pt-10"
            >
                <div className="w-12 h-12 bg-navy/5 text-navy flex items-center justify-center mb-6">
                    <PieChart strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-navy mb-4">Data Visualisation & Dashboards</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                    We turn complex datasets into intuitive, beautiful dashboards that allow leaders to understand performance at a glance.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Executive dashboards for C-suite decision making.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Operational reports for daily management.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Automated reporting to reduce manual effort.
                    </li>
                </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-t border-navy/10 pt-10"
            >
                <div className="w-12 h-12 bg-navy/5 text-navy flex items-center justify-center mb-6">
                    <LineChart strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-navy mb-4">BI Implementation & Optimisation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                    We ensure your Business Intelligence tools are implemented correctly, optimised for performance, and actually used by your team.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Power BI, Tableau, and Looker expert implementation.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Data model optimisation for speed and accuracy.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Self-service analytics enablement.
                    </li>
                </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border-t border-navy/10 pt-10"
            >
                <div className="w-12 h-12 bg-navy/5 text-navy flex items-center justify-center mb-6">
                    <MessageSquare strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-navy mb-4">Analytics Advisory</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                   Ongoing support and guidance for leaders who need a sounding board for data-related decisions and challenges.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Fractional Chief Data Officer (CDO) services.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Team capability assessment and hiring support.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2"></span>
                        Data literacy training for leadership teams.
                    </li>
                </ul>
            </motion.div>

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
              Let's Solve Your Data Challenges
            </h2>
            <p className="text-lg text-white/70 mb-10 font-light">
              Get in touch to discuss how we can help you achieve your goals.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-navy text-lg px-10 h-16 group rounded-none shadow-xl"
              asChild
            >
               <a href="mailto:hello@eigenconsulting.com?subject=Service Enquiry">
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

export default Services;
