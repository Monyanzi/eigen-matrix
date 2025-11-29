import { Header } from "@/components/Header";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Legal = () => {
  const { slug } = useParams();

  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Legal";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-24 px-6 max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-navy mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl text-navy mb-8">{title}</h1>
        <div className="prose prose-slate max-w-none text-muted-foreground">
          <p>
            This is a placeholder for the {title} document.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
