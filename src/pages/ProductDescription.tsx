
import { useState } from 'react';
import { Minus, Plus, Heart, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProductDescription = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('gold');
  const [selectedSize, setSelectedSize] = useState('8');

  const productImages = [
    '/lovable-uploads/2ff43a0b-370c-4ef4-91b1-da6f04986113.png',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
  ];

  const colors = [
    { name: 'gold', color: '#FFD700' },
    { name: 'silver', color: '#C0C0C0' },
    { name: 'rose-gold', color: '#E8B4CB' }
  ];

  const sizes = ['6', '7', '8', '9', '10'];

  const specifications = [
    { label: 'Width', value: '45 Mm' },
    { label: 'Height', value: '182 Mm' },
    { label: 'Weight', value: 'Gross 1,422 G' },
    { label: 'Purity', value: '14 KT' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <span>Home</span> / <span>Collection</span> / <span>Jewellery</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
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
                Gold Dipped U Shaped Earrings
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your new go-to modern hoop. The custom U-Unit shape and endless 
                surface of shine make for an ultra wearable earring. They open and close 
                with a hinge so you'll never have to search for an earring back again. Pull 
                back hinge gently to open finished in high polish gold.
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-estore-dark">$80.00</span>
              <span className="text-xl text-gray-500 line-through">$100.00</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                ✓ 12 In Stock
              </span>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
              {specifications.map((spec, index) => (
                <div key={index} className="text-sm">
                  <span className="text-gray-500">{spec.label}:</span>
                  <span className="ml-2 font-medium text-estore-dark">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-estore-dark mb-3">Choose Colour</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
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

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-estore-dark mb-3">Select Size</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 font-medium transition-colors ${
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
              <Button className="w-full bg-estore-dark text-white py-4 text-lg font-medium rounded-xl hover:bg-estore-dark/90">
                Buy Now
              </Button>
              <Button variant="outline" className="w-full py-4 text-lg font-medium rounded-xl border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white">
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

            {/* Features */}
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
