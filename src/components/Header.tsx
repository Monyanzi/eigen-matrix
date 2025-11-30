import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 glass-panel border-b border-border/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
            <span className="w-8 h-8 bg-navy text-white flex items-center justify-center font-serif text-lg font-bold">E</span>
            <span className="font-serif font-bold text-2xl tracking-tighter text-navy group-hover:opacity-80 transition-opacity">
                EIGEN
            </span>
        </Link>

      <nav className="hidden md:flex items-center gap-12">
        <Link to="/expertise" className="text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors font-medium">
          Expertise
        </Link>
        <Link to="/about" className="text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors font-medium">
          About
        </Link>
        <Link to="/contact" className="text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors font-medium">
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Button
          size="sm"
          className="relative overflow-hidden bg-navy text-white rounded-none px-10 h-14 font-medium tracking-wide shadow-xl shadow-navy/10 group"
          asChild
        >
          <Link to="/contact">
            <span className="relative z-10 flex items-center gap-2">
              Get Audit
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="absolute inset-0 bg-navy-deep translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
        </Button>
      </div>
      </nav>
    </motion.header>
  );
};
