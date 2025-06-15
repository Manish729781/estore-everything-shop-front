
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AuthPage = () => {
  const [tab, setTab] = useState<"sign-in" | "sign-up">("sign-in");

  // Input states for sign in/up
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  // Dummy handlers (replace with backend logic as needed)
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signed in as ${signInEmail}`);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${signUpName || signUpEmail}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-amber-100">
      <div className="w-full max-w-md p-8 mt-8">
        {tab === "sign-in" ? (
          <>
            <h2 className="text-2xl font-bold mb-2 text-estore-dark text-center drop-shadow-sm">Sign In</h2>
            <p className="mb-6 text-center text-gray-500">Welcome back! Sign in to your account.</p>
            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-estore-dark">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={signInEmail}
                  onChange={e => setSignInEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-estore-dark">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={signInPassword}
                  onChange={e => setSignInPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full bg-estore-dark text-white hover:bg-estore-navy transition-colors">Sign In</Button>
            </form>
            <p className="text-center text-sm mt-4 text-estore-dark">
              Don't have an account?{" "}
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
            <h2 className="text-2xl font-bold mb-2 text-estore-dark text-center drop-shadow-sm">Sign Up</h2>
            <p className="mb-6 text-center text-gray-500">Create an account to start shopping!</p>
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-estore-dark">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={signUpName}
                  onChange={e => setSignUpName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-estore-dark">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={signUpEmail}
                  onChange={e => setSignUpEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-estore-dark">Password</label>
                <Input
                  type="password"
                  placeholder="Create your password"
                  required
                  value={signUpPassword}
                  onChange={e => setSignUpPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full bg-estore-dark text-white hover:bg-estore-navy transition-colors">Sign Up</Button>
            </form>
            <p className="text-center text-sm mt-4 text-estore-dark">
              Already have an account?{" "}
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
