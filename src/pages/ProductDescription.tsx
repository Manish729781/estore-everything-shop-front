
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Minus, Plus, Heart, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

  // Find the current product based on the ID from URL
  const currentProduct = allProducts.find(product => product.id === parseInt(id || '1')) || allProducts[0];

  // Initialize color and size based on current product
  useEffect(() => {
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
  }, [currentProduct.id]);

  // Check if product is in wishlist
  const isProductInWishlist = isInWishlist(currentProduct.id.toString());

  // Handle wishlist toggle
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

  // Product data to capture
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
    // Navigate to address page with product data
    navigate('/address', { 
      state: { 
        productData,
        fromBuyNow: true 
      } 
    });
  };

  const handleAddToCart = () => {
    console.log('Add to Cart clicked with data:', productData);
    // For now, navigate to address page with product data
    // In a real app, you'd add to cart state/context
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 sm:mb-8 px-2">
          <span>{t('nav.home')}</span> / <span>{t('nav.collection')}</span> / <span>{currentProduct.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-3 sm:space-y-4 order-1">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
              <img
                src={currentProduct.images[selectedImage]}
                alt={`${currentProduct.title} - Angle ${selectedImage + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Thumbnail Images - Different Angles */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 px-2 sm:px-0">
              {currentProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-200 ${
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
          <div className="space-y-4 sm:space-y-6 order-2 px-2 sm:px-0">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-estore-dark mb-3 sm:mb-4 leading-tight">
                {currentProduct.title}
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl font-bold text-estore-dark">{currentProduct.price}</span>
                <span className="text-lg sm:text-xl text-gray-500 line-through">{currentProduct.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  ✓ {currentProduct.inStock ? t('product.inStock') : t('product.outOfStock')}
                </span>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {currentProduct.specifications.map((spec, index) => (
                  <div key={index} className="text-sm border-b border-gray-100 pb-2 last:border-b-0">
                    <span className="text-gray-500 block sm:inline">{spec.label}:</span>
                    <span className="ml-0 sm:ml-2 font-medium text-estore-dark block sm:inline">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            {currentProduct.colors.length > 0 && (
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-estore-dark mb-3">{t('product.chooseColor')}</h3>
                <div className="flex flex-wrap gap-3">
                  {currentProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color.name 
                          ? 'border-estore-dark scale-110 shadow-lg' 
                          : 'border-gray-300 hover:border-estore-dark hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">Selected: {selectedColor}</p>
              </div>
            )}

            {/* Size Selection */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-estore-dark mb-3">{t('product.selectSize')}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {currentProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 sm:px-5 sm:py-3 rounded-xl border-2 font-medium transition-all duration-200 min-w-[50px] ${
                      selectedSize === size 
                        ? 'border-estore-dark bg-estore-dark text-white shadow-lg' 
                        : 'border-gray-300 text-estore-dark hover:border-estore-dark hover:shadow-md'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">Selected: {selectedSize}</p>
            </div>

            {/* Quantity */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-estore-dark mb-3">{t('product.quantity')}</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 sm:p-4 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <span className="px-4 sm:px-6 py-3 sm:py-4 border-x-2 border-gray-300 min-w-[60px] sm:min-w-[80px] text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 sm:p-4 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 sm:space-y-4 sticky bottom-4 sm:static">
              <Button 
                onClick={handleBuyNow}
                className="w-full bg-gradient-to-r from-estore-dark to-estore-navy text-white py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                disabled={!currentProduct.inStock}
              >
                {currentProduct.inStock ? t('product.buyNow') : t('product.outOfStock')}
              </Button>
              <Button 
                onClick={handleAddToCart}
                variant="outline" 
                className="w-full py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-xl border-2 border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white transform hover:scale-[1.02] transition-all duration-200"
                disabled={!currentProduct.inStock}
              >
                {t('product.addToCart')}
              </Button>
            </div>

            {/* Share & Features */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
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

              <div className="space-y-3">
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
      </div>

      <Footer />
    </div>
  );
};

export default ProductDescription;
