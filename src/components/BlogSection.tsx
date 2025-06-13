
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Learn about different decore and suitability',
      date: 'Feb 16, 2024'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      title: 'Know the History of Iconic Purse Designs and uniqueness',
      date: 'Jan 20, 2024'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'The Latest Tips & Tricks That You\'ve Never Heard Of',
      date: 'May 2, 2024'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      title: 'Silhouette Serenades: Fashion\'s Melodies In Motion',
      date: 'March 27, 2024'
    }
  ];

  return (
    <section id="blog-section" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-estore-dark mb-12">
          Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="font-semibold text-estore-dark mb-2 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm">• {blog.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="bg-gray-200 text-estore-dark px-8 py-3 rounded-2xl font-medium hover:bg-estore-dark hover:text-white transition-colors">
          View all
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
