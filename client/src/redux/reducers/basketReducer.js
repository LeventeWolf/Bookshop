import { BasketActionTypes } from "../constants/action-types";

export const basketReducer = (state = [], {type, payload}) => {
    switch (type) {
        case BasketActionTypes.ADD_PRODUCT:
            return [...state, payload];
        case BasketActionTypes.REMOVE_PRODUCT:
            return state - 1;
        default:
            return state;
    }
}