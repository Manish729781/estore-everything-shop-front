
import { useState } from 'react';

const NewInSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Wardrobe wear', 'Footwear', 'Skincare', 'Handbag'];

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      title: 'Minimalism Shirts',
      price: 49.00,
      oldPrice: 69.00,
      tag: 'Wardrobe wear',
      colors: ['#b6a07a', '#e5e5e5', '#c2b59b'],
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Quicker Sneakers',
      price: 49.00,
      oldPrice: 69.00,
      tag: 'Footwear',
      colors: ['#fff', '#e5e5e5', '#1a223a'],
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'Gentle Body Care Cleanser',
      price: 49.00,
      oldPrice: 69.00,
      tag: 'Fragrance',
      colors: [],
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      title: 'Gentle Body Care Cleanser',
      price: 49.00,
      oldPrice: 69.00,
      tag: 'Handbag',
      colors: ['#b6a07a', '#c2b59b'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="text-center pt-12 pb-0">
        <h2 className="text-5xl font-playfair font-bold text-estore-navy mb-3">
          New in
        </h2>
        <p className="text-lg text-estore-dark max-w-2xl mx-auto">
          Bringing You the Newest Trends, Hottest Deals, and Must-Have Essentials - All in One Place!
        </p>
      </div>

      {/* Banner with Filter Bar */}
      <div className="flex justify-center bg-white py-0">
        <div className="relative w-[95vw] max-w-7xl mx-auto rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
            alt="Fashion Banner"
            className="w-full h-64 object-cover rounded-2xl"
          />
          <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 bg-white rounded-full shadow-lg flex gap-2 px-5 py-2 z-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gray-200 text-estore-dark font-bold'
                    : 'bg-transparent text-estore-dark hover:bg-gray-200 hover:font-bold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden pb-4 relative">
                <span className="absolute top-4 left-4 bg-gray-100 text-estore-dark text-sm rounded-xl px-4 py-1 font-medium z-10 shadow-sm">
                  {product.tag}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-5 pt-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-estore-dark">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base text-estore-dark">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-estore-text-light line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  </div>
                  {product.colors.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className="w-4 h-4 rounded-full border-2 border-gray-200"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button className="bg-gray-100 border border-gray-300 text-estore-dark rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-200 hover:border-estore-dark transition-all duration-200">
                      View more
                    </button>
                    <button className="bg-gray-100 border border-gray-300 text-estore-dark rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-200 hover:border-estore-dark transition-all duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInSection;
