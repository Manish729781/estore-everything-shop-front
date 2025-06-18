
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';

const FeaturedProducts = () => {
  const [searchParams] = useSearchParams();
  const featured = searchParams.get('featured') || 'new';

  const featuredTypes: Record<string, any> = {
    new: {
      title: 'New Arrivals',
      description: 'Discover our latest collection of fashion and lifestyle products',
      subtitle: 'Fresh styles just landed'
    },
    bestsellers: {
      title: 'Best Sellers',
      description: 'Our most popular items loved by customers worldwide',
      subtitle: 'Customer favorites'
    },
    trending: {
      title: 'Trending Now',
      description: 'What everyone is talking about this season',
      subtitle: 'Hot picks of the moment'
    },
    sale: {
      title: 'Sale Items',
      description: 'Amazing deals on selected fashion and lifestyle products',
      subtitle: 'Limited time offers'
    }
  };

  const currentFeatured = featuredTypes[featured] || featuredTypes.new;

  // Mock products data - in a real app, this would come from your backend
  const mockProducts = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
      category: 'Clothing',
      featured: ['new', 'trending']
    },
    {
      id: 2,
      name: 'Elegant Ceramic Vase',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
      category: 'Home Decor',
      featured: ['bestsellers', 'new']
    },
    {
      id: 3,
      name: 'Wireless Bluetooth Speaker',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80',
      category: 'Gadgets',
      featured: ['sale', 'trending']
    },
    {
      id: 4,
      name: 'Leather Crossbody Bag',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80',
      category: 'Accessories',
      featured: ['bestsellers', 'new']
    },
    {
      id: 5,
      name: 'Minimalist Desk Lamp',
      price: 39.99,
      originalPrice: 59.99,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      category: 'Home Decor',
      featured: ['sale', 'trending']
    },
    {
      id: 6,
      name: 'Organic Cotton Hoodie',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80',
      category: 'Clothing',
      featured: ['new', 'bestsellers']
    }
  ];

  // Filter products based on featured type
  const filteredProducts = mockProducts.filter(product => 
    product.featured.includes(featured)
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-estore-dark to-estore-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-lg opacity-90 mb-4">{currentFeatured.subtitle}</p>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            {currentFeatured.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {currentFeatured.description}
          </p>
        </div>
      </section>

      {/* Featured Categories Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(featuredTypes).map(([key, type]) => (
              <a
                key={key}
                href={`/products?featured=${key}`}
                className={`px-6 py-3 rounded-full transition-colors ${
                  featured === key
                    ? 'bg-estore-dark text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          {filteredProducts.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-600">
                  {filteredProducts.length} Products Found
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.originalPrice && (
                        <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                          Sale
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                      <h3 className="font-semibold text-lg text-estore-dark mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-estore-dark">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                No products found in this category
              </h2>
              <a
                href="/products"
                className="inline-block bg-estore-dark text-white px-6 py-3 rounded-full hover:bg-estore-navy transition-colors"
              >
                Browse All Products
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturedProducts;
