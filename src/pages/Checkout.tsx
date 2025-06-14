
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock cart items - in a real app these would come from a cart context or state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Minimalism Shirts',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      price: '₹4,067',
      quantity: 1
    },
    {
      id: 3,
      title: 'Gentle Body Care Cleanser',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      price: '₹4,067',
      quantity: 1
    }
  ]);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
    paymentMethod: 'cod'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Product removed",
      description: "Item has been removed from your cart"
    });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically process the order, connect with payment gateway, etc.
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for shopping with us.",
      variant: "default",
    });
    
    // Redirect to a success page
    setTimeout(() => navigate('/'), 2000);
  };

  // Calculate subtotal and total
  const subtotal = '₹8,134';
  const shipping = '₹150';
  const total = '₹8,284';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-estore-dark mb-8 text-center">
          Checkout
        </h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-estore-dark mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some items to your cart before checking out</p>
            <button 
              onClick={() => navigate('/products')}
              className="bg-estore-dark text-white px-6 py-3 rounded-full hover:bg-estore-dark/90 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1 bg-white rounded-2xl shadow p-6">
              <h2 className="text-2xl font-semibold text-estore-dark mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-1">
                      <h3 className="font-medium text-estore-dark">{item.title}</h3>
                      <div className="flex justify-between mt-1">
                        <span className="text-gray-600">Quantity: {item.quantity}</span>
                        <span className="font-semibold">{item.price}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">{shipping}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-estore-dark">Total</span>
                    <span className="text-lg font-bold text-estore-dark">{total}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Checkout Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
              <h2 className="text-2xl font-semibold text-estore-dark mb-4">Shipping Information</h2>
              
              <form onSubmit={handleSubmitOrder} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea 
                    id="address" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <select 
                      id="state" 
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input 
                      id="pincode" 
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-estore-dark">Payment Method</h3>
                  
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="cod" 
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-estore-dark"
                      />
                      <span>Cash on Delivery</span>
                    </label>
                    
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="online" 
                        checked={formData.paymentMethod === 'online'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-estore-dark"
                      />
                      <span>Online Payment</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button" 
                    onClick={() => navigate('/products')}
                    className="flex-1 bg-gray-200 text-estore-dark px-6 py-3 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    Continue Shopping
                  </button>
                  
                  <button
                    type="submit" 
                    className="flex-1 bg-estore-dark text-white px-6 py-3 rounded-full hover:bg-estore-dark/90 transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
