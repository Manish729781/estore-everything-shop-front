
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogCategories = [
    {
      id: 'fashion',
      title: 'Fashion Tips',
      description: 'Latest fashion trends and styling advice',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80',
      posts: 12
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle',
      description: 'Home decor and lifestyle inspiration',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      posts: 8
    },
    {
      id: 'trends',
      title: 'Latest Trends',
      description: 'What\'s trending in fashion and home',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
      posts: 15
    },
    {
      id: 'guides',
      title: 'Style Guides',
      description: 'Complete guides for styling and decorating',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      posts: 6
    }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'Learn about different decore and suitability',
      excerpt: 'Explore the art of decorating your home with different styles, colors, and suitability for every room.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      date: 'Feb 16, 2024',
      category: 'lifestyle'
    },
    {
      id: 2,
      title: 'Know the History of Iconic Purse Designs and uniqueness',
      excerpt: 'Delve into the fascinating history behind iconic purse designs and what makes each piece unique.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      date: 'Jan 20, 2024',
      category: 'fashion'
    },
    {
      id: 3,
      title: "The Latest Tips & Tricks That You've Never Heard Of",
      excerpt: 'Get up to date with the most surprising fashion and home-living hacks for 2024.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      date: 'May 2, 2024',
      category: 'trends'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Mobile Responsive */}
      <section className="bg-gradient-to-r from-estore-dark to-estore-navy text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6">
            Our Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-4">
            Discover the latest trends, tips, and inspiration for fashion and lifestyle
          </p>
        </div>
      </section>

      {/* Blog Categories - Mobile Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-center mb-8 sm:mb-12 text-estore-dark">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {blogCategories.map((category) => (
              <Link
                key={category.id}
                to={`/blog/${category.id}`}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-lg sm:text-xl text-estore-dark mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm sm:text-base">{category.description}</p>
                  <span className="text-sm text-estore-dark font-medium">
                    {category.posts} posts
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts - Mobile Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-center mb-8 sm:mb-12 text-estore-dark">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.category}/${post.id}`}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 sm:p-6">
                  <span className="text-sm text-estore-dark font-medium capitalize">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-base sm:text-lg text-estore-dark mb-2 mt-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm sm:text-base">{post.excerpt}</p>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
