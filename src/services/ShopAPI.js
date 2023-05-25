import mcDonaldsProducts from "../db/md.json";
import kfcProducts from "../db/kfc.json";
import murakamiProducts from "../db/murakami.json";

export const getProducts = () => {
  return mcDonaldsProducts;
};

export const getProductById = (productId) => {
  return mcDonaldsProducts.find((product) => product.id === productId);
};
