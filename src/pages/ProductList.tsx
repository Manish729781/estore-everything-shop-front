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
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import CategoryTiles from "@/components/CategoryTiles";

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
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c3136?auto=format&fit=crop&w=400&q=80',
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

  // Sidebar filter handlers, now split out for passing as props:
  const onAvailabilityChange = (value: string, checked: boolean) => handleFilterChange('availability', value, checked);
  const onProductTypeChange = (value: string, checked: boolean) => handleFilterChange('productType', value, checked);

  // Tags & all-clear
  const onClearAll = () => {
    clearSearch();
    setAvailabilityFilter(['In Stock']);
    setProductTypeFilter(['Wardrobe wear', 'Home Decore', 'Fragrance', 'Jewelry', 'Footwear', 'Skincare', 'Electronics']);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <p className="text-sm text-gray-600">{t('nav.home')} / {t('nav.collection')}</p>
        </div>

        <div className="mb-16">
          <h1 className="text-4xl font-playfair font-bold text-estore-dark mb-12">
            {t('products.allProducts')}
          </h1>
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
          <CategoryTiles categories={categories} />
        </div>
        <div className="flex gap-10">
          <ProductFilters
            t={t}
            filteredCount={filteredProducts.length}
            totalProducts={extendedProducts.length}
            currentPage={currentPage}
            totalPages={totalPages}
            searchQuery={searchQuery}
            onSearchClear={clearSearch}
            sortBy={sortBy}
            onSortByChange={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode}
            availabilityFilter={availabilityFilter}
            onAvailabilityChange={onAvailabilityChange}
            productTypeNames={productTypeNames}
            productTypeFilter={productTypeFilter}
            onProductTypeChange={onProductTypeChange}
            onClearAll={onClearAll}
          />
          <ProductGrid
            t={t}
            currentProducts={currentProducts}
            filteredProducts={filteredProducts}
            currentPage={currentPage}
            totalPages={totalPages}
            viewMode={viewMode}
            onPageChange={handlePageChange}
            onWishlistToggle={handleWishlistToggle}
            isInWishlist={isInWishlist}
            handleProductClick={handleProductClick}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
