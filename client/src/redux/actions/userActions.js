import { UserActionTypes } from "../constants/action-types";


export const login = (userData) => {
    return {
        type: UserActionTypes.LOGIN,
        payload: userData
    }
}

export const logout = (userData) => {
    return {
        type: UserActionTypes.LOGOUT,
        payload: userData
    }
}
