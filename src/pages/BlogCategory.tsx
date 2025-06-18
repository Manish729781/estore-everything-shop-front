
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogCategory = () => {
  const { category } = useParams<{ category: string }>();

  const categoryData: Record<string, any> = {
    fashion: {
      title: 'Fashion Tips',
      description: 'Latest fashion trends and styling advice',
      posts: [
        {
          id: 1,
          title: 'Know the History of Iconic Purse Designs and uniqueness',
          excerpt: 'Delve into the fascinating history behind iconic purse designs and what makes each piece unique in the world of fashion accessories.',
          image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
          date: 'Jan 20, 2024',
          readTime: '5 min read'
        },
        {
          id: 2,
          title: 'Spring Fashion Trends You Need to Know',
          excerpt: 'Discover the must-have fashion pieces for this spring season and how to style them perfectly.',
          image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80',
          date: 'Mar 15, 2024',
          readTime: '4 min read'
        }
      ]
    },
    lifestyle: {
      title: 'Lifestyle',
      description: 'Home decor and lifestyle inspiration',
      posts: [
        {
          id: 1,
          title: 'Learn about different decore and suitability',
          excerpt: 'Explore the art of decorating your home with different styles, colors, and suitability for every room. Discover how to make spaces more inviting.',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
          date: 'Feb 16, 2024',
          readTime: '6 min read'
        }
      ]
    },
    trends: {
      title: 'Latest Trends',
      description: 'What\'s trending in fashion and home',
      posts: [
        {
          id: 1,
          title: "The Latest Tips & Tricks That You've Never Heard Of",
          excerpt: 'Get up to date with the most surprising fashion and home-living hacks for 2024. These little-known tricks will take your style to the next level.',
          image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
          date: 'May 2, 2024',
          readTime: '7 min read'
        }
      ]
    },
    guides: {
      title: 'Style Guides',
      description: 'Complete guides for styling and decorating',
      posts: [
        {
          id: 1,
          title: "Silhouette Serenades: Fashion's Melodies In Motion",
          excerpt: 'Experience the movement and rhythm of today\'s trendsetting silhouettes and how to make bold statements with your fashion choices.',
          image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
          date: 'March 27, 2024',
          readTime: '8 min read'
        }
      ]
    }
  };

  const currentCategory = categoryData[category || ''] || {
    title: 'Blog Category',
    description: 'Blog posts',
    posts: []
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Category Header */}
      <section className="bg-gradient-to-r from-estore-dark to-estore-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <Link to="/blog" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            {currentCategory.title}
          </h1>
          <p className="text-xl opacity-90">
            {currentCategory.description}
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          {currentCategory.posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${category}/${post.id}`}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-estore-dark mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                No posts found in this category
              </h2>
              <Link
                to="/blog"
                className="inline-block bg-estore-dark text-white px-6 py-3 rounded-full hover:bg-estore-navy transition-colors"
              >
                Browse All Categories
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogCategory;
