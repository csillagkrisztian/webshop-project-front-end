export const selectCartItems = (state) => {
  return state.cart.items;
};

export const selectTotalPrice = (state) => {
  let total = 0;
  state.cart.items.forEach((i) => (total += parseFloat(i.price)));
  return total;
};
