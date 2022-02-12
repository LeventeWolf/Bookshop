import { UserActionTypes } from "../constants/action-types";


export const login = (username) => {
    return {
        type: UserActionTypes.LOGIN,
        payload: username
    }
}

export const logout = (username) => {
    return {
        type: UserActionTypes.LOGOUT,
        payload: username
    }
}
