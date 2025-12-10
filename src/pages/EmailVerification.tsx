import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mail, RefreshCw } from "lucide-react";

const EmailVerification = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-2xl font-semibold text-card-foreground mb-2">
            Check Your Email
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            We've sent a verification link to your email address. Please click the link to verify your account.
          </p>

          <div className="bg-muted rounded-lg p-4 mb-6">
            <p className="text-sm text-card-foreground">
              Didn't receive the email? Check your spam folder or click below to resend.
            </p>
          </div>

          <div className="space-y-3">
            <Button onClick={handleVerify} className="w-full">
              I've Verified My Email
            </Button>
            
            <Button variant="outline" className="w-full">
              <RefreshCw className="w-4 h-4 mr-2" />
              Resend Verification Email
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Having trouble? Contact{" "}
            <a href="#" className="text-primary hover:underline">
              support@inspekta.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
