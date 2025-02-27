import React from "react";

const ProductItem = ({ title, rating, originalPrice, discountPercent, imageUrl }) => {
    const discountedPrice= originalPrice * (1 - discountPercent / 100);
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm w-[250px] mx-auto border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Product Image and Badges */}
      <div className="relative w-full h-64">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Top Deal Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full flex items-center">
          <span className="mr-1">❤️</span> TOP DEAL
        </div>
        {/* Discount Badge */}
        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded-full">
          -{discountPercent}%
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-sm mt-1">
          <span>⭐ {rating}</span>
          <span className="ml-2 text-gray-600 text-xs">({rating} reviews)</span>
        </div>
        {/* Prices */}
        <div className="mt-2">
          <span className="text-xl font-bold text-red-600">${discountedPrice}</span>
          <span className="ml-2 text-gray-400 line-through">${originalPrice}</span>
        </div>
      </div>

      {/* Timer Section */}
      <div className="p-4 pt-0 bg-gray-50">
        <p className="text-sm text-gray-600">NOW Giá siêu tốt 2h</p>
      </div>
    </div>
  );
};

export default ProductItem;