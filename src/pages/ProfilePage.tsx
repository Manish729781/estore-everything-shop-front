
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, LogOut, Image, User, Phone, Home, ShoppingBag, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/components/ui/sonner";

type ProfileData = {
  full_name: string | null;
  email: string | null;
  mobile_number: string | null;
  avatar_url: string | null;
};

const ProfilePage = () => {
  const [profile, setProfile] = useState<ProfileData>({
    full_name: "",
    email: "",
    mobile_number: "",
    avatar_url: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Check authentication and redirect if not logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
    };
    checkAuth();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          navigate("/auth");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Function to create profile if it doesn't exist
  const createProfileIfMissing = async (user: any) => {
    console.log("Creating missing profile for user:", user.id);
    const { error } = await supabase
      .from("profiles")
      .insert({
        id: user.id,
        full_name: user.user_metadata?.full_name || user.user_metadata?.name || "",
        email: user.email,
        mobile_number: user.user_metadata?.mobile_number || "",
        avatar_url: null
      });

    if (error) {
      console.error("Error creating profile:", error);
      toast.error("Failed to create profile");
      return false;
    } else {
      console.log("Profile created successfully");
      toast.success("Profile created successfully!");
      return true;
    }
  };

  // Fetch profile data function
  const fetchProfile = async () => {
    console.log("Fetching profile data...");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("full_name, email, mobile_number, avatar_url")
      .eq("id", user.id)
      .maybeSingle();

    if (error) {
      console.error("Error fetching profile:", error);
      toast.error("Failed to load profile data");
    } else if (data) {
      console.log("Profile data loaded:", data);
      setProfile({
        full_name: data.full_name ?? "",
        email: data.email ?? "",
        mobile_number: data.mobile_number ?? "",
        avatar_url: data.avatar_url ?? "",
      });
      // Set avatar preview from stored URL
      setAvatarPreview(data.avatar_url);
    } else {
      // Profile doesn't exist, create it
      console.log("No profile found, creating one...");
      const created = await createProfileIfMissing(user);
      if (created) {
        // Fetch the newly created profile
        await fetchProfile();
      }
    }
  };

  // Initial profile fetch
  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      await fetchProfile();
      setLoading(false);
    };
    loadProfile();
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

  // Upload avatar to Supabase storage
  const uploadAvatar = async (file: File): Promise<string | null> => {
    try {
      setUploadingAvatar(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Math.random()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Error uploading avatar:', uploadError);
        toast.error('Failed to upload profile picture');
        return null;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error in uploadAvatar:', error);
      toast.error('Failed to upload profile picture');
      return null;
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setSaving(false);
      return;
    }

    try {
      console.log("Saving profile data...");
      
      // Prepare update data
      const updateData: any = {
        full_name: profile.full_name || null,
        mobile_number: profile.mobile_number || null,
      };

      // If there's a new avatar to upload
      const avatarInput = avatarInputRef.current;
      if (avatarInput?.files?.[0]) {
        const uploadedUrl = await uploadAvatar(avatarInput.files[0]);
        if (uploadedUrl) {
          updateData.avatar_url = uploadedUrl;
        }
      }

      const { error } = await supabase
        .from("profiles")
        .update(updateData)
        .eq("id", user.id);

      if (error) {
        console.error("Error saving profile:", error);
        toast.error("Failed to save profile changes");
      } else {
        console.log("Profile saved successfully");
        toast.success("Profile updated successfully!");
        // Refresh profile data after saving
        await fetchProfile();
        // Clear the file input
        if (avatarInput) {
          avatarInput.value = '';
        }
      }
    } catch (error) {
      console.error("Error in handleSave:", error);
      toast.error("Failed to save profile changes");
    }

    setSaving(false);
  };

  // Handle avatar change with preview
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }

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
          <div className="flex gap-3 items-center mb-2">
            <Button
              variant="link"
              className="pl-0 underline text-[#884715] text-base font-medium flex gap-1 items-center"
              onClick={() => navigate("/")}
            >
              <Home className="w-5 h-5 mr-1" />
              Home
            </Button>
            <Button
              variant="link"
              className="pl-0 underline text-[#884715] text-base font-medium flex gap-1 items-center"
              onClick={handleLogout}
              disabled={logoutLoading}
            >
              <LogOut className="w-5 h-5 mr-1" />
              {logoutLoading ? "Logging out..." : "Log out"}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-8">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button
            variant="outline"
            className="bg-white/70 backdrop-blur-sm border-[#bb5b24]/30 text-[#bb5b24] hover:bg-white/90 flex gap-2 items-center"
            onClick={() => navigate("/products")}
          >
            <ShoppingBag className="w-4 h-4" />
            Shop Products
          </Button>
          <Button
            variant="outline"
            className="bg-white/70 backdrop-blur-sm border-[#bb5b24]/30 text-[#bb5b24] hover:bg-white/90 flex gap-2 items-center"
            onClick={() => navigate("/wishlist")}
          >
            <Heart className="w-4 h-4" />
            Wishlist
          </Button>
          <Button
            variant="outline"
            className="bg-white/70 backdrop-blur-sm border-[#bb5b24]/30 text-[#bb5b24] hover:bg-white/90 flex gap-2 items-center"
            onClick={() => navigate("/cart")}
          >
            <ShoppingBag className="w-4 h-4" />
            Cart
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
              <Avatar className="w-32 h-32 border-2 border-[#f6e7d8] shadow-lg">
                {avatarPreview || profile.avatar_url ? (
                  <AvatarImage 
                    src={avatarPreview || profile.avatar_url || ""} 
                    alt={profile.full_name || "Avatar"} 
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <AvatarFallback className="bg-gradient-to-br from-[#f6e7d8] to-[#fdeee8]">
                    <User className="w-16 h-16 text-[#bb5b24]/60" />
                  </AvatarFallback>
                )}
              </Avatar>
              <Button
                type="button"
                size="icon"
                className="absolute -bottom-2 -right-2 bg-[#fdeee8]/90 hover:bg-[#fdeee8] border border-[#bb5b24] p-2 rounded-full shadow-md"
                onClick={() => avatarInputRef.current?.click()}
                title="Change profile picture"
                disabled={uploadingAvatar}
              >
                {uploadingAvatar ? (
                  <Loader2 className="w-4 h-4 text-[#bb5b24] animate-spin" />
                ) : (
                  <Image className="w-4 h-4 text-[#bb5b24]" />
                )}
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
                disabled={saving || uploadingAvatar}
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
