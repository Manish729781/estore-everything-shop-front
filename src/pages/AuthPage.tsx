
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";

const AuthPage = () => {
  const [tab, setTab] = useState<"sign-in" | "sign-up">("sign-in");

  // Input states for sign in/up
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpMobile, setSignUpMobile] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // Helper to get the user's mobile number from metadata (if signed up previously)
  async function getMobileNumberForUser(user_id: string): Promise<string | null> {
    // Use Supabase auth.user() to get user with metadata
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;
    const mobile =
      user.user_metadata?.mobile_number ||
      user.user_metadata?.mobile ||
      user.user_metadata?.phone ||
      user.phone ||
      null;
    return mobile ? String(mobile) : null;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: signInEmail,
      password: signInPassword,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Error signing in");
      return;
    }

    // Save login history on successful login
    const user_id = data?.user?.id;
    let mobile_number = null;
    if (user_id) {
      mobile_number = await getMobileNumberForUser(user_id);
      await supabase.from("login_history").insert({
        user_id,
        email: signInEmail,
        mobile_number,
      });
    }

    toast.success("Signed in!");
    window.location.href = "/";
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: signUpEmail,
      password: signUpPassword,
      options: {
        data: { full_name: signUpName, mobile_number: signUpMobile },
        emailRedirectTo: `${window.location.origin}/`,
      },
    });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Error signing up");
    } else {
      toast.success("Account created! Please check your email to confirm.");
      setTab("sign-in");
    }
  };

  // Removed Google sign-in button and icon - "Google" icon does not exist in lucide-react

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-amber-100">
      <div className="w-full max-w-md p-8 mt-8 rounded-lg shadow-xl bg-white/5">
        <div className="flex flex-col gap-4 mb-4">
          {/* Removed Google sign-in button due to missing icon */}
          <div className="flex items-center gap-2 my-2">
            <hr className="flex-1 border-slate-400" />
            <span className="text-xs text-slate-200">or</span>
            <hr className="flex-1 border-slate-400" />
          </div>
        </div>
        {tab === "sign-in" ? (
          <>
            <h2 className="text-2xl font-bold mb-2 text-white text-center drop-shadow-sm">Sign In</h2>
            <p className="mb-6 text-center text-white/80">Welcome back! Sign in to your account.</p>
            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="text-black placeholder:text-black/70"
                  value={signInEmail}
                  onChange={e => setSignInEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="text-black placeholder:text-black/70"
                  value={signInPassword}
                  onChange={e => setSignInPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div />
                <button
                  type="button"
                  className="text-xs text-white underline hover:text-white/80 transition-colors"
                  onClick={() => toast.info("Coming soon: password reset")}
                  tabIndex={-1}
                >
                  Forgot password?
                </button>
              </div>
              <Button type="submit" className="w-full bg-estore-dark text-white hover:bg-estore-navy transition-colors" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" /> : null}
                Sign In
              </Button>
            </form>
            <p className="text-center text-sm mt-4 text-white">
              {"Don't have an account? "}
              <button
                className="font-medium underline"
                onClick={() => setTab("sign-up")}
                type="button"
              >
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2 text-white text-center drop-shadow-sm">Sign Up</h2>
            <p className="mb-6 text-center text-white/80">Create an account to start shopping!</p>
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className="text-black placeholder:text-black/70"
                  value={signUpName}
                  onChange={e => setSignUpName(e.target.value)}
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="text-black placeholder:text-black/70"
                  value={signUpEmail}
                  onChange={e => setSignUpEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Mobile Number</label>
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  required
                  className="text-black placeholder:text-black/70"
                  value={signUpMobile}
                  onChange={e => setSignUpMobile(e.target.value)}
                  autoComplete="tel"
                  pattern="^\+?\d{10,15}$"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white">Password</label>
                <Input
                  type="password"
                  placeholder="Create your password"
                  required
                  className="text-black placeholder:text-black/70"
                  value={signUpPassword}
                  onChange={e => setSignUpPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
              <Button type="submit" className="w-full bg-estore-dark text-white hover:bg-estore-navy transition-colors" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" /> : null}
                Sign Up
              </Button>
            </form>
            <p className="text-center text-sm mt-4 text-white">
              {"Already have an account? "}
              <button
                className="font-medium underline"
                onClick={() => setTab("sign-in")}
                type="button"
              >
                Sign In
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
