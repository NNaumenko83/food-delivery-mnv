import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../services/ShopAPI';
import { ProductsList } from '../../ProductsList/ProductsList';
import { useLocation } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import Error from 'components/Error/Error';

export const KfcProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    console.log('useEffect');
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const products = await getProducts(pathname);
        console.log('products:', products);

        setProducts(products);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [pathname]);

  useEffect(() => {});

  return (
    <>
      {isLoading && (
        <Bars
          height="40"
          width="40"
          color="#280232"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {products.length > 0 && (
        <ProductsList products={products} path={pathname} />
      )}
      {errorMessage && <Error />}
    </>
  );
};
