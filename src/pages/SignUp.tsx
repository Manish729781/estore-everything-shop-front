
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Dummy sign up handler, replace with real backend logic
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // You can connect this to Supabase or Clerk for actual registration.
    alert(`Account created for ${name || email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-pink-100 to-yellow-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 mt-8">
        <h2 className="text-3xl font-bold mb-2 text-estore-dark text-center">Sign Up</h2>
        <p className="mb-6 text-center text-gray-500">Create an account to start shopping!</p>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-estore-dark">Full Name</label>
            <Input
              type="text"
              placeholder="Enter your full name"
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-estore-dark">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-estore-dark">Password</label>
            <Input
              type="password"
              placeholder="Create your password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link className="text-estore-dark hover:underline font-medium" to="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
