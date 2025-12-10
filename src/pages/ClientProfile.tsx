import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, User, MapPin, RefreshCw } from "lucide-react";

const ClientProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    username: "",
    bio: "",
    preferredLocation: "",
    minBudget: "",
    maxBudget: "",
    propertyTypes: {
      apartment: false,
      house: false,
      duplex: false,
      flat: false,
      studio: false,
      commercial: false,
    },
  });

  const handlePropertyTypeChange = (type: keyof typeof formData.propertyTypes) => {
    setFormData({
      ...formData,
      propertyTypes: {
        ...formData.propertyTypes,
        [type]: !formData.propertyTypes[type],
      },
    });
  };

  const handleSave = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center h-14">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-muted-foreground hover:text-card-foreground"
            >
              <ArrowLeft size={20} />
              <span className="text-sm">Back</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-sm">Let's find your perfect property</p>
          <div className="inline-block bg-card border border-border rounded-full px-4 py-1.5 mt-2">
            <span className="text-sm font-medium text-card-foreground">Client Profile</span>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 animate-fade-in">
          {/* Section Header */}
          <div className="flex items-center gap-2 mb-2">
            <User size={18} className="text-muted-foreground" />
            <h2 className="font-semibold text-card-foreground">Complete Your Profile</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Your name is required to get started. All other fields are optional but help us personalize your experience.
          </p>

          {/* Basic Information */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <User size={16} className="text-muted-foreground" />
              <h3 className="font-medium text-card-foreground">Basic Information</h3>
            </div>

            {/* Avatar Upload */}
            <div className="flex flex-col items-center mb-6 p-6 bg-muted rounded-lg">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-semibold text-primary">OP</span>
              </div>
              <Button variant="link" className="text-primary">
                Upload Photo
              </Button>
              <p className="text-xs text-muted-foreground">Optional • JPEG, PNG, GIF up to 5MB</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1.5">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1.5">
                  Phone Number
                </label>
                <Input
                  placeholder="+234 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Username
              </label>
              <div className="relative">
                <Input
                  placeholder="Choose a unique username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-card-foreground">
                  <RefreshCw size={16} />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Optional • This will be your unique identifier on the platform
              </p>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Bio
              </label>
              <Textarea
                placeholder="Tell others about yourself, your interests, or your expertise..."
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={3}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Optional • Share a bit about yourself with other users
              </p>
            </div>
          </div>

          {/* Property Preferences */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-muted-foreground" />
              <h3 className="font-medium text-card-foreground">Property Preferences</h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Preferred Location
              </label>
              <Input
                placeholder="e.g., Victoria Island, Lekki, Ikeja"
                value={formData.preferredLocation}
                onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1.5">
                  Minimum Budget (₦) <span className="text-muted-foreground font-normal">- Optional</span>
                </label>
                <Input
                  placeholder="e.g., 2000000 (leave empty for no minimum)"
                  value={formData.minBudget}
                  onChange={(e) => setFormData({ ...formData, minBudget: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1.5">
                  Maximum Budget (₦) <span className="text-muted-foreground font-normal">- Optional</span>
                </label>
                <Input
                  placeholder="e.g., 5000000 (leave empty for unlimited)"
                  value={formData.maxBudget}
                  onChange={(e) => setFormData({ ...formData, maxBudget: e.target.value })}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-card-foreground mb-3">
                Property Types (Select all that interest you)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(formData.propertyTypes).map(([type, checked]) => (
                  <div
                    key={type}
                    className="flex items-center gap-2 p-3 border border-border rounded-lg hover:bg-muted cursor-pointer"
                    onClick={() => handlePropertyTypeChange(type as keyof typeof formData.propertyTypes)}
                  >
                    <Checkbox checked={checked} />
                    <span className="text-sm text-card-foreground capitalize">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <Button onClick={handleSave} className="w-full">
            Save Profile
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ClientProfile;
