import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
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
              <p className="text-white/70 font-light text-lg max-w-md">
                We help small and mid-sized organisations make better decisions with data. Clear, actionable, and mathematically rigorous.
              </p>
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
              <li><Link to="/services" className="hover:text-white transition-colors">Analytics Strategy</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Data Visualisation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">BI Implementation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Company</h3>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/approach" className="hover:text-white transition-colors">Approach</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-8">Location</h3>
            <p className="text-white/70 leading-relaxed mb-4 font-light text-sm">
              Sandton City<br />
              Johannesburg, 2196<br />
              South Africa
            </p>
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
  );
};
