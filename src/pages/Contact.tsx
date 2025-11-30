import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';

const Contact = () => {
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Ready to transform complexity into growth? Let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20 pb-20 border-b border-border">
            <div>
              <h3 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight text-navy">Start Your Transformation</h3>
              <div className="flex items-center gap-4 group cursor-pointer mb-12">
                <span className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-navy transition-all duration-300">
                  <ArrowRight size={20} className="-rotate-45 text-navy group-hover:text-white transition-colors" />
                </span>
                <a href="mailto:hello@eigenconsulting.com" className="text-2xl md:text-3xl text-navy font-light group-hover:translate-x-2 transition-transform duration-300">
                  hello@eigenconsulting.com
                </a>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-navy/40 mb-4">Office</h4>
                  <p className="text-navy leading-relaxed text-lg">
                    Sandton City<br />
                    Johannesburg, 2196<br />
                    South Africa
                  </p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 border border-navy/10 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="font-mono text-xs text-navy/70 tracking-widest">
                    26.2041° S, 28.0473° E
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-end">
              <p className="text-sm text-navy/40 uppercase tracking-widest mb-4">As Featured In</p>
              <div className="flex flex-wrap gap-8 text-navy/60 font-serif text-xl">
                <span>Financial Times</span>
                <span className="opacity-30">•</span>
                <span>Harvard Business Review</span>
                <span className="opacity-30">•</span>
                <span>McKinsey Quarterly</span>
              </div>
            </div>
          </div>

          {/* COMPLIMENTARY AUDIT */}
          <motion.div
            className="bg-slate-50 p-16 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-navy">
                Get Your Complimentary Strategic Audit
              </h2>
              <p className="text-lg text-muted-foreground mb-3 font-light">
                30-minute consultation with no commitment
              </p>
              <p className="text-sm text-navy/50 mb-10 uppercase tracking-wide">
                Limited to 3 audits per month
              </p>
              <a
                href="mailto:hello@eigenconsulting.com?subject=Strategic Audit Request"
                className="inline-flex items-center justify-center bg-navy hover:bg-navy-deep text-white text-lg px-12 h-16 group rounded-none shadow-xl transition-all duration-300"
              >
                Claim Your Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER LINKS */}
      <footer className="bg-navy-deep text-white py-24 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
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
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Company</h3>
              <ul className="space-y-4 text-white/70 font-light text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/expertise" className="hover:text-white transition-colors">Expertise</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
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

export default Contact;
