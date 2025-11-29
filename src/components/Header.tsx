import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 glass-panel"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="font-serif font-bold text-2xl tracking-tight text-navy hover:opacity-80 transition-opacity">
          EIGEN
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['Expertise', 'Industries', 'The Firm', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors tracking-wide uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors hidden md:block">
            Client Login
          </a>
          <Button
            size="sm"
            className="bg-navy hover:bg-navy-deep text-white rounded-none px-6 h-10 font-medium tracking-wide transition-all duration-300"
          >
            Inquire
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};
