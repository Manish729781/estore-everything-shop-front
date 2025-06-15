
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ProfileData = {
  full_name: string | null;
  email: string | null;
  mobile_number: string | null;
};

const ProfilePage = () => {
  const [profile, setProfile] = useState<ProfileData>({
    full_name: "",
    email: "",
    mobile_number: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  // Redirect to /auth if not signed in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        toast.info("Please sign in to view your profile.");
        navigate("/auth");
      }
    });
  }, [navigate]);

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, email, mobile_number")
        .eq("id", user.id)
        .single();

      if (error) {
        toast.error("Failed to fetch profile.");
      } else {
        setProfile({
          full_name: data?.full_name ?? "",
          email: data?.email ?? "",
          mobile_number: data?.mobile_number ?? "",
        });
      }
      setLoading(false);
    }

    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast.error("You must be signed in.");
      setSaving(false);
      return;
    }
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: profile.full_name,
        mobile_number: profile.mobile_number,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id);

    if (error) {
      toast.error("Failed to update profile.");
    } else {
      toast.success("Profile updated!");
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-yellow-50 to-amber-100">
      <div className="w-full max-w-md bg-white/80 shadow-xl rounded-lg p-8 mt-8">
        <h2 className="text-3xl font-bold mb-2 text-estore-dark text-center">My Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div>
            <label className="block text-sm font-medium mb-1 text-estore-dark">Full Name</label>
            <Input
              name="full_name"
              type="text"
              placeholder="Enter your full name"
              value={profile.full_name || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-estore-dark">Email</label>
            <Input
              name="email"
              type="email"
              value={profile.email || ""}
              disabled
              className="bg-gray-100 text-gray-400 cursor-not-allowed"
              readOnly
            />
            <p className="text-xs text-muted-foreground mt-1">Email cannot be changed.</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-estore-dark">Mobile Number</label>
            <Input
              name="mobile_number"
              type="tel"
              placeholder="Enter your mobile number"
              value={profile.mobile_number || ""}
              onChange={handleChange}
              pattern="^\+?\d{10,15}$"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={saving}
          >
            {saving ? <Loader2 className="animate-spin mr-2" /> : null}
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
