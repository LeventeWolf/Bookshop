import {UserActionTypes} from "../constants/action-types";


export const login = (userData) => {
    return {
        type: UserActionTypes.LOGIN,
        payload: userData
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
