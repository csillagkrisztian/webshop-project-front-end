import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import productsReducer from "./productCategories/reducer";

const reducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export default reducer;
