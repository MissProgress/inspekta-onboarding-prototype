import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ChevronDown } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    userType: "client",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptPrivacy: false,
    acceptMarketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/email-verification");
  };

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword &&
    formData.acceptTerms &&
    formData.acceptPrivacy;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-xl font-semibold text-card-foreground">
              Create Account
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Join Inspekta and access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* User Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                I am a
              </label>
              <div className="relative">
                <select
                  value={formData.userType}
                  onChange={(e) =>
                    setFormData({ ...formData, userType: e.target.value })
                  }
                  className="w-full h-10 px-3 pr-10 rounded-md border border-border bg-input text-card-foreground text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="client">Client - Looking for properties</option>
                  <option value="agent">Agent - Listing properties</option>
                  <option value="inspector">Inspector</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Full Name
              </label>
              <Input
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="bg-input border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-input border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Phone (Optional)
              </label>
              <Input
                type="tel"
                placeholder="+234 803 123 4567"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="bg-input border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="bg-input border-border pr-14"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-card-foreground text-xs font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Confirm Password
              </label>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="bg-input border-border"
              />
            </div>

            {/* Legal & Privacy Section */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm font-medium text-card-foreground mb-3">Legal & Privacy</p>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div 
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      formData.acceptTerms 
                        ? 'border-primary bg-primary' 
                        : 'border-destructive'
                    }`}
                    onClick={() => setFormData({ ...formData, acceptTerms: !formData.acceptTerms })}
                  >
                    {formData.acceptTerms && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-sm text-card-foreground">
                    I accept the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    <span className="text-destructive">*</span>
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <div 
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      formData.acceptPrivacy 
                        ? 'border-primary bg-primary' 
                        : 'border-destructive'
                    }`}
                    onClick={() => setFormData({ ...formData, acceptPrivacy: !formData.acceptPrivacy })}
                  >
                    {formData.acceptPrivacy && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-sm text-card-foreground">
                    I accept the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    <span className="text-destructive">*</span>
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <div 
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      formData.acceptMarketing 
                        ? 'border-primary bg-primary' 
                        : 'border-border'
                    }`}
                    onClick={() => setFormData({ ...formData, acceptMarketing: !formData.acceptMarketing })}
                  >
                    {formData.acceptMarketing && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-sm text-card-foreground">
                    I consent to receiving marketing communications
                  </span>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-6"
              disabled={!isFormValid}
            >
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/" className="text-card-foreground font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
