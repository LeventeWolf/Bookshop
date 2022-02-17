import { ProductActionTypes } from "../constants/action-types";
import Axios from 'axios';

export const fetchProduct = (title) => async (dispatch) => {
    console.log('Fetching!')
    const response = await Axios.get(`http://localhost:3000/product/${title}`)
        .then(response => {
            console.log(response)
        }).catch(response => {
            console.log(response)
        });
    dispatch({ type: ProductActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const selectProduct = (product) => {
    return {
        type: ProductActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ProductActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
