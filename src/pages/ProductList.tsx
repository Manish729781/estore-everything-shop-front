
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Filter, ShoppingCart, ChevronDown, Grid3X3, List, Check } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProductList = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [availabilityFilter, setAvailabilityFilter] = useState(['In Stock']);
  const [productTypeFilter, setProductTypeFilter] = useState(['Wardrobe wear', 'Home Decore', 'Fragrance', 'Jewellery']);

  const categories = [
    { name: 'Handbags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80' },
    { name: 'Jewellery', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80' },
    { name: 'GUCCI', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=300&q=80' },
    { name: 'Fragrance', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80' },
    { name: 'Lamps', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' }
  ];

  const allProducts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      title: 'Minimalism Shirts',
      price: '₹3,373',
      oldPrice: '₹4,750',
      category: 'Wardrobe wear',
      colors: ['#b6a07a', '#e5e5e5', '#c2b59b'],
      inStock: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Quicker Sneakers',
      price: '₹3,373',
      oldPrice: '₹4,750',
      category: 'Footwear',
      colors: ['#fff', '#e5e5e5', '#1a223a'],
      inStock: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'Gentle Body Care Cleanser',
      price: '₹3,373',
      oldPrice: '₹4,750',
      category: 'Fragrance',
      colors: [],
      inStock: true
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      title: 'Gold Dipped U Shaped Earrings',
      price: '₹5,511',
      oldPrice: '₹6,889',
      category: 'Jewellery',
      colors: ['#b6a07a', '#c2b59b'],
      inStock: true
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80',
      title: 'Classic Denim Jacket',
      price: '₹6,131',
      oldPrice: '₹8,267',
      category: 'Wardrobe wear',
      colors: ['#4a5568', '#2d3748'],
      inStock: false
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80',
      title: 'Running Sneakers',
      price: '₹5,167',
      oldPrice: '₹6,544',
      category: 'Footwear',
      colors: ['#000', '#fff', '#e53e3e'],
      inStock: true
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80',
      title: 'Luxury Leather Handbag',
      price: '₹8,999',
      oldPrice: '₹12,000',
      category: 'Handbag',
      colors: ['#8B4513', '#000', '#654321'],
      inStock: true
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      title: 'Modern Table Lamp',
      price: '₹4,500',
      oldPrice: '₹6,000',
      category: 'Home Decore',
      colors: ['#FFD700', '#C0C0C0'],
      inStock: true
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80',
      title: 'Elegant Perfume Collection',
      price: '₹7,200',
      oldPrice: '₹9,500',
      category: 'Fragrance',
      colors: [],
      inStock: true
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80',
      title: 'Diamond Necklace Set',
      price: '₹15,999',
      oldPrice: '₹20,000',
      category: 'Jewellery',
      colors: ['#C0C0C0', '#FFD700'],
      inStock: true
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
      title: 'Cotton Casual T-Shirt',
      price: '₹1,299',
      oldPrice: '₹1,899',
      category: 'Wardrobe wear',
      colors: ['#fff', '#000', '#808080'],
      inStock: true
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
      title: 'Sports Running Shoes',
      price: '₹4,999',
      oldPrice: '₹6,999',
      category: 'Footwear',
      colors: ['#FF0000', '#fff', '#000'],
      inStock: true
    },
    {
      id: 13,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80',
      title: 'Premium Face Serum',
      price: '₹2,800',
      oldPrice: '₹3,500',
      category: 'Skincare',
      colors: [],
      inStock: true
    },
    {
      id: 14,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80',
      title: 'Designer Crossbody Bag',
      price: '₹5,499',
      oldPrice: '₹7,299',
      category: 'Handbag',
      colors: ['#8B4513', '#000'],
      inStock: false
    },
    {
      id: 15,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80',
      title: 'Decorative Cushion Set',
      price: '₹2,199',
      oldPrice: '₹2,999',
      category: 'Home Decore',
      colors: ['#FF69B4', '#FFD700', '#87CEEB'],
      inStock: true
    },
    {
      id: 16,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80',
      title: 'Floral Perfume Spray',
      price: '₹3,899',
      oldPrice: '₹4,999',
      category: 'Fragrance',
      colors: [],
      inStock: true
    },
    {
      id: 17,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80',
      title: 'Silver Chain Bracelet',
      price: '₹4,299',
      oldPrice: '₹5,599',
      category: 'Jewellery',
      colors: ['#C0C0C0'],
      inStock: true
    },
    {
      id: 18,
      image: 'https://images.unsplash.com/photo-1503341338985-b171bc1fdf83?auto=format&fit=crop&w=400&q=80',
      title: 'Formal Business Shirt',
      price: '₹2,499',
      oldPrice: '₹3,299',
      category: 'Wardrobe wear',
      colors: ['#fff', '#87CEEB', '#FFB6C1'],
      inStock: true
    },
    {
      id: 19,
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=400&q=80',
      title: 'Casual Loafers',
      price: '₹3,799',
      oldPrice: '₹4,999',
      category: 'Footwear',
      colors: ['#8B4513', '#000'],
      inStock: true
    },
    {
      id: 20,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80',
      title: 'Anti-Aging Night Cream',
      price: '₹3,299',
      oldPrice: '₹4,199',
      category: 'Skincare',
      colors: [],
      inStock: false
    }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesAvailability = availabilityFilter.includes('In Stock') ? product.inStock : !availabilityFilter.includes('Out Of Stock');
    const matchesProductType = productTypeFilter.includes(product.category);
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAvailability && matchesProductType && matchesSearch;
  });

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    if (filterType === 'availability') {
      setAvailabilityFilter(prev => 
        checked ? [...prev, value] : prev.filter(item => item !== value)
      );
    } else if (filterType === 'productType') {
      setProductTypeFilter(prev => 
        checked ? [...prev, value] : prev.filter(item => item !== value)
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">Home / Collection</p>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-estore-dark mb-6">
            All Product
          </h1>

          {/* Category Tiles */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            {categories.map((category) => (
              <div key={category.name} className="relative rounded-lg overflow-hidden cursor-pointer group">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-3">
                  <span className="text-white font-medium text-sm">{category.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Results Count */}
              <div>
                <p className="text-sm text-gray-600">
                  {filteredProducts.length} of {allProducts.length} results
                </p>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Sort By</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex gap-1 ml-auto">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                  >
                    <Grid3X3 size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">In Stock</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Shirt</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Serum</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Body care</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">₹2402-₹9900</span>
                <button className="text-sm text-blue-600 hover:underline">Clear All</button>
              </div>

              {/* Availability Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Availability</h3>
                  <ChevronDown size={16} />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={availabilityFilter.includes('In Stock')}
                      onChange={(e) => handleFilterChange('availability', 'In Stock', e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">In Stock</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={availabilityFilter.includes('Out Of Stock')}
                      onChange={(e) => handleFilterChange('availability', 'Out Of Stock', e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Out Of Stock</span>
                  </label>
                </div>
              </div>

              {/* Product Type Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Product type</h3>
                  <ChevronDown size={16} />
                </div>
                <div className="space-y-2">
                  {['Wardrobe wear', 'Home Decore', 'Footwear', 'Skincare', 'Fragrance', 'Jewellery', 'Handbag'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={productTypeFilter.includes(type)}
                        onChange={(e) => handleFilterChange('productType', type, e.target.checked)}
                        className="rounded"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Size</h3>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="relative">
                    <span className="absolute top-4 left-4 bg-gray-100 text-estore-dark text-xs px-2 py-1 rounded-lg font-medium z-10">
                      {product.category}
                    </span>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;
