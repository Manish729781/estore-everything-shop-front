import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Minus, Plus, Heart, Share2, FileText, Star, User, Shield, Truck, CreditCard, Award, CheckCircle, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useLanguage } from '@/contexts/LanguageContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';

const ProductDescription = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  // Product data array (this would typically come from an API or context)
  const allProducts = [
    {
      id: 1,
      title: 'Minimalism Shirts',
      price: '₹3,373',
      originalPrice: '₹4,750',
      category: 'Wardrobe wear',
      description: 'A perfect minimalist shirt designed for modern comfort and style. Made with premium cotton blend fabric that offers breathability and durability. The clean lines and subtle details make it versatile for both casual and semi-formal occasions.',
      images: [
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
      ],
      colors: [
        { name: 'beige', color: '#b6a07a' },
        { name: 'light-gray', color: '#e5e5e5' },
        { name: 'brown', color: '#c2b59b' }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      specifications: [
        { label: 'Material', value: 'Cotton Blend' },
        { label: 'Fit', value: 'Regular' },
        { label: 'Care', value: 'Machine Wash' },
        { label: 'Origin', value: 'Made in India' }
      ],
      inStock: true
    },
    {
      id: 2,
      title: 'Quicker Sneakers',
      price: '₹3,373',
      originalPrice: '₹4,750',
      category: 'Footwear',
      description: 'High-performance sneakers designed for active lifestyles. Features advanced cushioning technology and breathable mesh upper for maximum comfort during workouts or daily wear.',
      images: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
      ],
      colors: [
        { name: 'white', color: '#fff' },
        { name: 'gray', color: '#e5e5e5' },
        { name: 'navy', color: '#1a223a' }
      ],
      sizes: ['7', '8', '9', '10', '11'],
      specifications: [
        { label: 'Material', value: 'Mesh & Synthetic' },
        { label: 'Sole', value: 'Rubber' },
        { label: 'Type', value: 'Running' },
        { label: 'Weight', value: '280g' }
      ],
      inStock: true
    },
    {
      id: 3,
      title: 'Gentle Body Care Cleanser',
      price: '₹3,373',
      originalPrice: '₹4,750',
      category: 'Fragrance',
      description: 'A luxurious body cleanser enriched with natural extracts and essential oils. Gently cleanses while nourishing your skin, leaving it soft, smooth, and delicately fragranced.',
      images: [
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
      ],
      colors: [],
      sizes: ['250ml', '500ml'],
      specifications: [
        { label: 'Volume', value: '250ml' },
        { label: 'Type', value: 'Body Cleanser' },
        { label: 'Skin Type', value: 'All Skin Types' },
        { label: 'Fragrance', value: 'Lavender & Mint' }
      ],
      inStock: true
    },
    {
      id: 4,
      title: 'Gold Dipped U Shaped Earrings',
      price: '₹6,640',
      originalPrice: '₹8,300',
      category: 'Jewellery',
      description: 'Your new go-to modern hoop. The custom U-Unit shape and endless surface of shine make for an ultra wearable earring. They open and close with a hinge so you\'ll never have to search for an earring back again. Pull back hinge gently to open finished in high polish gold.',
      images: [
        '/lovable-uploads/2ff43a0b-370c-4ef4-91b1-da6f04986113.png',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
      ],
      colors: [
        { name: 'gold', color: '#FFD700' },
        { name: 'silver', color: '#C0C0C0' },
        { name: 'rose-gold', color: '#E8B4CB' }
      ],
      sizes: ['6', '7', '8', '9', '10'],
      specifications: [
        { label: 'Width', value: '45 Mm' },
        { label: 'Height', value: '182 Mm' },
        { label: 'Weight', value: 'Gross 1,422 G' },
        { label: 'Purity', value: '14 KT' }
      ],
      inStock: true
    }
  ];

  // Customer reviews data
  const customerReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "Excellent quality! The fabric is so soft and comfortable. Perfect fit and great value for money.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 4,
      comment: "Good product overall. Fast delivery and nice packaging. Would definitely recommend to others.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Bangalore",
      rating: 5,
      comment: "Amazing quality and exactly as shown in pictures. The color is vibrant and the material feels premium.",
      date: "2 weeks ago"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Pune",
      rating: 4,
      comment: "Very satisfied with the purchase. Good quality and comfortable to wear. Will buy again.",
      date: "3 weeks ago"
    },
    {
      id: 5,
      name: "Kavya Nair",
      location: "Chennai",
      rating: 5,
      comment: "Outstanding product! The design is elegant and the quality exceeded my expectations. Highly recommended!",
      date: "1 month ago"
    }
  ];

  // Find the current product based on the ID from URL
  const productId = parseInt(id || '1');
  const currentProduct = allProducts.find(product => product.id === productId);

  // FIRST useEffect: Handle redirect for invalid products
  useEffect(() => {
    if (!currentProduct && !isRedirecting) {
      console.log(`Product with ID ${productId} not found, redirecting to product 1`);
      setIsRedirecting(true);
      navigate('/product/1', { replace: true });
    }
  }, [productId, currentProduct, navigate, isRedirecting]);

  // SECOND useEffect: Initialize color and size when currentProduct is available
  useEffect(() => {
    if (currentProduct) {
      console.log('Product loaded:', currentProduct.id, currentProduct.title);
      
      // Set initial color
      if (currentProduct.colors.length > 0) {
        setSelectedColor(currentProduct.colors[0].name);
        console.log('Initial color set to:', currentProduct.colors[0].name);
      } else {
        setSelectedColor('');
      }
      
      // Set initial size
      if (currentProduct.sizes.length > 0) {
        setSelectedSize(currentProduct.sizes[0]);
        console.log('Initial size set to:', currentProduct.sizes[0]);
      } else {
        setSelectedSize('');
      }
      
      // Reset other states when product changes
      setSelectedImage(0);
      setQuantity(1);
      setIsRedirecting(false);
    }
  }, [currentProduct?.id]);

  // Don't render content if redirecting or no product found
  if (isRedirecting || !currentProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-estore-dark mx-auto mb-4"></div>
            <p className="text-gray-600">Loading product...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Check if product is in wishlist
  const isProductInWishlist = isInWishlist(currentProduct.id.toString());

  const handleWishlistToggle = () => {
    const wishlistItem = {
      id: currentProduct.id.toString(),
      name: currentProduct.title,
      image: currentProduct.images[0],
      price: parseFloat(currentProduct.price.replace('₹', '').replace(',', ''))
    };

    if (isProductInWishlist) {
      removeFromWishlist(currentProduct.id.toString());
      toast({
        title: "Removed from wishlist",
        description: `${currentProduct.title} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(wishlistItem);
      toast({
        title: "Added to wishlist",
        description: `${currentProduct.title} has been added to your wishlist.`,
      });
    }
  };

  const productData = {
    id: currentProduct.id,
    title: currentProduct.title,
    image: currentProduct.images[selectedImage],
    price: currentProduct.price,
    originalPrice: currentProduct.originalPrice,
    quantity: quantity,
    selectedColor: selectedColor,
    selectedSize: selectedSize,
    specifications: currentProduct.specifications
  };

  const handleBuyNow = () => {
    console.log('Buy Now clicked with data:', productData);
    navigate('/address', { 
      state: { 
        productData,
        fromBuyNow: true 
      } 
    });
  };

  const handleAddToCart = () => {
    console.log('Add to Cart clicked with data:', productData);
    navigate('/address', { 
      state: { 
        productData,
        fromAddToCart: true 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-1 px-2">
          <span>{t('nav.home')}</span> / <span>{t('nav.collection')}</span> / <span>{currentProduct.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          {/* Image Gallery */}
          <div className="space-y-1 order-1">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-md">
              <img
                src={currentProduct.images[selectedImage]}
                alt={`${currentProduct.title} - Angle ${selectedImage + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-1 px-1 sm:px-0">
              {currentProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-estore-dark shadow-md scale-105' 
                      : 'border-transparent hover:border-gray-300 hover:shadow-sm'
                  }`}
                  title={`View angle ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${currentProduct.title} - Angle ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Image Counter */}
            <div className="text-center text-sm text-gray-500 font-medium py-1">
              {selectedImage + 1} / {currentProduct.images.length} {t('product.views')}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-2 order-2 px-2 sm:px-0">
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-estore-dark mb-2 leading-tight">
                {currentProduct.title}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-estore-dark">{currentProduct.price}</span>
                <span className="text-lg text-gray-500 line-through">{currentProduct.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                  ✓ {currentProduct.inStock ? t('product.inStock') : t('product.outOfStock')}
                </span>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {currentProduct.specifications.map((spec, index) => (
                  <div key={index} className="text-xs border-b border-gray-100 pb-1 last:border-b-0">
                    <span className="text-gray-500 block sm:inline">{spec.label}:</span>
                    <span className="ml-0 sm:ml-2 font-medium text-estore-dark block sm:inline">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            {currentProduct.colors.length > 0 && (
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <h3 className="text-base font-semibold text-estore-dark mb-2">{t('product.chooseColor')}</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color.name 
                          ? 'border-estore-dark scale-110 shadow-md' 
                          : 'border-gray-300 hover:border-estore-dark hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-1">Selected: {selectedColor}</p>
              </div>
            )}

            {/* Size Selection */}
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <h3 className="text-base font-semibold text-estore-dark mb-2">{t('product.selectSize')}</h3>
              <div className="flex flex-wrap gap-2">
                {currentProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 rounded-lg border-2 font-medium transition-all duration-200 min-w-[40px] text-sm ${
                      selectedSize === size 
                        ? 'border-estore-dark bg-estore-dark text-white shadow-md' 
                        : 'border-gray-300 text-estore-dark hover:border-estore-dark hover:shadow-sm'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">Selected: {selectedSize}</p>
            </div>

            {/* Quantity */}
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <h3 className="text-base font-semibold text-estore-dark mb-2">{t('product.quantity')}</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 py-2 border-x-2 border-gray-300 min-w-[50px] text-center font-medium text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 sticky bottom-2 sm:static">
              <Button 
                onClick={handleBuyNow}
                className="w-full bg-gradient-to-r from-estore-dark to-estore-navy text-white py-3 text-base font-semibold rounded-lg hover:shadow-md transform hover:scale-[1.02] transition-all duration-200"
                disabled={!currentProduct.inStock}
              >
                {currentProduct.inStock ? t('product.buyNow') : t('product.outOfStock')}
              </Button>
              <Button 
                onClick={handleAddToCart}
                variant="outline" 
                className="w-full py-3 text-base font-semibold rounded-lg border-2 border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white transform hover:scale-[1.02] transition-all duration-200"
                disabled={!currentProduct.inStock}
              >
                {t('product.addToCart')}
              </Button>
            </div>

            {/* Share & Features */}
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-200">
                <span className="text-sm font-medium text-estore-dark">{t('product.share')}</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:shadow-sm transition-all duration-200">
                    <Share2 className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={handleWishlistToggle}
                    className={`w-8 h-8 rounded-full flex items-center justify-center hover:shadow-sm transition-all duration-200 ${
                      isProductInWishlist 
                        ? 'bg-gradient-to-br from-red-500 to-red-600 text-white' 
                        : 'bg-gradient-to-br from-red-100 to-red-200 text-red-600'
                    }`}
                  >
                    <Heart className={`w-3 h-3 ${isProductInWishlist ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{t('product.securePayment')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{t('product.freeShipping')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{t('product.delivery')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Company Credentials Section */}
        <div className="mt-3 mb-2">
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="text-center mb-4">
              <h2 className="text-lg font-playfair font-bold text-estore-dark mb-2">Why Choose Us?</h2>
              <p className="text-sm text-gray-600">Trusted by thousands of customers across India</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Trust Badge 1 */}
              <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-estore-dark text-sm mb-1">100% Secure</h3>
                <p className="text-xs text-gray-600">SSL encrypted checkout & secure payment processing</p>
              </div>

              {/* Trust Badge 2 */}
              <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-estore-dark text-sm mb-1">Quality Assured</h3>
                <p className="text-xs text-gray-600">Premium quality products with 30-day return guarantee</p>
              </div>

              {/* Trust Badge 3 */}
              <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-estore-dark text-sm mb-1">50,000+ Happy Customers</h3>
                <p className="text-xs text-gray-600">Join thousands of satisfied customers nationwide</p>
              </div>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-lg font-bold text-estore-dark">5+ Years</div>
                <div className="text-xs text-gray-600">In Business</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-lg font-bold text-estore-dark">50K+</div>
                <div className="text-xs text-gray-600">Products Sold</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-lg font-bold text-estore-dark">4.8★</div>
                <div className="text-xs text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-lg font-bold text-estore-dark">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
            </div>

            {/* Trust Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-estore-dark text-sm">Authenticity Guaranteed</h4>
                  <p className="text-xs text-gray-600">100% genuine products with authenticity certificate</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-estore-dark text-sm">Fast & Free Delivery</h4>
                  <p className="text-xs text-gray-600">Free shipping on orders above ₹999, delivered in 2-5 days</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-estore-dark text-sm">Secure Payments</h4>
                  <p className="text-xs text-gray-600">Multiple payment options with bank-level security</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-3 border border-orange-200">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-estore-dark text-sm">Customer First</h4>
                  <p className="text-xs text-gray-600">Dedicated support team for all your queries</p>
                </div>
              </div>
            </div>

            {/* Certification Badges */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center mb-2">Certified & Trusted</p>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-700">ISO 9001:2015</div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-700">GST Registered</div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-700">MSME Certified</div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-700">BIS Approved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div className="mt-2">
          <Card className="shadow-md">
            <Collapsible open={isDescriptionOpen} onOpenChange={setIsDescriptionOpen}>
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-estore-dark" />
                      <CardTitle className="text-lg text-estore-dark">
                        Product Description
                      </CardTitle>
                    </div>
                    <div className={`transform transition-transform duration-200 ${isDescriptionOpen ? 'rotate-180' : ''}`}>
                      <Plus className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    Learn more about this product's features and benefits
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0 pb-3">
                  <div className="prose prose-gray max-w-none">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200">
                      <h3 className="text-base font-semibold text-estore-dark mb-2">About {currentProduct.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm mb-3">
                        {currentProduct.description}
                      </p>
                      
                      {/* Key Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                        <div className="bg-white rounded-lg p-2 border border-gray-100">
                          <h4 className="font-semibold text-estore-dark mb-1 text-sm">Quality Materials</h4>
                          <p className="text-xs text-gray-600">
                            Crafted with premium materials for lasting durability and comfort.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-gray-100">
                          <h4 className="font-semibold text-estore-dark mb-1 text-sm">Expert Craftsmanship</h4>
                          <p className="text-xs text-gray-600">
                            Designed with attention to detail by skilled artisans.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-gray-100">
                          <h4 className="font-semibold text-estore-dark mb-1 text-sm">Versatile Design</h4>
                          <p className="text-xs text-gray-600">
                            Perfect for various occasions and styling preferences.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-gray-100">
                          <h4 className="font-semibold text-estore-dark mb-1 text-sm">Easy Care</h4>
                          <p className="text-xs text-gray-600">
                            Simple maintenance instructions for long-lasting wear.
                          </p>
                        </div>
                      </div>

                      {/* Specifications Table */}
                      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">
                          <h4 className="font-semibold text-estore-dark text-sm">Technical Specifications</h4>
                        </div>
                        <div className="divide-y divide-gray-200">
                          {currentProduct.specifications.map((spec, index) => (
                            <div key={index} className="px-3 py-2 flex justify-between items-center">
                              <span className="text-gray-600 font-medium text-sm">{spec.label}</span>
                              <span className="text-estore-dark font-semibold text-sm">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-2 mb-2">
          <Card className="shadow-md">
            <Collapsible open={isReviewsOpen} onOpenChange={setIsReviewsOpen}>
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-estore-dark" />
                      <CardTitle className="text-lg text-estore-dark">
                        Customer Reviews
                      </CardTitle>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                        {customerReviews.length} Reviews
                      </span>
                    </div>
                    <div className={`transform transition-transform duration-200 ${isReviewsOpen ? 'rotate-180' : ''}`}>
                      <Plus className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    See what our customers from across India are saying
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0 pb-3">
                  <div className="space-y-3">
                    {/* Overall Rating */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-3 border border-yellow-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-2xl font-bold text-estore-dark">4.6</div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= 5 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">Based on {customerReviews.length} reviews</span>
                      </div>
                    </div>

                    {/* Individual Reviews */}
                    <div className="space-y-2">
                      {customerReviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-sm transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                {review.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-semibold text-estore-dark text-sm">{review.name}</h4>
                                <p className="text-xs text-gray-500">{review.location}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star 
                                    key={star} 
                                    className={`w-3 h-3 ${star <= review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm">{review.comment}</p>
                        </div>
                      ))}
                    </div>

                    {/* Write Review Button */}
                    <div className="text-center pt-2">
                      <Button 
                        variant="outline" 
                        className="px-6 py-2 border-2 border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white transition-all duration-200 text-sm"
                      >
                        Write a Review
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDescription;
