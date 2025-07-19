import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, User } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn, signUp, user, profile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && profile?.role === 'admin') {
      navigate('/admin/dashboard');
    }
  }, [user, profile, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (isSignUp) {
      // Handle admin sign up
      const { error } = await signUp(email, password, fullName || 'Admin User');
      
      if (!error) {
        // After successful signup, switch to login mode
        setIsSignUp(false);
        // Small delay then try to login
        setTimeout(async () => {
          const { error: loginError } = await signIn(email, password);
          if (!loginError) {
            // Check if user is admin after login
            setTimeout(() => {
              if (profile?.role === 'admin') {
                navigate('/admin/dashboard');
              }
            }, 1500);
          }
        }, 2000);
      }
    } else {
      // Handle admin login
      // If trying to login with default admin credentials, first try to create the account
      if (email === 'gits22222@gmail.com' && password === 'Manish@321') {
        // Try to sign up first (in case account doesn't exist)
        await signUp(email, password, 'Admin User');
        // Small delay to let the account creation process
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      const { error } = await signIn(email, password);
      
      if (!error) {
        // Check if user is admin after login
        setTimeout(() => {
          if (profile?.role === 'admin') {
            navigate('/admin/dashboard');
          } else {
            // Not an admin, redirect to home
            navigate('/');
          }
        }, 1500);
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <Lock className="h-6 w-6" />
            {isSignUp ? 'Admin Sign Up' : 'Admin Login'}
          </CardTitle>
          <CardDescription>
            {isSignUp ? 'Create a new admin account' : 'Access the admin dashboard'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder={isSignUp ? "Enter admin email" : "Enter admin email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? (isSignUp ? 'Creating account...' : 'Signing in...') : (isSignUp ? 'Create Admin Account' : 'Sign In')}
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <Button
              variant="ghost"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm"
            >
              {isSignUp ? 'Already have an admin account? Sign in' : 'Need to create admin account? Sign up'}
            </Button>
          </div>
          
          {!isSignUp && (
            <div className="mt-4 text-center text-sm text-muted-foreground">
              <p>Default admin credentials:</p>
              <p>Email: gits22222@gmail.com</p>
              <p>Password: Manish@321</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;