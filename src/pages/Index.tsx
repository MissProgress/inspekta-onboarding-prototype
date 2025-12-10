import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in text-center">
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-primary mb-2">Inspekta</h1>
          <p className="text-muted-foreground mb-8">
            Find your perfect property
          </p>

          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/signup">
                Already have an account? Sign in
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
