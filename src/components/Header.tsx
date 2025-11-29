import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="sticky top-0 z-50 glass-panel"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif font-bold text-2xl tracking-tight text-navy hover:opacity-80 transition-opacity">
          EIGEN
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {['Expertise', 'Industries', 'The Firm', 'Contact'].map((item) => {
             const id = item.toLowerCase().replace(' ', '-');
             return (
              <a
                key={item}
                href={`/#${id}`}
                className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors tracking-wide uppercase"
              >
                {item}
              </a>
             )
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors hidden md:block">
            Client Login
          </Link>
          <Button
            size="sm"
            className="bg-navy hover:bg-navy-deep text-white rounded-none px-6 h-10 font-medium tracking-wide transition-all duration-300"
            asChild
          >
            <a href="/#contact">Inquire</a>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};
