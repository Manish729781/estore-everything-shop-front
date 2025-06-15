import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Filter, ShoppingCart, ChevronDown, Grid3X3, List, Check, Heart } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { useLanguage } from '@/contexts/LanguageContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';

const ProductList = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [availabilityFilter, setAvailabilityFilter] = useState(['In Stock']);
  // Update the initial productTypeFilter default also:
  const [productTypeFilter, setProductTypeFilter] = useState(['Wardrobe wear', 'Home Decore', 'Fragrance', 'Jewelry', 'Footwear', 'Skincare', 'Electronics']);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Update search query when URL params change
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch && urlSearch !== searchQuery) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams]);

  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Jewelry',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Fragrance',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Home Decore',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Wardrobe wear',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=300&q=80'
    }
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
      category: 'Jewelry',
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
      category: 'Jewelry',
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
      category: 'Jewelry',
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
    },
    // Adding more products to reach 120+ products for 10 pages
    {
      id: 21,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80',
      title: 'Wireless Bluetooth Headphones',
      price: '₹8,999',
      oldPrice: '₹12,499',
      category: 'Electronics',
      colors: ['#000', '#fff', '#ff6b35'],
      inStock: true
    },
    {
      id: 22,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
      title: 'Smart Fitness Watch',
      price: '₹15,999',
      oldPrice: '₹19,999',
      category: 'Electronics',
      colors: ['#000', '#e5e5e5', '#ff6b35'],
      inStock: true
    },
    {
      id: 23,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80',
      title: 'Vintage Leather Jacket',
      price: '₹12,999',
      oldPrice: '₹16,999',
      category: 'Wardrobe wear',
      colors: ['#8B4513', '#000'],
      inStock: true
    },
    {
      id: 24,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
      title: 'Premium Coffee Maker',
      price: '₹18,999',
      oldPrice: '₹24,999',
      category: 'Home Appliances',
      colors: ['#000', '#C0C0C0'],
      inStock: true
    },
    {
      id: 25,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80',
      title: 'Organic Face Mask Set',
      price: '₹2,499',
      oldPrice: '₹3,499',
      category: 'Skincare',
      colors: [],
      inStock: true
    }
  ];

  // Generate additional products to ensure we have enough for 10 pages
  const generateMoreProducts = () => {
    const additionalProducts = [];
    const baseProducts = allProducts.slice(0, 10);
    
    for (let i = 0; i < 95; i++) {
      const baseProduct = baseProducts[i % baseProducts.length];
      additionalProducts.push({
        ...baseProduct,
        id: 26 + i,
        title: `${baseProduct.title} - Variant ${i + 1}`,
      });
    }
    
    return [...allProducts, ...additionalProducts];
  };

  const extendedProducts = generateMoreProducts();

  // Enhanced filtering logic
  const filteredProducts = extendedProducts.filter(product => {
    const matchesAvailability = availabilityFilter.length === 0 || 
      (availabilityFilter.includes('In Stock') && product.inStock) ||
      (availabilityFilter.includes('Out Of Stock') && !product.inStock);
    
    const matchesProductType = productTypeFilter.length === 0 || productTypeFilter.includes(product.category);
    
    const matchesSearch = searchQuery.trim() === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase().trim());
    
    return matchesAvailability && matchesProductType && matchesSearch;
  });

  const totalPages = Math.max(10, Math.ceil(filteredProducts.length / productsPerPage));
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Product type filter names
  const productTypeNames = ['Wardrobe wear', 'Home Decore', 'Footwear', 'Skincare', 'Fragrance', 'Jewelry', 'Electronics'];

  // Function to render pagination numbers 1-10
  const renderPaginationNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 10;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is 10 or less
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i);
              }}
              isActive={currentPage === i}
              className="min-w-[40px] h-10"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Show first few pages, ellipsis, and last page
      for (let i = 1; i <= Math.min(8, totalPages); i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i);
              }}
              isActive={currentPage === i}
              className="min-w-[40px] h-10"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
      
      if (totalPages > 8) {
        pageNumbers.push(
          <PaginationItem key="ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
        
        // Show pages 9 and 10
        for (let i = 9; i <= Math.min(10, totalPages); i++) {
          pageNumbers.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(i);
                }}
                isActive={currentPage === i}
                className="min-w-[40px] h-10"
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      }
    }
    
    return pageNumbers;
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleWishlistToggle = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    
    const wishlistItem = {
      id: product.id.toString(),
      name: product.title,
      image: product.image,
      price: parseFloat(product.price.replace('₹', '').replace(',', ''))
    };

    const isProductInWishlist = isInWishlist(product.id.toString());

    if (isProductInWishlist) {
      removeFromWishlist(product.id.toString());
      toast({
        title: "Removed from wishlist",
        description: `${product.title} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(wishlistItem);
      toast({
        title: "Added to wishlist",
        description: `${product.title} has been added to your wishlist.`,
      });
    }
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
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    setCurrentPage(1);
    
    if (newQuery.trim()) {
      setSearchParams({ search: newQuery });
    } else {
      setSearchParams({});
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchParams({});
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Added extra spacing in cover area */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb with more spacing */}
        <div className="mb-12">
          <p className="text-sm text-gray-600">{t('nav.home')} / {t('nav.collection')}</p>
        </div>

        {/* Header with increased spacing */}
        <div className="mb-16">
          <h1 className="text-4xl font-playfair font-bold text-estore-dark mb-12">
            {t('products.allProducts')}
          </h1>

          {/* Enhanced Search Bar with more spacing */}
          <div className="mb-12">
            <form onSubmit={handleSearchSubmit} className="relative max-w-md">
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder={t('search.placeholder')}
                  className="bg-transparent border-none outline-none text-gray-700 flex-1 placeholder:text-gray-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    ×
                  </button>
                )}
              </div>
            </form>
            {searchQuery && (
              <p className="text-sm text-gray-600 mt-2">
                {t('search.searchingFor')} "{searchQuery}" - {filteredProducts.length} {t('search.resultsFound')}
              </p>
            )}
          </div>

          {/* Category Tiles with increased spacing */}
          <div className="grid grid-cols-5 gap-8 mb-16">
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

        <div className="flex gap-10">
          {/* Sidebar Filters */}
          <div className="w-72 flex-shrink-0">
            <div className="space-y-8">
              {/* Results Count */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-medium">
                  {filteredProducts.length} {t('products.of')} {extendedProducts.length} {t('products.results')}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {t('products.page')} {currentPage} {t('products.of')} {totalPages}
                </p>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-medium">{t('products.sortBy')}</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-36">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">{t('products.relevance')}</SelectItem>
                    <SelectItem value="price-low">{t('products.priceLowToHigh')}</SelectItem>
                    <SelectItem value="price-high">{t('products.priceHighToLow')}</SelectItem>
                    <SelectItem value="newest">{t('products.newestFirst')}</SelectItem>
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
                {searchQuery && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {t('search.search')}: {searchQuery}
                  </span>
                )}
                {availabilityFilter.map(filter => (
                  <span key={filter} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {filter}
                  </span>
                ))}
                {(searchQuery || availabilityFilter.length > 0) && (
                  <button 
                    onClick={() => {
                      clearSearch();
                      setAvailabilityFilter(['In Stock']);
                      setProductTypeFilter(['Wardrobe wear', 'Home Decore', 'Fragrance', 'Jewelry', 'Footwear', 'Skincare', 'Electronics']);
                    }}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {t('products.clearAll')}
                  </button>
                )}
              </div>

              {/* Availability Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">{t('products.availability')}</h3>
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
                    <span className="text-sm">{t('products.inStock')}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={availabilityFilter.includes('Out Of Stock')}
                      onChange={(e) => handleFilterChange('availability', 'Out Of Stock', e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">{t('products.outOfStock')}</span>
                  </label>
                </div>
              </div>

              {/* Product Type Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">{t('products.productType')}</h3>
                  <ChevronDown size={16} />
                </div>
                <div className="space-y-2">
                  {productTypeNames.map((type) => (
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
                  <h3 className="font-medium">{t('products.size')}</h3>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* No Results Message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{t('products.noProducts')}</p>
                {searchQuery && (
                  <p className="text-gray-400 mt-2">
                    {t('products.tryAdjusting')}
                  </p>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 && (
              <>
                <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                  {currentProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer group relative"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <div className="relative">
                        <span className="absolute top-4 left-4 bg-gray-100 text-estore-dark text-xs px-2 py-1 rounded-lg font-medium z-10">
                          {product.category}
                        </span>
                        {!product.inStock && (
                          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-medium z-10">
                            {t('products.outOfStock')}
                          </span>
                        )}
                        <button
                          onClick={(e) => handleWishlistToggle(e, product)}
                          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-20 ${
                            !product.inStock ? 'top-12' : ''
                          } ${
                            isInWishlist(product.id.toString())
                              ? 'bg-red-500 text-white' 
                              : 'bg-white/80 text-gray-600 hover:bg-red-100 hover:text-red-600'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${isInWishlist(product.id.toString()) ? 'fill-current' : ''}`} />
                        </button>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="p-6">
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

                {/* Enhanced Pagination with 1-10 pages */}
                <div className="mt-12 flex justify-center">
                  <Pagination>
                    <PaginationContent className="gap-2">
                      <PaginationItem>
                        <PaginationPrevious 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) handlePageChange(currentPage - 1);
                          }}
                          className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100'} px-4 py-2`}
                        />
                      </PaginationItem>
                      
                      {renderPaginationNumbers()}
                      
                      <PaginationItem>
                        <PaginationNext 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) handlePageChange(currentPage + 1);
                          }}
                          className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100'} px-4 py-2`}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;
