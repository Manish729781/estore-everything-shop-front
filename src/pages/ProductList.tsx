import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Search, Filter } from 'lucide-react';

const ProductList = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Wardrobe wear', 'Footwear', 'Skincare', 'Handbag'];

  const allProducts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      title: 'Minimalism Shirts',
      price: '$49.00',
      oldPrice: '$69.00',
      category: 'Wardrobe wear',
      colors: ['#b6a07a', '#e5e5e5', '#c2b59b']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Quicker Sneakers',
      price: '$49.00',
      oldPrice: '$69.00',
      category: 'Footwear',
      colors: ['#fff', '#e5e5e5', '#1a223a']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'Gentle Body Care Cleanser',
      price: '$49.00',
      oldPrice: '$69.00',
      category: 'Skincare',
      colors: []
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      title: 'Gold Dipped U Shaped Earrings',
      price: '$80.00',
      oldPrice: '$100.00',
      category: 'Handbag',
      colors: ['#b6a07a', '#c2b59b']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80',
      title: 'Classic Denim Jacket',
      price: '$89.00',
      oldPrice: '$120.00',
      category: 'Wardrobe wear',
      colors: ['#4a5568', '#2d3748']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80',
      title: 'Running Sneakers',
      price: '$75.00',
      oldPrice: '$95.00',
      category: 'Footwear',
      colors: ['#000', '#fff', '#e53e3e']
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
      title: 'Vitamin C Serum',
      price: '$35.00',
      oldPrice: '$45.00',
      category: 'Skincare',
      colors: []
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80',
      title: 'Leather Handbag',
      price: '$120.00',
      oldPrice: '$150.00',
      category: 'Handbag',
      colors: ['#8b4513', '#000', '#654321']
    }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeFilter === 'All' || product.category === activeFilter;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-estore-dark mb-4">
            Our Products
          </h1>
          <p className="text-lg text-estore-text-light max-w-2xl mx-auto">
            Discover our complete collection of premium products across all categories
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-estore-dark focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full shadow-lg flex gap-2 p-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeFilter === category
                      ? 'bg-estore-dark text-white'
                      : 'text-estore-dark hover:bg-estore-light-gray'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {activeFilter !== 'All' && ` in ${activeFilter}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative">
                <span className="absolute top-4 left-4 bg-gray-100 text-estore-dark text-sm px-3 py-1 rounded-xl font-medium z-10">
                  {product.category}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-estore-dark mb-2 line-clamp-2">{product.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-estore-dark">{product.price}</span>
                  <span className="text-gray-500 line-through text-sm">{product.oldPrice}</span>
                </div>
                {product.colors.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  <button className="flex-1 bg-estore-dark text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-estore-dark/90 transition-colors">
                    View Details
                  </button>
                  <button className="bg-gray-100 text-estore-dark px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-estore-dark mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="bg-estore-dark text-white px-6 py-2 rounded-full font-medium hover:bg-estore-dark/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;
