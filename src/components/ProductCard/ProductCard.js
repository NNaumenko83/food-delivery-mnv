import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from './ProductCard.styled';
import { addProduct, selectProducts } from '../../redux/productsSlice';
import { toast } from 'react-toastify';
import { addShop } from '../../redux/shopSlice';
import { useLocation } from 'react-router-dom';

export const ProductCard = ({ name, img, price, id }) => {
  const dispatch = useDispatch();

  const location = useLocation();

  const selectedProducts = useSelector(selectProducts);

  const handleButtonClick = () => {
    if (selectedProducts.length === 0) {
      dispatch(addShop(location.pathname));
    }

    const productArray = selectedProducts.filter(product => {
      return product.id === id;
    });

    if (productArray.length !== 0) {
      toast.info('This item is already in the cart', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    dispatch(addProduct({ name, img, price, id }));

    toast.success('Product is added', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <Card>
      <img
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
        src={img}
        alt={name}
        width={'300px'}
      />
      <h3>{name}</h3>
      <p>{price} UAH</p>
      <Button type="button" onClick={handleButtonClick}>
        Add to Cart
      </Button>
    </Card>
  );
};
