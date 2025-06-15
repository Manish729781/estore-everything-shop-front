
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
      title: 'Gadgets',
      subtitle: 'Selective Styles Help your look',
      author: 'Glitz',
      date: '22 Jan 2022',
      content: `'I love exploring fancy gadgets and accessories that elevate my look. The collection is diverse, and each piece feels thoughtfully picked for modern users.'`
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      title: 'Home decor',
      subtitle: 'Selective Styles Help your look',
      author: 'Glitz',
      date: '22 Jan 2022',
      content: `'Home decor from here brightened my space. Love the trendy yet timeless options for every room. Delivery is smooth and the team is super helpful.'`
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      title: 'Clothes',
      subtitle: 'Selective Styles Help your look',
      author: 'Glitz',
      date: '22 Jan 2022',
      content: `'Found my new favorite outfits! Quality is great, styles are unique, and I always get compliments. I recommend shopping here if you want to stand out.'`
    }
  ];

  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <section id="featured-categories" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Dialog
              key={category.id}
              open={openDialog === category.id}
              onOpenChange={(open) => setOpenDialog(open ? category.id : null)}
            >
              <DialogTrigger asChild>
                <div
                  tabIndex={0}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-estore-dark transition-shadow hover:shadow-xl"
                  onClick={() => setOpenDialog(category.id)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") setOpenDialog(category.id);
                  }}
                  aria-label={`Read more about ${category.title}`}
                  role="button"
                >
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
                    <span className="text-estore-dark font-medium hover:opacity-75 transition-opacity underline">
                      Read more &rarr;
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-md w-full">
                <DialogHeader>
                  <DialogTitle>{category.title}</DialogTitle>
                  <DialogDescription>
                    By {category.author} • {category.date}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h4 className="font-semibold text-md mb-2">{category.subtitle}</h4>
                  <p className="text-gray-700 mb-4">{category.content}</p>
                  <DialogClose asChild>
                    <button
                      className="px-4 py-2 bg-estore-dark text-white rounded-full float-right mt-2 hover:bg-estore-navy transition"
                    >
                      Close
                    </button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
