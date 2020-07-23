const initialState = {
  loading: false,
  categories: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CATEGORIES_TO_STATE":
      return { ...state, categories: [...payload] };

    default:
      return state;
  }
};
