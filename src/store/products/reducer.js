const initialState = {
  loading: false,
  products: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCTS_TO_STATE": {
      return { ...state, products: [...state.products, ...payload] };
    }
    default:
      return state;
  }
};
