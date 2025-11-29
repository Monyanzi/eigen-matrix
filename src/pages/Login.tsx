import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="w-full max-w-md p-8 border border-border bg-white shadow-sm">
          <h1 className="font-serif text-3xl text-navy mb-6 text-center">Client Login</h1>
          <p className="text-muted-foreground text-center mb-8">
            Please enter your credentials to access the client portal.
          </p>
          <div className="space-y-4">
             {/* Mock Form Fields */}
            <div>
              <label className="block text-sm font-medium text-navy mb-1">Email</label>
              <input type="email" className="w-full h-10 px-3 border border-border rounded-none focus:outline-none focus:border-navy" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1">Password</label>
              <input type="password" className="w-full h-10 px-3 border border-border rounded-none focus:outline-none focus:border-navy" />
            </div>
            <Button className="w-full bg-navy hover:bg-navy-deep text-white rounded-none h-12">
              Sign In
            </Button>
          </div>
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-navy flex items-center justify-center gap-2">
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
