
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dummy sign in handler, replace with real backend logic
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // You can connect this to Supabase or Clerk for actual auth.
    alert(`Signed in as ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 mt-8">
        <h2 className="text-3xl font-bold mb-2 text-estore-dark text-center">Sign In</h2>
        <p className="mb-6 text-center text-gray-500">Welcome back! Sign in to your account.</p>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-estore-dark">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              required
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-estore-dark">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link className="text-estore-dark hover:underline font-medium" to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
