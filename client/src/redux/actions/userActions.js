import {UserActionTypes} from "../constants/action-types";

export const loginSuccess = (userData) => {
    return {
        type: UserActionTypes.LOGIN_SUCCESS,
        payload: userData
    }
}

export const loginLoading = () => {
    return {
        type: UserActionTypes.LOGIN_LOADING,
    }
}

export const loginError = (error) => {
    return {
        type: UserActionTypes.LOGIN_ERROR,
        payload: error
    }
}

export const logout = () => {
    return {
        type: UserActionTypes.LOGOUT,
    }
}

export const updateMember = () => {
    return {
        type: UserActionTypes.UPDATE_MEMBER,
    }
}

export const setBoughtAmount = (amount) => {
    return {
        type: UserActionTypes.SET_BOUGHT_AMOUNT,
        payload: amount,
    }
}
