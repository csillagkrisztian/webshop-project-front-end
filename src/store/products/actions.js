import axios from "axios";
import { url } from "../../config/config";

export const addProductsToState = (products) => {
  return { type: "ADD_PRODUCTS_TO_STATE", payload: products };
};

export const getAllProducts = () => async (dispatch, getState) => {
  const state = getState();

  const products = await axios.get(
    `${url}/products?offset=${state.products.products.length}`
  );
  console.log(products.data);
  dispatch(addProductsToState(products.data.products));
};
