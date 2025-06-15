
import React from "react";

interface Category {
  name: string;
  image: string;
}

interface CategoryTilesProps {
  categories: Category[];
}

const CategoryTiles: React.FC<CategoryTilesProps> = ({ categories }) => (
  <div className="grid grid-cols-5 gap-8 mb-16">
    {categories.map((category) => (
      <div key={category.name} className="relative rounded-lg overflow-hidden cursor-pointer group">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-3">
          <span className="text-white font-medium text-sm">{category.name}</span>
        </div>
      </div>
    ))}
  </div>
);

export default CategoryTiles;
