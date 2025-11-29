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
      className="sticky top-0 z-50 glass-panel"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif font-bold text-2xl tracking-tight text-navy hover:opacity-80 transition-opacity">
          EIGEN
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {['Expertise', 'Industries', 'About', 'Contact'].map((item) => {
             const id = item === 'About' ? 'the-firm' : item.toLowerCase().replace(' ', '-');
             return (
              <a
                key={item}
                href={`/#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors tracking-wide uppercase"
              >
                {item}
              </a>
             )
          })}
        </div>

        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="bg-navy hover:bg-navy-deep text-white rounded-none px-8 h-12 font-medium tracking-wide transition-all duration-300 shadow-lg shadow-navy/20"
            asChild
          >
            <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Get Audit</a>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};
