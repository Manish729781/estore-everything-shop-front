
const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
      title: 'Gadgets',
      subtitle: 'Selective Styles Help your look',
      author: 'Glitz',
      date: '22 Jan 2022'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      title: 'Home decor',
      subtitle: 'Selective Styles Help your look',
      author: 'Glitz',
      date: '22 Jan 2022'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      title: 'Clothes',
      subtitle: 'Selective Styles Help your look',
      author: 'Glitz',
      date: '22 Jan 2022'
    }
  ];

  return (
    <section id="featured-categories" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="relative h-80">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold bg-black bg-opacity-50 px-8 py-3 rounded-full">
                    {category.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">
                  By {category.author} • {category.date}
                </p>
                <h4 className="text-xl font-playfair font-semibold text-estore-dark mb-4">
                  {category.subtitle}
                </h4>
                <a href="#" className="text-estore-dark font-medium hover:opacity-75 transition-opacity">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
