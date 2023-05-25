import React from 'react';
import { ProductsList } from '../../ProductsList/ProductsList';
import { getProducts } from '../../../services/ShopAPI';

export const MurakamiProducts = () => {
  const products = getProducts();
  console.log('products:', products);

  return (
    <>
      <ProductsList products={products} />
    </>
  );
};
