import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

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

        <div className="hidden md:flex items-center gap-12">
          {['Expertise', 'About', 'Contact'].map((item) => {
             const id = item.toLowerCase().replace(' ', '-');
             return (
              <a
                key={item}
                href={`/#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="relative text-sm font-semibold text-muted-foreground hover:text-navy transition-colors tracking-widest uppercase group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full" />
              </a>
             )
          })}
        </div>

        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="relative overflow-hidden bg-navy text-white rounded-none px-10 h-14 font-medium tracking-wide shadow-xl shadow-navy/10 group"
            asChild
          >
            <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                <span className="relative z-10 flex items-center gap-2">
                    Get Audit
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="absolute inset-0 bg-navy-deep translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};
