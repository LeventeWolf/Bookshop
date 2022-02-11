import { UserActionTypes } from "../constants/action-types";


export const login = () => {
    return {
        type: UserActionTypes.LOGIN,
    }
}

export const logout = () => {
    return {
        type: UserActionTypes.LOGOUT,
    }
}