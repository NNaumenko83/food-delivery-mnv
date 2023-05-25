import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { List } from './ProductsList.styled';

export const ProductsList = ({ products }) => {
  return (
    <List>
      {products.map(product => (
        <ProductCard
          key={product._id}
          name={product.name}
          img={product.image}
          price={product.price}
          id={product._id}
        />
      ))}
    </List>
  );
};
