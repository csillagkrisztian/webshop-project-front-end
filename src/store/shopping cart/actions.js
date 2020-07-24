export const addItemToCart = (item) => {
  return { type: "ADD_TO_CART", payload: item };
};

export const removeItemToCart = (item) => {
  return { type: "REMOVE_FROM_CART", payload: item };
};
