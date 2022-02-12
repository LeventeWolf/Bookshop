import { UserActionTypes } from "../constants/action-types";

const initialUser = {
    username: undefined,
    isLoggedIn: false
};

export const userReducer = (state = initialUser, { type, payload }) => {
    switch (type) {
        case UserActionTypes.LOGIN:
            return {
                username: payload,
                isLoggedIn: true,
            };

        case UserActionTypes.LOGOUT:
            return {
                username: payload,
                isLoggedIn: false,
            };

        default:
            return state;
    }
};