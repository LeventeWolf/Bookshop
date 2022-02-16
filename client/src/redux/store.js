import {createStore} from "redux";
import reducers from "./reducers/index";
import {loadState, saveState} from "../lib/localStorage"

const PERSISTED_KEYS = ['product', 'basket', 'user'];

const preloadedState = {
    product: loadState('product'),
    basket: loadState('basket'),
    user: loadState('user'),
}

const store = createStore(
  reducers, preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    PERSISTED_KEYS.forEach(key => {
        saveState(key, store.getState()[key])
    });
})

export default store;
