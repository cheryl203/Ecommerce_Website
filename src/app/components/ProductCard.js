import React from 'react';

const ProductCard = ({ image, name, rating, price }) => {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <div className="w-full aspect-w-1 aspect-h-1">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <h3 className="text-xl font-semibold text-black mt-2">{name}</h3>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center">
          <span className="text-gray-500">Rating: {rating}</span>
        </div>
        <div className="mt-2 text-gray-600">From ${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
