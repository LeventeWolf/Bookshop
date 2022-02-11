import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { userReducer } from "./userReducer";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  user: userReducer,
  counter: counterReducer,
});

export default reducers;
