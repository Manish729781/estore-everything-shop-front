
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Copy, Users, DollarSign, TrendingUp, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AffiliateProgram = () => {
  const [referralCode] = useState('AFFILIATE2025');
  const [copied, setCopied] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productCopied, setProductCopied] = useState(false);

  // Available products for referral with images
  const products = [
    { 
      id: 1, 
      name: 'Minimalism Shirts', 
      category: 'Wardrobe wear', 
      commission: '15%',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=300&q=80'
    },
    { 
      id: 2, 
      name: 'Quicker Sneakers', 
      category: 'Footwear', 
      commission: '12%',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80'
    },
    { 
      id: 3, 
      name: 'Gentle Body Care Cleanser', 
      category: 'Fragrance', 
      commission: '18%',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80'
    },
    { 
      id: 4, 
      name: 'Gold Dipped U Shaped Earrings', 
      category: 'Jewellery', 
      commission: '20%',
      image: '/lovable-uploads/2ff43a0b-370c-4ef4-91b1-da6f04986113.png'
    }
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`https://estore.com/ref/${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyProductLink = () => {
    if (selectedProduct) {
      const productReferralLink = `https://estore.com/product/${selectedProduct}?ref=${referralCode}`;
      navigator.clipboard.writeText(productReferralLink);
      setProductCopied(true);
      setTimeout(() => setProductCopied(false), 2000);
    }
  };

  const referralData = [
    { 
      id: 1, 
      referredUser: 'john.doe@email.com', 
      product: 'Minimalism Shirts', 
      status: 'Active', 
      commission: '$25.00', 
      date: '2025-01-15',
      productImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=100&q=80'
    },
    { 
      id: 2, 
      referredUser: 'jane.smith@email.com', 
      product: 'Quicker Sneakers', 
      status: 'Pending', 
      commission: '$15.00', 
      date: '2025-01-12',
      productImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80'
    },
    { 
      id: 3, 
      referredUser: 'mike.wilson@email.com', 
      product: 'Gold Dipped U Shaped Earrings', 
      status: 'Active', 
      commission: '$30.00', 
      date: '2025-01-10',
      productImage: '/lovable-uploads/2ff43a0b-370c-4ef4-91b1-da6f04986113.png'
    },
    { 
      id: 4, 
      referredUser: 'sarah.johnson@email.com', 
      product: 'Gentle Body Care Cleanser', 
      status: 'Active', 
      commission: '$20.00', 
      date: '2025-01-08',
      productImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80'
    },
    { 
      id: 5, 
      referredUser: 'alex.brown@email.com', 
      product: 'Minimalism Shirts', 
      status: 'Pending', 
      commission: '$25.00', 
      date: '2025-01-05',
      productImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=100&q=80'
    },
  ];

  const totalCommission = referralData.reduce((sum, ref) => sum + parseFloat(ref.commission.replace('$', '')), 0);
  const activeReferrals = referralData.filter(ref => ref.status === 'Active').length;

  // Get selected product details
  const selectedProductDetails = products.find(p => p.id.toString() === selectedProduct);

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

        {/* General Referral Link */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your General Referral Link</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="referralLink">Share this link to earn commissions on any purchase</Label>
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

        {/* Product-Specific Referral */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Product-Specific Referral Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="productSelect">Select a product to refer</Label>
                <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose a product..." />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id.toString()}>
                        <div className="flex items-center gap-3 w-full">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded-md"
                          />
                          <div className="flex flex-col">
                            <span className="font-medium">{product.name}</span>
                            <span className="text-sm text-gray-500">({product.commission} commission)</span>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedProduct && selectedProductDetails && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={selectedProductDetails.image} 
                      alt={selectedProductDetails.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{selectedProductDetails.name}</h3>
                      <p className="text-gray-600">{selectedProductDetails.category}</p>
                      <p className="text-green-600 font-medium">Commission: {selectedProductDetails.commission}</p>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="productReferralLink">Product referral link</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="productReferralLink"
                        value={`https://estore.com/product/${selectedProduct}?ref=${referralCode}`}
                        readOnly
                        className="flex-1"
                      />
                      <Button onClick={handleCopyProductLink} variant="outline">
                        <Copy className="h-4 w-4 mr-2" />
                        {productCopied ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
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
                  <li>• Higher rates for specific products</li>
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
                  <TableHead>Product</TableHead>
                  <TableHead>Referred User</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referralData.map((referral) => (
                  <TableRow key={referral.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img 
                          src={referral.productImage} 
                          alt={referral.product}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <span className="font-medium">{referral.product}</span>
                      </div>
                    </TableCell>
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
