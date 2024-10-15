/* eslint-disable react/prop-types */
import React from 'react';
import ProductGridItem from './ProductGridItem';

export default function ProductGrid({ products, id }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
     {
      products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
    )) } 
    </div>
  );
}
