import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-serif font-bold text-2xl tracking-wide text-navy">
          EIGEN
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#expertise"
            className="text-foreground hover:text-navy transition-colors text-[15px] font-medium"
          >
            Expertise
          </a>
          <a
            href="#insights"
            className="text-foreground hover:text-navy transition-colors text-[15px] font-medium"
          >
            Insights
          </a>
          <a
            href="#firm"
            className="text-foreground hover:text-navy transition-colors text-[15px] font-medium"
          >
            The Firm
          </a>
          <a
            href="#contact"
            className="text-foreground hover:text-navy transition-colors text-[15px] font-medium"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Client Login
          </Button>
          <Button size="sm" className="bg-navy hover:bg-navy-deep">
            Inquire
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};
