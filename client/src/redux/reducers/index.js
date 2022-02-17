import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { basketReducer } from "./basketReducer";
import { productReducer } from "./productReducer";
import { wishlistReducer } from "./wishlistReducer";

const reducers = combineReducers({
  user: userReducer,
  basket: basketReducer,
  product: productReducer,
  wishlist: wishlistReducer
});

export default reducers;
