export const selectCategories = (state) => {
  return state.categories;
};

export const selectCategoryById = (id) => (state) => {
  const foundCategory = state.categories.categories.find((c) => c.id === id);
  console.log(foundCategory);
  return foundCategory;
};
