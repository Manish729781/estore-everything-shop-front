import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import MobileProductCarousel from './MobileProductCarousel';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

const NewInSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  // Define handleGoToCheckout using useNavigate
  const handleGoToCheckout = () => {
    navigate('/checkout');
  };

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

  const categories = [
    'All',
    'Wardrobe wear',
    'Footwear',
    'Skincare',
    'Electronics',
    'Jewelry',
    'Handbag',
    'Accessories',
  ];

  // Filter products based on active category
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.tag === activeCategory);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleViewDescription = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleAddProductToCart = (product: typeof products[number]) => {
    addToCart({
      id: product.id,
      name: product.title,
      title: product.title,
      price: Number(product.price.replace(/[^\d]/g, "")),
      image: product.image,
      color: product.colors[0] || "",
      oldPrice: product.oldPrice,
    });
    toast({ title: "Added to Cart", description: `${product.title} has been added to your cart.` });
  };

  return (
    <section
      id="new-in-section"
      className="bg-white py-8 sm:py-12 md:py-16"
    >
      {/* Header */}
      <div className="text-center pb-8 md:pb-12">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-estore-dark mb-3 md:mb-4">
          New in
        </h2>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-estore-dark max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
          Bringing You the Newest Trends, Hottest Deals, and Must-Have Essentials - All in One Place!
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-6 md:mb-12 px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-6xl rounded-xl md:rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
            alt="Fashion Banner"
            className="w-full h-32 xs:h-40 sm:h-48 md:h-64 object-cover"
          />
          <div
            className="
              absolute
              -bottom-6 sm:-bottom-8 md:bottom-6
              left-0 md:left-1/2 md:-translate-x-1/2
              w-full md:w-auto
              px-4 md:px-0
              flex
              md:static
              justify-center
              items-start
              z-10
            "
          >
            <div
              className="
                bg-white rounded-full shadow-lg flex flex-nowrap gap-1 xs:gap-2 p-1.5 xs:p-2
                w-full overflow-x-auto max-w-full scrollbar-none
                sm:flex-wrap sm:justify-center sm:overflow-visible sm:w-auto
                "
              style={{
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={`
                    px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium whitespace-nowrap transition-all duration-200
                    ${activeCategory === category
                      ? 'bg-estore-dark text-white shadow'
                      : 'text-estore-dark hover:bg-estore-light-gray'}
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-estore-dark
                  `}
                  style={{ minWidth: '70px' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden bg-gray-50 pt-4 pb-6">
        <MobileProductCarousel
          products={filteredProducts}
          onViewDescription={handleViewDescription}
          onAddToCart={() => {
            if (filteredProducts.length) {
              handleAddProductToCart(filteredProducts[0]);
            }
          }}
        />
        {/* Show message if no products found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8 xs:py-12">
            <p className="text-gray-500 text-base xs:text-lg">No products found in this category.</p>
          </div>
        )}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleGoToCheckout}
            className="
              bg-estore-dark text-white px-8 xs:px-10 py-3 xs:py-4 rounded-full font-medium text-base xs:text-lg
              hover:bg-estore-dark/90 transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-estore-dark
            "
          >
            Go to Checkout
          </button>
        </div>
      </div>

      {/* Desktop/Tablet Product Grid */}
      <div className="hidden sm:block bg-gray-50 py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                tag={product.tag}
                colors={product.colors}
                onViewDescription={() => handleViewDescription(product.id)}
                rounded="rounded-2xl"
              />
            ))}
          </div>
          {/* Show message if no products found */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-8 xs:py-12">
              <p className="text-gray-500 text-base xs:text-lg">No products found in this category.</p>
            </div>
          )}

          {/* Checkout Button */}
          <div className="mt-8 xs:mt-12 text-center">
            <button
              type="button"
              onClick={handleGoToCheckout}
              className="
                bg-estore-dark text-white px-8 xs:px-10 py-3 xs:py-4 rounded-full font-medium text-base xs:text-lg
                hover:bg-estore-dark/90 transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-estore-dark
              "
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
