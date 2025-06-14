
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Minus, Plus, Heart, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProductDescription = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('gold');
  const [selectedSize, setSelectedSize] = useState('8');

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
  useState(() => {
    if (currentProduct.colors.length > 0) {
      setSelectedColor(currentProduct.colors[0].name);
    }
    if (currentProduct.sizes.length > 0) {
      setSelectedSize(currentProduct.sizes[0]);
    }
  });

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
    // Navigate to checkout with product data
    navigate('/checkout', { 
      state: { 
        productData,
        fromBuyNow: true 
      } 
    });
  };

  const handleAddToCart = () => {
    // For now, navigate to checkout with product data
    // In a real app, you'd add to cart state/context
    navigate('/checkout', { 
      state: { 
        productData,
        fromAddToCart: true 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <span>Home</span> / <span>Collection</span> / <span>{currentProduct.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={currentProduct.images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {currentProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-estore-dark' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-estore-dark mb-4">
                {currentProduct.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-estore-dark">{currentProduct.price}</span>
              <span className="text-xl text-gray-500 line-through">{currentProduct.originalPrice}</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                ✓ {currentProduct.inStock ? '12 In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
              {currentProduct.specifications.map((spec, index) => (
                <div key={index} className="text-sm">
                  <span className="text-gray-500">{spec.label}:</span>
                  <span className="ml-2 font-medium text-estore-dark">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Color Selection */}
            {currentProduct.colors.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-estore-dark mb-3">Choose Colour</h3>
                <div className="flex gap-3">
                  {currentProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color.name ? 'border-estore-dark scale-110' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-estore-dark mb-3">Select Size</h3>
              <div className="flex gap-2">
                {currentProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                      selectedSize === size 
                        ? 'border-estore-dark bg-estore-dark text-white' 
                        : 'border-gray-300 text-estore-dark hover:border-estore-dark'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-estore-dark mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 rounded-l-lg"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 rounded-r-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                onClick={handleBuyNow}
                className="w-full bg-estore-dark text-white py-4 text-lg font-medium rounded-xl hover:bg-estore-dark/90"
                disabled={!currentProduct.inStock}
              >
                {currentProduct.inStock ? 'Buy Now' : 'Out of Stock'}
              </Button>
              <Button 
                onClick={handleAddToCart}
                variant="outline" 
                className="w-full py-4 text-lg font-medium rounded-xl border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white"
                disabled={!currentProduct.inStock}
              >
                Add to Cart
              </Button>
            </div>

            {/* Share */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="text-sm font-medium text-estore-dark">Share</span>
              <div className="flex gap-3">
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600">Secure payment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600">Free Express Shipping*</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600">Delivery 2-5 days</span>
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
