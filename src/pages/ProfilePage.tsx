
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, LogOut, Image, User, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  const [logoutLoading, setLogoutLoading] = useState(false);
  // We'll still use this for local preview, but not persist to DB
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
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
        .maybeSingle();

      if (!error && data) {
        setProfile({
          full_name: data.full_name ?? "",
          email: data.email ?? "",
          mobile_number: data.mobile_number ?? "",
        });
      }
      setLoading(false);
    }
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    setLogoutLoading(true);
    await supabase.auth.signOut();
    setLogoutLoading(false);
    navigate("/auth");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setSaving(false);
      return;
    }
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: profile.full_name,
        mobile_number: profile.mobile_number,
      })
      .eq("id", user.id);

    setSaving(false);
    // Optionally, show a toast
  };

  // Local avatar preview only (no DB persistence)
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatarPreview(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#181c2b] via-[#f6e7d8] to-[#fdeee8]">
        <Loader2 className="animate-spin w-8 h-8 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#181c2b] via-[#f6e7d8] to-[#fdeee8] py-0 m-0">
      {/* Banner */}
      <div className="w-full pb-6 md:pb-10 pt-7 px-4 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between max-w-4xl mx-auto">
          <h1
            className="text-[2.3rem] md:text-5xl font-playfair mb-3 font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          >
            My Account
          </h1>
          <Button
            variant="link"
            className="pl-0 underline text-[#884715] text-base font-medium flex gap-1 items-center mb-2"
            onClick={handleLogout}
            disabled={logoutLoading}
          >
            <LogOut className="w-5 h-5 mr-1" />
            {logoutLoading ? "Logging out..." : "Log out"}
          </Button>
        </div>
      </div>
      {/* Main content */}
      <div className="max-w-4xl mx-auto w-full px-4 py-10 md:py-14 flex flex-col md:flex-row md:gap-12 gap-8">
        {/* Left column: Profile Info */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col gap-8">
          {/* Profile box */}
          <div className="backdrop-blur-xl rounded-lg p-6 flex flex-col gap-5 items-center">
            <div className="relative">
              <Avatar className="w-24 h-24 border-2 border-[#f6e7d8] shadow">
                {avatarPreview ? (
                  <AvatarImage src={avatarPreview} alt={profile.full_name || "Avatar"} />
                ) : (
                  <AvatarFallback>
                    <User className="w-12 h-12 text-[#bb5b24]/60" />
                  </AvatarFallback>
                )}
              </Avatar>
              <Button
                type="button"
                size="icon"
                className="absolute -bottom-2 -right-2 bg-[#fdeee8]/80 border border-[#bb5b24] p-1"
                onClick={() => avatarInputRef.current?.click()}
                title="Change profile picture"
              >
                <Image className="w-5 h-5 text-[#bb5b24]/70" />
              </Button>
              <input
                type="file"
                accept="image/*"
                ref={avatarInputRef}
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>
            <form
              className="flex flex-col w-full items-stretch gap-6"
              onSubmit={handleSave}
              autoComplete="off"
            >
              <div>
                <label className="text-sm font-medium text-[#23243a]">
                  Full Name
                </label>
                <Input
                  name="full_name"
                  type="text"
                  className="mt-1 text-[#23243a]/90 bg-white/30 backdrop-blur px-3 border-white/40"
                  placeholder="Your name"
                  value={profile.full_name ?? ""}
                  onChange={handleChange}
                  disabled={saving}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#23243a]">
                  Mobile Number
                </label>
                <Input
                  name="mobile_number"
                  type="text"
                  className="mt-1 text-[#23243a]/90 bg-white/30 backdrop-blur px-3 border-white/40"
                  placeholder="Your mobile number"
                  value={profile.mobile_number ?? ""}
                  onChange={handleChange}
                  disabled={saving}
                />
              </div>
              <Button
                type="submit"
                className="mt-1 w-full bg-[#bb5b24]/90 hover:bg-[#884715]/90 text-white/90"
                disabled={saving}
              >
                {saving ? (
                  <Loader2 className="animate-spin w-5 h-5 mr-2" />
                ) : null}
                Save Changes
              </Button>
            </form>
          </div>
        </div>
        {/* Right column: Order/Account */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* Order history */}
          <div className="backdrop-blur-xl rounded-lg p-6">
            <h2 className="font-playfair text-2xl text-[#23243a] mb-4">
              Order history
            </h2>
            <div className="text-lg text-[#23243a]/60">
              <p className="mb-2">You haven't placed any orders yet.</p>
            </div>
          </div>
          {/* Account details/address */}
          <div className="backdrop-blur-xl rounded-lg p-6">
            <h2 className="font-playfair text-2xl text-[#23243a] mb-4">
              Account details
            </h2>
            <div className="text-base mb-1 text-[#23243a]/60">Default address</div>
            <div className="italic text-xl text-[#23243a]/80 mb-5">
              {profile.full_name ? `${profile.full_name}, ` : ""}
              India
            </div>
            <a
              className="font-semibold text-lg text-[#884715] hover:underline flex items-center gap-1"
              href="/address"
            >
              Update or add address <span className="text-xl">&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
