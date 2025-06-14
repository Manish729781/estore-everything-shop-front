
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock cart data with proper image URLs
  const cartItems = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 2499,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      color: "Black",
      size: "One Size"
    },
    {
      id: "2", 
      name: "Smart Fitness Watch",
      price: 3999,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      color: "Silver",
      size: "42mm"
    }
  ];

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    toast({
      title: "Quantity updated",
      description: `Item quantity updated to ${newQuantity}`,
    });
  };

  const removeFromCart = (id: string, name: string) => {
    toast({
      title: "Removed from cart",
      description: `${name} has been removed from your cart.`,
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 99;
  const total = subtotal + shipping;

  const handleProceedToCheckout = () => {
    // Navigate to address page first, then to checkout
    navigate('/address');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <h1 className="text-3xl font-playfair font-bold text-estore-dark">
              Shopping Cart
            </h1>
          </div>
          
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 text-center mb-8 max-w-md">
              Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
            </p>
            <Button 
              onClick={() => navigate('/products')}
              className="bg-gradient-to-r from-estore-dark to-estore-navy text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
            >
              Start Shopping
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-3xl font-playfair font-bold text-estore-dark">
            Shopping Cart ({cartItems.length} items)
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-estore-dark mb-1">
                          {item.name}
                        </h3>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Color: {item.color}</p>
                          <p>Size: {item.size}</p>
                        </div>
                      </div>
                      <Button
                        onClick={() => removeFromCart(item.id, item.name)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-300 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          variant="outline"
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          variant="outline"
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-estore-dark">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">
                          ₹{item.price.toLocaleString()} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-estore-dark mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">₹{shipping}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-estore-dark">Total</span>
                    <span className="text-lg font-bold text-estore-dark">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-gradient-to-r from-estore-dark to-estore-navy text-white py-3 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  Proceed to Checkout
                </Button>
                <Button
                  onClick={() => navigate('/products')}
                  variant="outline"
                  className="w-full border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
