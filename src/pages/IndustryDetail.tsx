import { Header } from "@/components/Header";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const IndustryDetail = () => {
  const { slug } = useParams();

  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Industry Detail";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-24 px-6 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-navy mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-6">{title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
          This is a placeholder page for the {title} industry.
          Here we would showcase our specific experience, client success stories, and tailored solutions for this sector.
        </p>
         <div className="h-64 bg-secondary/20 border border-navy/10 flex items-center justify-center">
            <span className="text-navy/40 font-mono">[Industry Specific Content]</span>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;
