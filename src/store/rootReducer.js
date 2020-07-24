import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import categoriesReducer from "./productCategories/reducer";
import productsReducer from "./products/reducer";

const reducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default reducer;
