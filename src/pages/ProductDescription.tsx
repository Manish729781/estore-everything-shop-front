
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Minus, Plus, Heart, Share2, FileText, Star, User } from 'lucide-react';
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-2 px-2">
          <span>{t('nav.home')}</span> / <span>{t('nav.collection')}</span> / <span>{currentProduct.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Image Gallery */}
          <div className="space-y-2 order-1">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={currentProduct.images[selectedImage]}
                alt={`${currentProduct.title} - Angle ${selectedImage + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 px-2 sm:px-0">
              {currentProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-estore-dark shadow-lg scale-105' 
                      : 'border-transparent hover:border-gray-300 hover:shadow-md'
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
            <div className="text-center text-sm text-gray-500 font-medium">
              {selectedImage + 1} / {currentProduct.images.length} {t('product.views')}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-3 order-2 px-2 sm:px-0">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-estore-dark mb-2 leading-tight">
                {currentProduct.title}
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-estore-dark">{currentProduct.price}</span>
                <span className="text-lg sm:text-xl text-gray-500 line-through">{currentProduct.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  ✓ {currentProduct.inStock ? t('product.inStock') : t('product.outOfStock')}
                </span>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentProduct.specifications.map((spec, index) => (
                  <div key={index} className="text-sm border-b border-gray-100 pb-1 last:border-b-0">
                    <span className="text-gray-500 block sm:inline">{spec.label}:</span>
                    <span className="ml-0 sm:ml-2 font-medium text-estore-dark block sm:inline">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            {currentProduct.colors.length > 0 && (
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-estore-dark mb-2">{t('product.chooseColor')}</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color.name 
                          ? 'border-estore-dark scale-110 shadow-lg' 
                          : 'border-gray-300 hover:border-estore-dark hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">Selected: {selectedColor}</p>
              </div>
            )}

            {/* Size Selection */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-estore-dark mb-2">{t('product.selectSize')}</h3>
              <div className="flex flex-wrap gap-2">
                {currentProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-xl border-2 font-medium transition-all duration-200 min-w-[50px] ${
                      selectedSize === size 
                        ? 'border-estore-dark bg-estore-dark text-white shadow-lg' 
                        : 'border-gray-300 text-estore-dark hover:border-estore-dark hover:shadow-md'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">Selected: {selectedSize}</p>
            </div>

            {/* Quantity */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-estore-dark mb-2">{t('product.quantity')}</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-3 border-x-2 border-gray-300 min-w-[60px] text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 sticky bottom-4 sm:static">
              <Button 
                onClick={handleBuyNow}
                className="w-full bg-gradient-to-r from-estore-dark to-estore-navy text-white py-4 text-lg font-semibold rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                disabled={!currentProduct.inStock}
              >
                {currentProduct.inStock ? t('product.buyNow') : t('product.outOfStock')}
              </Button>
              <Button 
                onClick={handleAddToCart}
                variant="outline" 
                className="w-full py-4 text-lg font-semibold rounded-xl border-2 border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white transform hover:scale-[1.02] transition-all duration-200"
                disabled={!currentProduct.inStock}
              >
                {t('product.addToCart')}
              </Button>
            </div>

            {/* Share & Features */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
                <span className="text-sm font-medium text-estore-dark">{t('product.share')}</span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:shadow-md transition-all duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleWishlistToggle}
                    className={`w-10 h-10 rounded-full flex items-center justify-center hover:shadow-md transition-all duration-200 ${
                      isProductInWishlist 
                        ? 'bg-gradient-to-br from-red-500 to-red-600 text-white' 
                        : 'bg-gradient-to-br from-red-100 to-red-200 text-red-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isProductInWishlist ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{t('product.securePayment')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{t('product.freeShipping')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{t('product.delivery')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div className="mt-4">
          <Card className="shadow-lg">
            <Collapsible open={isDescriptionOpen} onOpenChange={setIsDescriptionOpen}>
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-estore-dark" />
                      <CardTitle className="text-xl text-estore-dark">
                        Product Description
                      </CardTitle>
                    </div>
                    <div className={`transform transition-transform duration-200 ${isDescriptionOpen ? 'rotate-180' : ''}`}>
                      <Plus className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  <CardDescription>
                    Learn more about this product's features and benefits
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="prose prose-gray max-w-none">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200">
                      <h3 className="text-lg font-semibold text-estore-dark mb-3">About {currentProduct.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-base mb-4">
                        {currentProduct.description}
                      </p>
                      
                      {/* Key Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <div className="bg-white rounded-lg p-3 border border-gray-100">
                          <h4 className="font-semibold text-estore-dark mb-1">Quality Materials</h4>
                          <p className="text-sm text-gray-600">
                            Crafted with premium materials for lasting durability and comfort.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-100">
                          <h4 className="font-semibold text-estore-dark mb-1">Expert Craftsmanship</h4>
                          <p className="text-sm text-gray-600">
                            Designed with attention to detail by skilled artisans.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-100">
                          <h4 className="font-semibold text-estore-dark mb-1">Versatile Design</h4>
                          <p className="text-sm text-gray-600">
                            Perfect for various occasions and styling preferences.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-100">
                          <h4 className="font-semibold text-estore-dark mb-1">Easy Care</h4>
                          <p className="text-sm text-gray-600">
                            Simple maintenance instructions for long-lasting wear.
                          </p>
                        </div>
                      </div>

                      {/* Specifications Table */}
                      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                          <h4 className="font-semibold text-estore-dark">Technical Specifications</h4>
                        </div>
                        <div className="divide-y divide-gray-200">
                          {currentProduct.specifications.map((spec, index) => (
                            <div key={index} className="px-4 py-2 flex justify-between items-center">
                              <span className="text-gray-600 font-medium">{spec.label}</span>
                              <span className="text-estore-dark font-semibold">{spec.value}</span>
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
        <div className="mt-4">
          <Card className="shadow-lg">
            <Collapsible open={isReviewsOpen} onOpenChange={setIsReviewsOpen}>
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <User className="w-6 h-6 text-estore-dark" />
                      <CardTitle className="text-xl text-estore-dark">
                        Customer Reviews
                      </CardTitle>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                        {customerReviews.length} Reviews
                      </span>
                    </div>
                    <div className={`transform transition-transform duration-200 ${isReviewsOpen ? 'rotate-180' : ''}`}>
                      <Plus className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  <CardDescription>
                    See what our customers from across India are saying
                  </CardDescription>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Overall Rating */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="text-3xl font-bold text-estore-dark">4.6</div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-5 h-5 ${star <= 5 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">Based on {customerReviews.length} reviews</span>
                      </div>
                    </div>

                    {/* Individual Reviews */}
                    <div className="space-y-3">
                      {customerReviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                {review.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-semibold text-estore-dark">{review.name}</h4>
                                <p className="text-sm text-gray-500">{review.location}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star 
                                    key={star} 
                                    className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                        </div>
                      ))}
                    </div>

                    {/* Write Review Button */}
                    <div className="text-center pt-2">
                      <Button 
                        variant="outline" 
                        className="px-8 py-3 border-2 border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white transition-all duration-200"
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
