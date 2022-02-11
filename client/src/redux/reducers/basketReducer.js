import { BasketActionTypes } from "../constants/action-types";

export const basketReducer = (basket = [], {type, payload}) => {
    switch (type) {
        case BasketActionTypes.ADD_PRODUCT:
            return [...basket, payload];
        case BasketActionTypes.REMOVE_PRODUCT:
            const prevBasket = [...basket];

            return prevBasket.filter(product => product.title !== payload);
        default:
            return basket;
    }
}