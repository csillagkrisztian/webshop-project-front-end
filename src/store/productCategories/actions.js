import axios from "axios";
import { url } from "../../config/config";

export const addProductsToState = (products) => {
  return { type: "ADD_CATEGORIES_TO_STATE", payload: products };
};

export const getAllProducts = () => async (dispatch, getState) => {
  const products = await axios.get(`${url}/categories`);
  console.log(products.data);
  dispatch(addProductsToState(products.data));
};
