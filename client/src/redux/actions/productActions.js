import { ProductActionTypes } from "../constants/action-types";


export const select = (product) => {
    return {
        type: ProductActionTypes.SELECT,
        payload: product
    }
}
