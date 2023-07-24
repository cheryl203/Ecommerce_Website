import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      image: '/kids1.png',
      name: 'Kids wear',
      rating: 4.3,
      price: 36,
    },
    
     {
       id: 2,
       image: '/men1.png',
       name: 'Men Wear',
       rating: 4.2,
       price: 35,
     },
     {
      id: 3,
      image: '/women1.png',
      name: 'Women Wear',
      rating: 4.5,
      price: 30,
    },
    
     {
       id: 4,
       image: '/sports5.png',
       name: 'Sports Wear',
       rating: 3.5,
       price: 119.99,
     },
     {
      id: 5,
      image: '/sports1.png',
      name: 'Shorts wear',
      rating: 4.5,
      price: 119,
    },
    
     {
       id: 6,
       image: '/sports2.png',
       name: 'sports wear',
       rating: 4.5,
       price: 67,
     },
       {
      id: 7,
      image: '/sports3.png',
      name: 'sports wear',
      rating: 4.6,
      price: 89,
    },
    
     {
       id: 8,
       image: '/sports4.png',
       name: 'Sports wear',
       rating: 4.7,
       price: 119.99,
     },

     
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold text-black mb-4">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
      
    </div>
  );
};

export default ProductsSection;




