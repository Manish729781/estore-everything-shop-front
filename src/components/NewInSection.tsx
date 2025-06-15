
import { useNavigate } from 'react-router-dom';

const NewInSection = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      title: 'Minimalism Shirts',
      price: '₹4,067',
      oldPrice: '₹5,727',
      tag: 'Wardrobe wear',
      colors: ['#b6a07a', '#e5e5e5', '#c2b59b']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Quicker Sneakers',
      price: '₹4,067',
      oldPrice: '₹5,727',
      tag: 'Footwear',
      colors: ['#fff', '#e5e5e5', '#1a223a']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'Gentle Body Care Cleanser',
      price: '₹4,067',
      oldPrice: '₹5,727',
      tag: 'Skincare',
      colors: []
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      title: 'Gold Dipped U Shaped Earrings',
      price: '₹6,640',
      oldPrice: '₹8,300',
      tag: 'Jewelry',
      colors: ['#b6a07a', '#c2b59b']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
      title: 'Smart Watch Pro',
      price: '₹12,500',
      oldPrice: '₹15,000',
      tag: 'Electronics',
      colors: ['#000', '#e5e5e5', '#ff6b35']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80',
      title: 'Designer Handbag',
      price: '₹8,900',
      oldPrice: '₹11,200',
      tag: 'Handbag',
      colors: ['#8B4513', '#000', '#D2691E']
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80',
      title: 'Premium Sunglasses',
      price: '₹3,500',
      oldPrice: '₹4,500',
      tag: 'Accessories',
      colors: ['#000', '#8B4513', '#1a223a']
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
      title: 'Running Shoes Elite',
      price: '₹7,200',
      oldPrice: '₹9,000',
      tag: 'Footwear',
      colors: ['#ff6b35', '#fff', '#1a223a']
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80',
      title: 'Casual Denim Jacket',
      price: '₹5,500',
      oldPrice: '₹7,000',
      tag: 'Wardrobe wear',
      colors: ['#4169E1', '#000080', '#87CEEB']
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
      title: 'Wireless Headphones',
      price: '₹9,800',
      oldPrice: '₹12,500',
      tag: 'Electronics',
      colors: ['#000', '#fff', '#ff6b35']
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80',
      title: 'Face Moisturizer Cream',
      price: '₹2,800',
      oldPrice: '₹3,500',
      tag: 'Skincare',
      colors: []
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80',
      title: 'Silver Chain Necklace',
      price: '₹4,200',
      oldPrice: '₹5,600',
      tag: 'Jewelry',
      colors: ['#C0C0C0', '#FFD700']
    }
  ];

  const categories = ['All', 'Wardrobe wear', 'Footwear', 'Skincare', 'Electronics', 'Jewelry', 'Handbag', 'Accessories'];

  const handleViewMore = (productId: number) => {
    navigate(`/product/${productId}`);
  };
  
  const handleGoToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <section id="new-in-section" className="bg-white py-16">
      {/* Header */}
      <div className="text-center pb-12">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-estore-dark mb-4">
          New in
        </h2>
        <p className="text-lg text-estore-dark max-w-2xl mx-auto px-4">
          Bringing You the Newest Trends, Hottest Deals, and Must-Have Essentials - All in One Place!
        </p>
      </div>

      {/* Banner with Filter */}
      <div className="flex justify-center mb-12 px-8">
        <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
            alt="Fashion Banner"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg flex gap-2 p-2 flex-wrap justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-estore-light-gray text-estore-dark'
                    : 'text-estore-dark hover:bg-estore-light-gray'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
                <span className="absolute top-4 left-4 bg-gray-100 text-estore-dark text-sm px-3 py-1 rounded-xl font-medium z-10">
                  {product.tag}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-estore-dark mb-3 text-lg">{product.title}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-bold text-estore-dark text-lg">{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">{product.oldPrice}</span>
                  </div>
                  {product.colors.length > 0 && (
                    <div className="flex gap-2 mb-5">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-5 h-5 rounded-full border-2 border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleViewMore(product.id)}
                      className="flex-1 bg-gray-100 text-estore-dark px-4 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      View more
                    </button>
                    <button 
                      onClick={handleGoToCheckout}
                      className="flex-1 bg-estore-dark text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-estore-dark/90 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Checkout Button */}
          <div className="mt-12 text-center">
            <button
              onClick={handleGoToCheckout}
              className="bg-estore-dark text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-estore-dark/90 transition-colors shadow-lg"
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInSection;
