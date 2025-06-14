
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CreditCard, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const addressData = location.state?.addressData;
  const [paymentMethod, setPaymentMethod] = useState('card');

  useEffect(() => {
    // Redirect to address page if no address data
    if (!addressData) {
      navigate('/address');
    }
  }, [addressData, navigate]);

  const handlePayment = () => {
    // Simulate payment processing
    toast({
      title: "Payment Successful!",
      description: "Your order has been placed successfully.",
      variant: "default",
    });
    
    // Redirect to success page or home
    setTimeout(() => navigate('/'), 2000);
  };

  if (!addressData) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CreditCard className="w-6 h-6 text-estore-dark" />
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-estore-dark">
              Payment
            </h1>
          </div>
          <p className="text-gray-600">Complete your purchase</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Address Summary */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-estore-dark mb-4">Shipping Address</h2>
            <div className="space-y-2 text-sm">
              <p className="font-medium">{addressData.firstName} {addressData.lastName}</p>
              <p>{addressData.address}</p>
              <p>{addressData.city}, {addressData.state} {addressData.pincode}</p>
              <p>{addressData.phone}</p>
              <p>{addressData.email}</p>
            </div>
            
            <Button
              onClick={() => navigate('/address', { state: { addressData } })}
              variant="outline"
              className="w-full mt-4"
            >
              Edit Address
            </Button>
          </div>
          
          {/* Payment Methods */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-estore-dark mb-6">Payment Method</h2>
            
            <div className="space-y-4 mb-8">
              {/* Credit/Debit Card */}
              <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                paymentMethod === 'card' ? 'border-estore-dark bg-blue-50' : 'border-gray-200'
              }`} onClick={() => setPaymentMethod('card')}>
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="card" 
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="w-4 h-4"
                  />
                  <CreditCard className="w-5 h-5 text-estore-dark" />
                  <span className="font-medium">Credit/Debit Card</span>
                </div>
                {paymentMethod === 'card' && (
                  <div className="mt-4 space-y-3">
                    <input 
                      type="text" 
                      placeholder="Card Number" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        placeholder="MM/YY" 
                        className="p-3 border border-gray-300 rounded-lg"
                      />
                      <input 
                        type="text" 
                        placeholder="CVV" 
                        className="p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Cardholder Name" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                )}
              </div>
              
              {/* UPI Payment */}
              <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                paymentMethod === 'upi' ? 'border-estore-dark bg-blue-50' : 'border-gray-200'
              }`} onClick={() => setPaymentMethod('upi')}>
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="upi" 
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    className="w-4 h-4"
                  />
                  <Wallet className="w-5 h-5 text-estore-dark" />
                  <span className="font-medium">UPI Payment</span>
                </div>
                {paymentMethod === 'upi' && (
                  <div className="mt-4">
                    <input 
                      type="text" 
                      placeholder="Enter UPI ID" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                )}
              </div>
              
              {/* Cash on Delivery */}
              <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                paymentMethod === 'cod' ? 'border-estore-dark bg-blue-50' : 'border-gray-200'
              }`} onClick={() => setPaymentMethod('cod')}>
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cod" 
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="w-4 h-4"
                  />
                  <span className="font-medium">Cash on Delivery</span>
                </div>
                {paymentMethod === 'cod' && (
                  <p className="mt-2 text-sm text-gray-600">
                    Pay when your order is delivered. Additional charges may apply.
                  </p>
                )}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="border-t pt-6 mb-6">
              <h3 className="font-semibold text-estore-dark mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹3,373</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹150</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>₹3,523</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={() => navigate('/address', { state: { addressData } })}
                variant="outline"
                className="flex-1 h-12 text-lg"
              >
                Back to Address
              </Button>
              
              <Button
                onClick={handlePayment}
                className="flex-1 h-12 text-lg bg-estore-dark hover:bg-estore-dark/90"
              >
                Complete Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Payment;
