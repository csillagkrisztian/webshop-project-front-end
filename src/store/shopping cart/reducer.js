const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return { items: [...state.items, payload] };
    case "REMOVE_FROM_CART": {
      const newItems = state.items.filter((i) => i.id !== payload.id);
      return { items: [...newItems] };
    }
    case "REMOVE_ALL": {
      return initialState;
    }
    default:
      return state;
  }
};
