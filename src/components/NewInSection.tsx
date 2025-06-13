
const NewInSection = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      title: 'Minimalism Shirts',
      price: '$49.00',
      oldPrice: '$69.00',
      tag: 'Wardrobe wear',
      colors: ['#b6a07a', '#e5e5e5', '#c2b59b']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Quicker Sneakers',
      price: '$49.00',
      oldPrice: '$69.00',
      tag: 'Footwear',
      colors: ['#fff', '#e5e5e5', '#1a223a']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'Gentle Body Care Cleanser',
      price: '$49.00',
      oldPrice: '$69.00',
      tag: 'Fragrance',
      colors: []
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      title: 'Gentle Body Care Cleanser',
      price: '$49.00',
      oldPrice: '$69.00',
      tag: 'Handbag',
      colors: ['#b6a07a', '#c2b59b']
    }
  ];

  const categories = ['All', 'Wardrobe wear', 'Footwear', 'Skincare', 'Handbag'];

  return (
    <section id="new-in-section" className="bg-white">
      {/* Header */}
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-estore-dark mb-4">
          New in
        </h2>
        <p className="text-lg text-estore-dark max-w-2xl mx-auto">
          Bringing You the Newest Trends, Hottest Deals, and Must-Have Essentials - All in One Place!
        </p>
      </div>

      {/* Banner with Filter */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-6xl mx-8 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
            alt="Fashion Banner"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg flex gap-2 p-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
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
      <div className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden relative">
                <span className="absolute top-4 left-4 bg-gray-100 text-estore-dark text-sm px-3 py-1 rounded-xl font-medium z-10">
                  {product.tag}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-estore-dark mb-2">{product.title}</h3>
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
                    <button className="bg-gray-100 text-estore-dark px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      View more
                    </button>
                    <button className="bg-gray-100 text-estore-dark px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInSection;
