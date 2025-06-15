
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
    <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-amber-100 text-white overflow-hidden">
      {/* Bottom Corner Gradient */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-200/30 to-transparent"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* Hero Content - Horizontal Layout */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4 leading-tight tracking-wide">
              Your One-Stop Shop for Everything.
            </h1>
          </div>
          <div className="flex-1 lg:max-w-md">
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Find everything you need in one place—great deals, top quality, and
              ultimate convenience. Shop anytime, anywhere, hassle-free!
            </p>
            <button className="inline-flex items-center bg-estore-light-gray text-estore-dark rounded-full px-7 py-3 text-lg font-medium hover:bg-estore-medium-gray transition-colors duration-200 shadow-lg">
              Try product
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-8 carousel-scroll">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative min-w-[200px] max-w-[220px] h-56 flex-shrink-0 rounded-t-[45%] rounded-b-lg overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-t-[45%] rounded-b-lg"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-estore-dark font-semibold text-left">
                    {product.title}
                  </div>
                  <div className="text-estore-dark text-sm text-left mt-1">
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
