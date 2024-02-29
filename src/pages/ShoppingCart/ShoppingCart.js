import React from 'react';
import {
  CartContainer,
  CartProducts,
  FormContainer,
  MapWrapper,
  TextPrice,
} from './ShoppingCart.styled';
import { Form } from '../../components/Form/Form';
import { CartProductsList } from '../../components/CartProductsList/CartProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectTotalValue } from '../../redux/productsSlice';
import { useEffect } from 'react';
import { deleteShop } from '../../redux/shopSlice';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log('API_KEY:', API_KEY);

const ShoppingCart = () => {
  const total = useSelector(selectTotalValue);
  const selectedProducts = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedProducts.length === 0) {
      dispatch(deleteShop());
    }
  }, [dispatch, selectedProducts.length]);

  return (
    <>
      <CartContainer>
        <FormContainer>
          <MapWrapper>There will be map</MapWrapper>
          <Form />
        </FormContainer>
        <CartProducts>
          <CartProductsList />
        </CartProducts>
      </CartContainer>
      <TextPrice>Total price: {total} UAH</TextPrice>
    </>
  );
};

export default ShoppingCart;
