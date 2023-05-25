import React from 'react';
import { getProducts } from '../../../services/ShopAPI';
import { ProductsList } from '../../ProductsList/ProductsList';
import { useLocation } from 'react-router-dom';

export const McDonaldsProducts = () => {
  const products = getProducts();
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <ProductsList products={products} path={pathname} />
    </>
  );
};
