import React from 'react';
import { ProductsList } from '../../ProductsList/ProductsList';
import { getProducts } from '../../../services/ShopAPI';

export const KfcProducts = () => {
  const products = getProducts();
  console.log('products:', products);

  return (
    <>
      <ProductsList products={products} />
    </>
  );
};
