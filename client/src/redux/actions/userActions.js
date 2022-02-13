import { UserActionTypes } from "../constants/action-types";


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
