
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  const [logoutLoading, setLogoutLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect if not logged in
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="w-full bg-[#fdeee8] pb-4 md:pb-8 pt-7 px-4 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between max-w-7xl mx-auto">
          <h1 className="text-[2.4rem] md:text-5xl font-playfair mb-3 font-bold text-[#bb5b24]">My Account</h1>
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

      {/* Main content (responsive 2 column) */}
      <div className="max-w-7xl mx-auto w-full px-4 py-10 md:pt-12 flex flex-col md:flex-row md:gap-6">
        {/* Left: order history */}
        <div className="w-full md:w-1/2 pr-0 md:pr-6 mb-10 md:mb-0">
          <h2 className="font-playfair text-2xl md:text-2xl text-[#23243a] mb-3">Order history</h2>
          <div className="text-lg text-[#23243a]">
            <p className="mb-2">You haven't placed any orders yet.</p>
          </div>
        </div>
        {/* Right: account details */}
        <div className="w-full md:w-1/2 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-[#e7e7e7]">
          <h2 className="font-playfair text-2xl md:text-2xl text-[#23243a] mb-3">Account details</h2>
          <div className="text-base mb-1 text-[#23243a]">Default address</div>
          <div className="italic text-xl text-[#23243a] mb-5">
            {profile.full_name ? `${profile.full_name}, ` : ""}
            India
          </div>
          <a
            className="font-semibold text-lg text-[#884715] hover:underline flex items-center gap-1"
            href="/address"
          >
            View addresses (1) <span className="text-xl">&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
