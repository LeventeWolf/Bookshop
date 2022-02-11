import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { userReducer } from "./userReducer";
import { counterReducer } from "./counterReducer";
import { basketReducer } from "./basketReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  user: userReducer,
  counter: counterReducer,
  basket: basketReducer,
});

export default reducers;
