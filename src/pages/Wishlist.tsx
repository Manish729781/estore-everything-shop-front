
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/contexts/WishlistContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleRemoveFromWishlist = (id: string, name: string) => {
    removeFromWishlist(id);
    toast({
      title: "Removed from wishlist",
      description: `${name} has been removed from your wishlist.`,
    });
  };

  const handleAddToCart = (item: any) => {
    // Navigate to product page or add to cart functionality
    navigate(`/product/${item.id}`);
    toast({
      title: "Redirecting to product",
      description: `Taking you to ${item.name} product page.`,
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-playfair font-bold text-estore-dark mb-8">
            My Wishlist
          </h1>
          
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-red-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 text-center mb-8 max-w-md">
              Start adding products to your wishlist by clicking the heart icon on any product.
            </p>
            <Button 
              onClick={() => navigate('/products')}
              className="bg-gradient-to-r from-estore-dark to-estore-navy text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
            >
              Browse Products
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-playfair font-bold text-estore-dark">
            My Wishlist ({wishlistItems.length} items)
          </h1>
          <Button 
            onClick={() => navigate('/products')}
            variant="outline"
            className="border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white"
          >
            Continue Shopping
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Product Image */}
              <div 
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden cursor-pointer"
                onClick={() => handleProductClick(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 space-y-3">
                <h3 
                  className="font-semibold text-lg text-estore-dark line-clamp-2 cursor-pointer hover:text-estore-navy transition-colors"
                  onClick={() => handleProductClick(item.id)}
                >
                  {item.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-estore-dark">
                    ₹{item.price.toLocaleString()}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-gradient-to-r from-estore-dark to-estore-navy text-white py-2 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                  
                  <Button
                    onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                    variant="outline"
                    className="px-3 py-2 border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 rounded-lg transition-all duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-estore-dark mb-2">
                Ready to purchase?
              </h3>
              <p className="text-gray-600">
                Add all items to cart or continue browsing for more products.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => navigate('/products')}
                variant="outline"
                className="border-estore-dark text-estore-dark hover:bg-estore-dark hover:text-white"
              >
                Browse More
              </Button>
              <Button
                onClick={() => {
                  // Add all wishlist items to cart (for now, just navigate to first product)
                  if (wishlistItems.length > 0) {
                    handleAddToCart(wishlistItems[0]);
                  }
                }}
                className="bg-gradient-to-r from-estore-dark to-estore-navy text-white hover:shadow-lg transition-all duration-200"
              >
                Add All to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
