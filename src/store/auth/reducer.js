const initialState = {
  user: null,
  token: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER_LOGGED_IN": {
      return payload;
    }
    case "auth/logout": {
      return initialState;
    }
    default:
      return state;
  }
};
