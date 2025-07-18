
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=256&q=80',
      title: 'Coach',
      description: 'Handbags',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80',
      title: 'Wireless Headphones',
      description: 'Best sound quality',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=256&q=80',
      title: 'THE BODY SHOP',
      description: 'Retinol 0.3% Face Serum 30ml',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=256&q=80',
      title: 'MANGO',
      description: 'Floral Print Ruffled Shirt Style Top',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=256&q=80',
      title: 'Decorative vase',
      description: 'Gray Textured Ceramic Flower Vase',
    },
  ];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(90deg, #181c2b 0%, #f6e7d8 100%)',
      }}
    >
      {/* Bottom Corner Gradient */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-200/30 to-transparent"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Content - Mobile First Design */}
        <div className="mb-6 sm:mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 leading-tight tracking-wide text-white drop-shadow-lg">
              Your One-Stop Shop for Everything.
            </h1>
          </div>
          <div className="flex-1 lg:max-w-md text-center lg:text-left">
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0">
              Find everything you need in one place—great deals, top quality, and
              ultimate convenience. Shop anytime, anywhere, hassle-free!
            </p>
            <button className="inline-flex items-center bg-estore-light-gray text-estore-dark rounded-full px-6 sm:px-7 py-2.5 sm:py-3 text-base sm:text-lg font-medium hover:bg-estore-medium-gray transition-colors duration-200 shadow-lg">
              Try product
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Product Carousel - Mobile Optimized */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 carousel-scroll">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative min-w-[160px] sm:min-w-[200px] max-w-[180px] sm:max-w-[220px] h-48 sm:h-56 flex-shrink-0 rounded-t-[35%] sm:rounded-t-[45%] rounded-b-lg overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-t-[35%] sm:rounded-t-[45%] rounded-b-lg"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="text-estore-dark font-semibold text-left text-xs sm:text-sm">
                    {product.title}
                  </div>
                  <div className="text-estore-dark text-xs text-left mt-1">
                    {product.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
