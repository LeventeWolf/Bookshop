import {WishlistActionTypes} from "../constants/action-types";
import Axios from "axios";

export const fetchWishlistProducts = (username) => async (dispatch) => {
    Axios.post(`http://localhost:3001/api/wishlist/`, {username})
        .then(response => {
            dispatch(initWishlistProducts(response.data))
        }).catch(response => {
             console.log(response)
        }
    );
};

/**
 * Add product to database and redux store
 * @param username
 * @param product
 * @returns {(function(*): Promise<void>)|*}
 */
export const handleAddProductToWishlist = (username, product) => async (dispatch) => {
    Axios.post(`http://localhost:3001/api/wishlist/add`, {username, product})
        .then(response => {
            console.log(response.data)
            dispatch(removeProductFromWishlist(response.data))
        }).catch(response => {
            console.log(response)
        }
    );
}

/**
 * Remove product from database and redux store
 * @param username
 * @param product
 * @returns {(function(*): Promise<void>)|*}
 */
export const handleRemoveProductFromWishlist = (username, product) => async (dispatch) => {
    Axios.post(`http://localhost:3001/api/wishlist/remove`, {username, product})
        .then(response => {
            console.log(response.data)
            dispatch(removeProductFromWishlist(product))
        }).catch(response => {
            console.log(response);
        }
    );
}

export const initWishlistProducts = (products) => {
    return {
        type: WishlistActionTypes.INIT_WISHLIST,
        payload: products,
    }
}

export const addProductToWishlist = (product) => {
    return {
        type: WishlistActionTypes.ADD_PRODUCT,
        payload: product,
    }
}

export const removeProductFromWishlist = (product) => {
    return {
        type: WishlistActionTypes.REMOVE_PRODUCT,
        payload: product
    }
}

export const clearWishlist = () => {
    return {
        type: WishlistActionTypes.CLEAR_WISHLIST,
    }
}