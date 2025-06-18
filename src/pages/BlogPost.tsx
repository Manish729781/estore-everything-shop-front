
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { category, id } = useParams<{ category: string; id: string }>();

  const blogPosts: Record<string, Record<string, any>> = {
    fashion: {
      '1': {
        title: 'Know the History of Iconic Purse Designs and uniqueness',
        content: `
          <p>Purses have been an essential accessory for centuries, evolving from simple pouches to sophisticated fashion statements. The history of iconic purse designs tells a fascinating story of craftsmanship, innovation, and style evolution.</p>
          
          <h3>The Early Days</h3>
          <p>In the early 1900s, purses were primarily functional items. Women carried small pouches attached to their belts or hidden in their clothing. The Industrial Revolution brought new materials and manufacturing techniques that revolutionized purse design.</p>
          
          <h3>The Golden Age of Design</h3>
          <p>The 1920s marked the beginning of the golden age of purse design. Iconic houses like Chanel and Louis Vuitton began creating pieces that were not just functional but also works of art. The introduction of the chain strap by Coco Chanel in 1929 freed women's hands and changed fashion forever.</p>
          
          <h3>Modern Innovation</h3>
          <p>Today's purse designs continue to push boundaries, incorporating technology, sustainable materials, and innovative construction techniques. Each piece tells a story of its era while maintaining timeless appeal.</p>
        `,
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
        date: 'Jan 20, 2024',
        readTime: '5 min read',
        author: 'Fashion Team'
      }
    },
    lifestyle: {
      '1': {
        title: 'Learn about different decore and suitability',
        content: `
          <p>Creating a beautiful home is about more than just choosing pretty objects. It's about understanding how different decorative elements work together to create spaces that are both functional and aesthetically pleasing.</p>
          
          <h3>Understanding Your Space</h3>
          <p>Before selecting any decor, it's essential to understand your space's unique characteristics. Consider the natural light, room size, ceiling height, and existing architectural features. These elements will guide your decorative choices.</p>
          
          <h3>Color Psychology in Home Decor</h3>
          <p>Colors have a profound impact on our mood and energy levels. Warm colors like reds and oranges create cozy, energetic environments, while cool colors like blues and greens promote calm and relaxation. Understanding color psychology helps you choose the right palette for each room's purpose.</p>
          
          <h3>Mixing Styles Successfully</h3>
          <p>Don't be afraid to mix different decorative styles. The key is finding common elements that tie different pieces together, such as similar color tones, materials, or themes. This approach creates unique, personalized spaces that reflect your individual taste.</p>
        `,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        date: 'Feb 16, 2024',
        readTime: '6 min read',
        author: 'Lifestyle Team'
      }
    },
    trends: {
      '1': {
        title: "The Latest Tips & Tricks That You've Never Heard Of",
        content: `
          <p>The world of fashion and lifestyle is constantly evolving, bringing fresh perspectives and innovative approaches to style and living. Here are some insider tips that industry professionals use but rarely share publicly.</p>
          
          <h3>The 80/20 Rule for Wardrobe Building</h3>
          <p>Invest 80% of your budget in classic, timeless pieces that will last for years. Use the remaining 20% for trendy items that add personality and keep your look current. This approach ensures a wardrobe that's both practical and stylish.</p>
          
          <h3>The Power of Layering Textures</h3>
          <p>Instead of focusing solely on colors, pay attention to textures. Mixing different textures - like smooth silk with rough tweed, or soft cashmere with structured leather - adds depth and interest to any outfit or room design.</p>
          
          <h3>The 5-Minute Rule</h3>
          <p>When decluttering your space or wardrobe, use the 5-minute rule: if you can't think of a specific occasion when you'll use an item within 5 minutes, it's probably time to let it go. This quick decision-making process prevents overthinking and speeds up the organizing process.</p>
        `,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
        date: 'May 2, 2024',
        readTime: '7 min read',
        author: 'Trends Team'
      }
    },
    guides: {
      '1': {
        title: "Silhouette Serenades: Fashion's Melodies In Motion",
        content: `
          <p>Fashion is poetry in motion, and silhouettes are the verses that tell our style story. Understanding how different silhouettes work with your body and personal style can transform your approach to dressing.</p>
          
          <h3>The Language of Silhouettes</h3>
          <p>Every silhouette speaks a different language. A-line shapes whisper elegance and femininity, while structured blazers declare confidence and authority. Learning to read these visual cues helps you communicate your intended message through fashion.</p>
          
          <h3>Creating Movement Through Fashion</h3>
          <p>The best outfits have a sense of movement, even when standing still. This can be achieved through flowing fabrics, asymmetrical hems, or contrasting proportions. Think of your outfit as a dance - each element should complement and enhance the others.</p>
          
          <h3>The Art of Proportion</h3>
          <p>Understanding proportion is key to creating harmonious silhouettes. If you're wearing a voluminous top, balance it with fitted bottoms, or vice versa. This creates visual interest while maintaining a pleasing overall shape.</p>
          
          <h3>Seasonal Silhouette Transitions</h3>
          <p>As seasons change, so should your silhouette strategy. Summer calls for lighter, more flowing shapes, while winter allows for structured layers and bold proportions. Adapting your silhouette approach to the season keeps your style fresh and appropriate.</p>
        `,
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
        date: 'March 27, 2024',
        readTime: '8 min read',
        author: 'Style Team'
      }
    }
  };

  const post = blogPosts[category || '']?.[id || ''];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-estore-dark hover:text-estore-navy underline">
              Return to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-8 py-16">
        <nav className="mb-8">
          <Link to="/blog" className="text-estore-dark hover:text-estore-navy">
            ← Back to Blog
          </Link>
          {category && (
            <>
              <span className="mx-2 text-gray-400">/</span>
              <Link to={`/blog/${category}`} className="text-estore-dark hover:text-estore-navy capitalize">
                {category}
              </Link>
            </>
          )}
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-estore-dark mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl"
          />
        </header>

        <div 
          className="prose prose-lg max-w-none prose-headings:text-estore-dark prose-headings:font-playfair prose-p:text-gray-700 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-playfair font-bold text-estore-dark mb-6">
            More from {category}
          </h3>
          <Link
            to={`/blog/${category}`}
            className="inline-block bg-estore-dark text-white px-6 py-3 rounded-full hover:bg-estore-navy transition-colors"
          >
            View All {category} Posts
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
