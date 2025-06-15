
import React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";
import { Heart } from "lucide-react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  category: string;
  colors: string[];
  inStock: boolean;
}

interface ProductGridProps {
  t: any,
  currentProducts: Product[],
  filteredProducts: Product[],
  currentPage: number,
  totalPages: number,
  viewMode: string,
  onPageChange: (page: number) => void,
  onWishlistToggle: (e: React.MouseEvent, product: Product) => void,
  isInWishlist: (id: string) => boolean,
  handleProductClick: (id: number) => void
}

const renderPaginationNumbers = (currentPage: number, totalPages: number, onPageChange: (page: number) => void) => {
  const pageNumbers = [];
  const maxVisiblePages = 10;

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}
            isActive={currentPage === i}
            className="min-w-[40px] h-10"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    for (let i = 1; i <= Math.min(8, totalPages); i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}
            isActive={currentPage === i}
            className="min-w-[40px] h-10"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    pageNumbers.push(
      <PaginationItem key="ellipsis">
        <PaginationEllipsis />
      </PaginationItem>
    );
    for (let i = 9; i <= Math.min(10, totalPages); i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}
            isActive={currentPage === i}
            className="min-w-[40px] h-10"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  return pageNumbers;
};


const ProductGrid: React.FC<ProductGridProps> = ({
  t,
  currentProducts,
  filteredProducts,
  currentPage,
  totalPages,
  viewMode,
  onPageChange,
  onWishlistToggle,
  isInWishlist,
  handleProductClick
}) => {
  return (
    <div className="flex-1">
      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">{t('products.noProducts')}</p>
          {/* Optionally show suggestion */}
        </div>
      )}
      {filteredProducts.length > 0 && (
        <>
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {currentProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer group relative"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative">
                  <span className="absolute top-4 left-4 bg-gray-100 text-estore-dark text-xs px-2 py-1 rounded-lg font-medium z-10">
                    {product.category}
                  </span>
                  {!product.inStock && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-medium z-10">
                      {t('products.outOfStock')}
                    </span>
                  )}
                  <button
                    onClick={(e) => onWishlistToggle(e, product)}
                    className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-20 ${
                      !product.inStock ? 'top-12' : ''
                    } ${
                      isInWishlist(product.id.toString())
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-600 hover:bg-red-100 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(product.id.toString()) ? 'fill-current' : ''}`} />
                  </button>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-estore-dark mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-estore-dark">{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">{product.oldPrice}</span>
                  </div>
                  {product.colors.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border-2 border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent className="gap-2">
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) onPageChange(currentPage - 1);
                    }}
                    className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100'} px-4 py-2`}
                  />
                </PaginationItem>
                {renderPaginationNumbers(currentPage, totalPages, onPageChange)}
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) onPageChange(currentPage + 1);
                    }}
                    className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100'} px-4 py-2`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGrid;
