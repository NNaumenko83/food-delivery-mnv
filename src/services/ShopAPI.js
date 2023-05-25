import axios from 'axios';

const BASE_URL =
  'https://food-delivery-mnv-back.onrender.com/api/shops/murakami';

const productsApi = axios.create({
  baseURL: BASE_URL,
});

export const getProducts = async pathname => {
  const response = await productsApi('');
  return response.data.data;
};
