
import React from "react";
import { ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProductFiltersProps {
  t: any,
  filteredCount: number,
  totalProducts: number,
  currentPage: number,
  totalPages: number,
  searchQuery: string,
  onSearchClear: () => void,
  sortBy: string,
  onSortByChange: (sort: string) => void,
  viewMode: string,
  setViewMode: (mode: string) => void,
  availabilityFilter: string[],
  onAvailabilityChange: (value: string, checked: boolean) => void,
  productTypeNames: string[],
  productTypeFilter: string[],
  onProductTypeChange: (value: string, checked: boolean) => void,
  onClearAll: () => void
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  t, filteredCount, totalProducts, currentPage, totalPages,
  searchQuery, onSearchClear,
  sortBy, onSortByChange, viewMode, setViewMode,
  availabilityFilter, onAvailabilityChange,
  productTypeNames, productTypeFilter, onProductTypeChange,
  onClearAll
}) => (
  <div className="w-72 flex-shrink-0">
    <div className="space-y-8">
      {/* Results Count */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600 font-medium">
          {filteredCount} {t('products.of')} {totalProducts} {t('products.results')}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {t('products.page')} {currentPage} {t('products.of')} {totalPages}
        </p>
      </div>

      {/* Sort By */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm font-medium">{t('products.sortBy')}</span>
        <Select value={sortBy} onValueChange={onSortByChange}>
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">{t('products.relevance')}</SelectItem>
            <SelectItem value="price-low">{t('products.priceLowToHigh')}</SelectItem>
            <SelectItem value="price-high">{t('products.priceHighToLow')}</SelectItem>
            <SelectItem value="newest">{t('products.newestFirst')}</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-1 ml-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
          >
            <span className="sr-only">Grid</span>
            <svg width="16" height="16" fill="currentColor"><rect width="6" height="6"/><rect x="10" width="6" height="6"/><rect y="10" width="6" height="6"/><rect x="10" y="10" width="6" height="6"/></svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
          >
            <span className="sr-only">List</span>
            <svg width="16" height="16" fill="currentColor"><rect width="16" height="6"/><rect y="10" width="16" height="6"/></svg>
          </button>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2">
        {searchQuery && (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {t('search.search')}: {searchQuery}
          </span>
        )}
        {availabilityFilter.map(filter => (
          <span key={filter} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            {filter}
          </span>
        ))}
        {(searchQuery || availabilityFilter.length > 0) && (
          <button 
            onClick={onClearAll}
            className="text-sm text-blue-600 hover:underline"
          >
            {t('products.clearAll')}
          </button>
        )}
      </div>

      {/* Availability Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">{t('products.availability')}</h3>
          <ChevronDown size={16} />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={availabilityFilter.includes('In Stock')}
              onChange={(e) => onAvailabilityChange('In Stock', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">{t('products.inStock')}</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={availabilityFilter.includes('Out Of Stock')}
              onChange={(e) => onAvailabilityChange('Out Of Stock', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">{t('products.outOfStock')}</span>
          </label>
        </div>
      </div>

      {/* Product Type Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">{t('products.productType')}</h3>
          <ChevronDown size={16} />
        </div>
        <div className="space-y-2">
          {productTypeNames.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={productTypeFilter.includes(type)}
                onChange={(e) => onProductTypeChange(type, e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter panel, stubbed */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">{t('products.size')}</h3>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  </div>
);

export default ProductFilters;
