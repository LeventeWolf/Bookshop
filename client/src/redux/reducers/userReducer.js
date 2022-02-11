import { UserActionTypes } from "../constants/action-types";

const initialUser = {
    username: undefined,
    isLoggedIn: false
};

export const userReducer = (state = initialUser, { type }) => {
    switch (type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };

        case UserActionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };

        default:
            return state;
    }
};