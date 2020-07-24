import axios from "axios";
import { url } from "../../config/config";

export const addCategoriesToState = (products) => {
  return { type: "ADD_CATEGORIES_TO_STATE", payload: products };
};

export const getAllCategories = () => async (dispatch, getState) => {
  const products = await axios.get(`${url}/categories`);
  console.log(products.data);
  dispatch(addCategoriesToState(products.data));
};
