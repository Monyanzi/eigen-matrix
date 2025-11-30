import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

const Contact = () => {
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              We are always happy to discuss new projects or challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="font-serif text-4xl md:text-5xl mb-8 tracking-tight text-navy">Contact Information</h3>
              
              <div className="space-y-12">
                 <div className="group">
                    <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-navy/40 mb-4">
                        <Mail className="w-4 h-4" />
                        Email
                    </h4>
                    <a href="mailto:hello@eigenconsulting.com" className="text-3xl md:text-4xl text-navy font-light hover:text-navy/70 transition-colors block decoration-navy/20 underline underline-offset-8">
                      hello@eigenconsulting.com
                    </a>
                    <p className="mt-4 text-muted-foreground font-light">
                        We aim to respond to all enquiries within 24 hours.
                    </p>
                 </div>

                 <div>
                    <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-navy/40 mb-4">
                        <MapPin className="w-4 h-4" />
                        Office
                    </h4>
                    <p className="text-navy leading-relaxed text-2xl font-light">
                        Sandton City<br />
                        Johannesburg, 2196<br />
                        South Africa
                    </p>
                 </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-12 border border-navy/10">
               <h3 className="font-serif text-3xl text-navy mb-6">Common Questions</h3>
               <div className="space-y-8">
                  <div>
                      <h4 className="font-medium text-navy text-lg mb-2">What is your typical engagement model?</h4>
                      <p className="text-muted-foreground font-light leading-relaxed">
                          We typically work on a project basis with clear deliverables and timelines. We also offer ongoing advisory retainers for clients who need long-term support.
                      </p>
                  </div>
                  <div>
                      <h4 className="font-medium text-navy text-lg mb-2">Do you work with startups?</h4>
                      <p className="text-muted-foreground font-light leading-relaxed">
                          Yes, we work with high-growth startups that have data complexity and need to scale their analytics capabilities rapidly.
                      </p>
                  </div>
                   <div>
                      <h4 className="font-medium text-navy text-lg mb-2">How do we get started?</h4>
                      <p className="text-muted-foreground font-light leading-relaxed">
                          Simply send us an email. We'll set up a 30-minute introductory call to understand your needs and see if we are a good fit.
                      </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
             <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-balance">
                Ready to speak?
            </h2>
            <a
                href="mailto:hello@eigenconsulting.com?subject=New Project Enquiry"
                className="inline-flex items-center justify-center bg-white text-navy hover:bg-white/90 text-lg px-12 h-16 group rounded-none shadow-xl transition-all duration-300"
              >
                Email Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
