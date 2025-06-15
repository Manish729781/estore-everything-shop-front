
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Copy, Users, DollarSign, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AffiliateProgram = () => {
  const [referralCode] = useState('AFFILIATE2025');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`https://estore.com/ref/${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const referralData = [
    { id: 1, referredUser: 'john.doe@email.com', status: 'Active', commission: '$25.00', date: '2025-01-15' },
    { id: 2, referredUser: 'jane.smith@email.com', status: 'Pending', commission: '$15.00', date: '2025-01-12' },
    { id: 3, referredUser: 'mike.wilson@email.com', status: 'Active', commission: '$30.00', date: '2025-01-10' },
    { id: 4, referredUser: 'sarah.johnson@email.com', status: 'Active', commission: '$20.00', date: '2025-01-08' },
    { id: 5, referredUser: 'alex.brown@email.com', status: 'Pending', commission: '$25.00', date: '2025-01-05' },
  ];

  const totalCommission = referralData.reduce((sum, ref) => sum + parseFloat(ref.commission.replace('$', '')), 0);
  const activeReferrals = referralData.filter(ref => ref.status === 'Active').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Affiliate Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our affiliate program and earn commissions by referring new customers. 
            Share your unique link and start earning today!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{referralData.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Referrals</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeReferrals}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Commission</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalCommission.toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Referral Link */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Referral Link</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="referralLink">Share this link to earn commissions</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="referralLink"
                    value={`https://estore.com/ref/${referralCode}`}
                    readOnly
                    className="flex-1"
                  />
                  <Button onClick={handleCopyCode} variant="outline">
                    <Copy className="h-4 w-4 mr-2" />
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Program Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Program Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Commission Structure</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• 15% commission on first purchase</li>
                  <li>• 10% commission on repeat purchases</li>
                  <li>• Minimum payout: $50</li>
                  <li>• Monthly payouts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Marketing Support</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Professional marketing materials</li>
                  <li>• Product images and descriptions</li>
                  <li>• Email templates</li>
                  <li>• Social media content</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Referral History */}
        <Card>
          <CardHeader>
            <CardTitle>Referral History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Referred User</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referralData.map((referral) => (
                  <TableRow key={referral.id}>
                    <TableCell>{referral.referredUser}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        referral.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {referral.status}
                      </span>
                    </TableCell>
                    <TableCell>{referral.commission}</TableCell>
                    <TableCell>{referral.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AffiliateProgram;
