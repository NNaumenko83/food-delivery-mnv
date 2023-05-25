import axios from 'axios';

const BASE_URL = 'https://food-delivery-mnv-back.onrender.com/api';

const productsApi = axios.create({
  baseURL: BASE_URL,
});

export const getProducts = async pathname => {
  console.log('pathname:', pathname);
  const updatedPath = pathname.replace('/', '');
  console.log('updatedPath:', updatedPath);

  const response = await productsApi(`shops/${updatedPath}`);
  return response.data.data;
};

export const sendOrder = async body => {
  console.log('body:', body);
  const response = await productsApi.post('/orders', body);
  console.log('response:', response);

  return;
};
