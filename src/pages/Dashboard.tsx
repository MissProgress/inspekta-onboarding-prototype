import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Store, 
  FileText, 
  Search, 
  Bell, 
  User,
  CheckCircle,
  Users,
  Shield,
  ChevronDown,
  X
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-6">
              <span className="text-primary font-semibold text-lg">inspekta.app</span>
              <nav className="hidden md:flex items-center gap-1">
                <a href="#" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-card-foreground bg-muted rounded-md">
                  <Home size={16} />
                  Dashboard
                </a>
                <a href="#" className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-card-foreground">
                  <Store size={16} />
                  Marketplace
                </a>
                <a href="#" className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-card-foreground">
                  <FileText size={16} />
                  Inspections
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-muted-foreground hover:text-card-foreground">
                <Search size={20} />
              </button>
              <button className="p-2 text-muted-foreground hover:text-card-foreground relative">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
              </button>
              <button className="flex items-center gap-2 text-sm text-card-foreground">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <User size={16} className="text-success-foreground" />
                </div>
                <span className="hidden md:inline">Progress</span>
                <ChevronDown size={16} className="text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Profile Completion Banner */}
        {showBanner && (
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-card-foreground font-medium">
                  Complete your profile to get better recommendations.
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Add your preferences to find the perfect property.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button onClick={() => navigate("/profile")} size="sm">
                  Complete Profile
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowBanner(false)}
                >
                  Do It Later
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* User Profile Card */}
        <div className="bg-card rounded-lg border border-border p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center shrink-0">
              <User size={28} className="text-success-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-card-foreground">Progress</h2>
              <p className="text-muted-foreground text-sm">Property Seeker</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded">
                  <CheckCircle size={12} />
                  Verified
                </span>
                <span className="text-xs text-muted-foreground">
                  Member since December 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-card rounded-lg border border-border p-4 text-center">
            <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <p className="text-sm font-medium text-card-foreground">Profile Setup</p>
            <p className="text-xs text-muted-foreground">Complete</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-4 text-center">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-card-foreground">Account Status</p>
            <p className="text-xs text-muted-foreground">Active Member</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-4 text-center">
            <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-destructive" />
            </div>
            <p className="text-sm font-medium text-card-foreground">Verification</p>
            <p className="text-xs text-muted-foreground">Verified</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-card rounded-lg border border-border p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <User size={18} className="text-muted-foreground" />
            <h3 className="font-medium text-card-foreground">About Progress</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Progress is a verified property seeker on the Inspekta platform, actively looking for the perfect property to meet their needs.
          </p>
          
          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-4">
            <p className="font-medium text-card-foreground text-sm">Looking for Property?</p>
            <p className="text-xs text-muted-foreground mt-1">
              Progress is currently seeking properties that match their preferences. If you're an agent with suitable listings, consider reaching out!
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-card-foreground mb-2">Profile Status</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Profile Complete</li>
              <li>• Account Verification: VERIFIED</li>
              <li>• Member since December 2025</li>
            </ul>
          </div>
        </div>

        {/* Public Information */}
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} className="text-muted-foreground" />
            <h3 className="font-medium text-card-foreground">Public Information</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            <span className="font-medium">Privacy Protected:</span> Contact information is only shared with verified agents and inspectors through the platform's messaging system to ensure user safety and prevent spam.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <User size={14} />
                Username
              </p>
              <p className="text-sm text-card-foreground">@</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Joined</p>
              <p className="text-sm text-card-foreground">December 2025</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
