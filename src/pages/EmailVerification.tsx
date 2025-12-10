import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [showPinInput, setShowPinInput] = useState(false);
  const [pin, setPin] = useState("");

  const handleVerifyPin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1">
              <span className="text-primary text-2xl font-bold">&gt;</span>
              <span className="text-primary text-2xl font-bold border-2 border-primary px-1">E</span>
              <span className="text-primary text-2xl font-bold">&lt;</span>
            </div>
          </div>

          <h1 className="text-xl font-semibold text-card-foreground text-center mb-2">
            Email Verification
          </h1>
          <p className="text-muted-foreground text-sm text-center mb-4">
            Please check your email for a verification link.
          </p>

          {/* Yellow info box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-amber-800 text-center">
              A 6-digit PIN has been sent to your email. Please check your inbox.
            </p>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-1">
            We've sent a verification link to:
          </p>
          <p className="text-sm font-medium text-card-foreground text-center mb-4">
            okorugboprogress5@gmail.com
          </p>

          <p className="text-sm text-muted-foreground text-center mb-2">
            Didn't receive the email?
          </p>
          <ul className="text-sm text-muted-foreground mb-4 space-y-1 list-disc list-inside">
            <li>Check your spam/junk folder</li>
            <li>Wait a few minutes for delivery</li>
            <li>Make sure the email address is correct</li>
          </ul>

          <Button 
            variant="outline" 
            className="w-full mb-3 bg-card border-border text-card-foreground hover:bg-muted"
          >
            Resend Verification Email
          </Button>

          <p className="text-sm text-muted-foreground text-center mb-3">or</p>

          <Button 
            variant="outline"
            className="w-full mb-4 bg-muted border-border text-card-foreground hover:bg-muted/80"
            onClick={() => setShowPinInput(!showPinInput)}
          >
            Get 6-Digit PIN Instead
          </Button>

          {showPinInput && (
            <div className="mb-4">
              <p className="text-sm text-muted-foreground text-center mb-1">
                Enter the 6-digit PIN sent to:
              </p>
              <p className="text-sm font-medium text-card-foreground text-center mb-3">
                okorugboprogress5@gmail.com
              </p>
              
              <label className="text-sm text-card-foreground mb-2 block">6-Digit PIN</label>
              <Input
                type="text"
                placeholder="000000"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                maxLength={6}
                className="text-center bg-input border-border mb-3"
              />
              
              <Button 
                onClick={handleVerifyPin}
                className="w-full bg-muted-foreground hover:bg-muted-foreground/90 text-white"
              >
                Verify PIN
              </Button>
            </div>
          )}

          <button 
            onClick={() => setShowPinInput(false)}
            className="text-sm text-card-foreground hover:underline w-full text-center mb-3 block"
          >
            Back to Email Verification
          </button>

          <p className="text-sm text-muted-foreground text-center">
            Already verified?{" "}
            <a href="/signup" className="text-card-foreground font-medium hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
