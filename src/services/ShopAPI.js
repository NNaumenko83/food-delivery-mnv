import axios from 'axios';

const BASE_URL = 'https://food-delivery-mnv-back.onrender.com/api/shops';

const productsApi = axios.create({
  baseURL: BASE_URL,
});

export const getProducts = async pathname => {
  console.log('pathname:', pathname);
  const updatedPath = pathname.replace('/', '');
  console.log('updatedPath:', updatedPath);

  const response = await productsApi(`${updatedPath}`);
  return response.data.data;
};
