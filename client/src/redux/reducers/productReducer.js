import { ProductActionTypes } from "../constants/action-types";

export const productReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ProductActionTypes.SELECT:
            return payload;
        default:
            return state;
    }
}