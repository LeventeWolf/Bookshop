import {ProductActionTypes} from "../constants/action-types";
import Axios from 'axios';

export const fetchProduct = (title) => async (dispatch) => {
    Axios.get(`http://localhost:3001/api/product/${title}`)
        .then(response => {
            dispatch({type: ProductActionTypes.SELECTED_PRODUCT, payload: response.data});})
        .catch(response => {
            console.log(response)
        });
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
