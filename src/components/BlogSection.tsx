
import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Learn about different decore and suitability',
      date: 'Feb 16, 2024',
      content: "Explore the art of decorating your home with different styles, colors, and suitability for every room. Discover how to make spaces more inviting with personalized touches."
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      title: 'Know the History of Iconic Purse Designs and uniqueness',
      date: 'Jan 20, 2024',
      content: "Delve into the fascinating history behind iconic purse designs and what makes each piece unique in the world of fashion accessories."
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: "The Latest Tips & Tricks That You've Never Heard Of",
      date: 'May 2, 2024',
      content: "Get up to date with the most surprising fashion and home-living hacks for 2024. These little-known tricks will take your style to the next level."
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      title: "Silhouette Serenades: Fashion's Melodies In Motion",
      date: 'March 27, 2024',
      content: "Experience the movement and rhythm of today's trendsetting silhouettes and how to make bold statements with your fashion choices."
    }
  ];

  const [openDialogId, setOpenDialogId] = useState<number | null>(null);

  return (
    <section id="blog-section" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-estore-dark mb-8 sm:mb-10 md:mb-12">
          Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {blogs.map((blog) => (
            <Dialog
              key={blog.id}
              open={openDialogId === blog.id}
              onOpenChange={(open) => setOpenDialogId(open ? blog.id : null)}
            >
              <DialogTrigger asChild>
                <div
                  className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  tabIndex={0}
                  role="button"
                  aria-label={`Read blog: ${blog.title}`}
                  onClick={() => setOpenDialogId(blog.id)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") setOpenDialogId(blog.id);
                  }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-36 sm:h-40 md:h-44 object-cover"
                  />
                  <div className="p-3 sm:p-4 text-left">
                    <h3 className="font-semibold text-sm sm:text-base text-estore-dark mb-2 leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">• {blog.date}</p>
                    <span className="inline-block text-estore-dark underline mt-2 text-xs sm:text-sm">Read more &rarr;</span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-md w-full">
                <DialogHeader>
                  <DialogTitle>{blog.title}</DialogTitle>
                  <DialogDescription>
                    {blog.date}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 text-left">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-36 sm:h-40 md:h-44 object-cover rounded-xl mb-4"
                  />
                  <p className="text-sm sm:text-base text-gray-700 mb-4">{blog.content}</p>
                  <DialogClose asChild>
                    <button className="px-3 sm:px-4 py-2 bg-estore-dark text-white rounded-full float-right mt-2 hover:bg-estore-navy transition text-sm">
                      Close
                    </button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <button className="bg-gray-200 text-estore-dark px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-medium hover:bg-estore-dark hover:text-white transition-colors text-sm sm:text-base">
          View all
        </button>
      </div>
    </section>
  );
};

export default BlogSection;

