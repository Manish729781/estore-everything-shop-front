
const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
      title: 'Gadgets',
      author: 'By Glitz',
      date: '22 Jan 2022',
      description: 'Selective Styles Help your look',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      title: 'Home decor',
      author: 'By Glitz',
      date: '22 Jan 2022',
      description: 'Selective Styles Help your look',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      title: 'Clothes',
      author: 'By Glitz',
      date: '22 Jan 2022',
      description: 'Selective Styles Help your look',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-md mx-auto w-full">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-60 text-white text-2xl font-semibold rounded-full px-12 py-3 tracking-wider shadow-lg">
                    {category.title}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-estore-text-light mb-2">
                  {category.author} • {category.date}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-estore-dark mb-2">
                  {category.description}
                </h3>
                <a
                  href="#"
                  className="text-estore-dark font-medium hover:text-estore-navy transition-colors duration-200 inline-block mt-2"
                >
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
