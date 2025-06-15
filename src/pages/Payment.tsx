import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CreditCard, Wallet, Smartphone, Building2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CheckoutGiftCard from "@/components/CheckoutGiftCard";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const addressData = location.state?.addressData;

  // Gift card states
  const [giftCardApplied, setGiftCardApplied] = useState(false);
  const [giftCardDiscount, setGiftCardDiscount] = useState(0);
  const [giftCardCode, setGiftCardCode] = useState<string | undefined>(undefined);

  // Example subtotal & shipping logic (normally comes from cart/order, here static as before)
  const initialSubtotal = 3373;
  const shipping = 150;

  // COD charge
  const [paymentMethod, setPaymentMethod] = useState('card');
  const codCharges = paymentMethod === 'cod' ? 50 : 0;

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

  const handleApplyGiftCard = (discountAmount: number) => {
    setGiftCardApplied(true);
    setGiftCardDiscount(discountAmount);
    setGiftCardCode(document.querySelector<HTMLInputElement>("input[placeholder='Enter gift card code']")?.value.toUpperCase() || "");
  };

  if (!addressData) {
    return null; // Will redirect in useEffect
  }

  // Calculate the new total with gift card discount
  const subtotal = initialSubtotal;
  const total =
    Math.max(
      0,
      subtotal + shipping + codCharges - giftCardDiscount
    );

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
          
          {/* Payment Methods and Order Summary */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-estore-dark mb-6">Payment Method</h2>
            
            <div className="space-y-4 mb-8">
              {/* Payment Options */}
              {/* ... keep existing code for payment methods ... */}
              <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                paymentMethod === 'upi' ? 'border-estore-dark bg-blue-50' : 'border-gray-200'
              }`} onClick={() => setPaymentMethod('upi')}>
                {/* ... keep existing payment option code ... */}
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="upi" 
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    className="w-4 h-4"
                  />
                  <Smartphone className="w-5 h-5 text-estore-dark" />
                  <span className="font-medium">UPI Payment</span>
                </div>
                {paymentMethod === 'upi' && (
                  <div className="mt-4 space-y-3">
                    <input 
                      type="text" 
                      placeholder="Enter UPI ID (e.g., yourname@paytm)" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-2">Popular UPI Apps:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <span>• PhonePe</span>
                        <span>• Google Pay</span>
                        <span>• Paytm</span>
                        <span>• Amazon Pay</span>
                        <span>• BHIM</span>
                        <span>• WhatsApp Pay</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                paymentMethod === 'wallet' ? 'border-estore-dark bg-blue-50' : 'border-gray-200'
              }`} onClick={() => setPaymentMethod('wallet')}>
                {/* ... keep existing payment wallets code ... */}
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="wallet" 
                    checked={paymentMethod === 'wallet'}
                    onChange={() => setPaymentMethod('wallet')}
                    className="w-4 h-4"
                  />
                  <Wallet className="w-5 h-5 text-estore-dark" />
                  <span className="font-medium">Digital Wallets</span>
                </div>
                {paymentMethod === 'wallet' && (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50">
                      <div className="font-medium">Paytm Wallet</div>
                      <div className="text-sm text-gray-600">Pay with Paytm balance</div>
                    </button>
                    <button className="p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50">
                      <div className="font-medium">Amazon Pay</div>
                      <div className="text-sm text-gray-600">Use Amazon Pay balance</div>
                    </button>
                    <button className="p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50">
                      <div className="font-medium">MobiKwik</div>
                      <div className="text-sm text-gray-600">Pay with MobiKwik wallet</div>
                    </button>
                    <button className="p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50">
                      <div className="font-medium">Ola Money</div>
                      <div className="text-sm text-gray-600">Use Ola Money wallet</div>
                    </button>
                  </div>
                )}
              </div>
              
              <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                paymentMethod === 'card' ? 'border-estore-dark bg-blue-50' : 'border-gray-200'
              }`} onClick={() => setPaymentMethod('card')}>
                {/* ... keep existing code for card payment ... */}
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
                    <div className="text-sm text-gray-600">
                      We accept Visa, MasterCard, RuPay, American Express
                    </div>
                  </div>
                )}
              </div>

              <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                paymentMethod === 'netbanking' ? 'border-estore-dark bg-blue-50' : 'border-gray-200'
              }`} onClick={() => setPaymentMethod('netbanking')}>
                {/* ... keep existing code for net banking ... */}
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="netbanking" 
                    checked={paymentMethod === 'netbanking'}
                    onChange={() => setPaymentMethod('netbanking')}
                    className="w-4 h-4"
                  />
                  <Building2 className="w-5 h-5 text-estore-dark" />
                  <span className="font-medium">Net Banking</span>
                </div>
                {paymentMethod === 'netbanking' && (
                  <div className="mt-4">
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option value="">Select your bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="axis">Axis Bank</option>
                      <option value="kotak">Kotak Mahindra Bank</option>
                      <option value="pnb">Punjab National Bank</option>
                      <option value="bob">Bank of Baroda</option>
                      <option value="canara">Canara Bank</option>
                      <option value="union">Union Bank of India</option>
                      <option value="other">Other Banks</option>
                    </select>
                  </div>
                )}
              </div>
              
              <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                paymentMethod === 'cod' ? 'border-estore-dark bg-blue-50' : 'border-gray-200'
              }`} onClick={() => setPaymentMethod('cod')}>
                {/* ... keep existing code for COD ... */}
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
                    Pay when your order is delivered. Additional charges of ₹50 may apply.
                  </p>
                )}
              </div>
            </div>

            {/* Gift Card Option (REUSED) */}
            <CheckoutGiftCard
              onApply={handleApplyGiftCard}
              applied={giftCardApplied}
              appliedCode={giftCardCode}
              discount={giftCardDiscount}
            />

            {/* Order Summary */}
            <div className="border-t pt-6 mb-6">
              <h3 className="font-semibold text-estore-dark mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                {giftCardApplied && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gift Card</span>
                    <span className="font-semibold text-green-700">- ₹{giftCardDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>
                {paymentMethod === 'cod' && (
                  <div className="flex justify-between">
                    <span>COD Charges</span>
                    <span>₹{codCharges}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
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
