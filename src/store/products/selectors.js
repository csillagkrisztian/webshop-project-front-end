export const selectAllProducts = (state) => {
  return state.products;
};

export const selectProductById = (id) => (state) => {
  return state.products.products.find((p) => p.id === id);
};
