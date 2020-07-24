import axios from "axios";
import { url } from "../../config/config";

export const addItemToCart = (item) => {
  return { type: "ADD_TO_CART", payload: item };
};

export const removeItemToCart = (item) => {
  return { type: "REMOVE_FROM_CART", payload: item };
};

export const removeAllFromCart = () => {
  return { type: "REMOVE_ALL" };
};

export const finalizeOrders = (items, userId) => async (dispatch, getState) => {
  const orderedItems = items.map(async (i) => {
    const config = {
      customerId: userId,
      productId: i.id,
    };
    const postOrder = await axios.post(`${url}/orders`, config);
    return postOrder.data;
  });
  const stuff = await Promise.all(orderedItems);
  console.log(userId);
  console.log(stuff);
};
