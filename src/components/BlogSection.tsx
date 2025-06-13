
const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Learn about different decore and suitability',
      date: 'Feb 16, 2024',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      title: 'Know the History of Iconic Purse Designs and uniqueness',
      date: 'Jan 20, 2024',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'The Latest Tips & Tricks That You\'ve Never Heard Of',
      date: 'May 2, 2024',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      title: 'Silhouette Serenades: Fashion\'s Melodies In Motion',
      date: 'March 27, 2024',
    },
  ];

  return (
    <section className="bg-white py-12 text-center">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-playfair font-bold text-estore-dark mb-8">
          Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-44 object-cover rounded-t-2xl"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-estore-dark mb-2 leading-tight">
                  {post.title}
                </h3>
                <div className="text-estore-text-light text-base">
                  • {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-gray-200 text-estore-dark rounded-2xl px-7 py-3 text-base font-medium hover:bg-estore-dark hover:text-white transition-colors duration-200">
          View all
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
