import { createStore } from "redux";
import reducers from "./reducers/index";
import {loadState, saveState} from "../lib/localStorage"

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState({
        product: store.getState().product
    })
})

export default store;
