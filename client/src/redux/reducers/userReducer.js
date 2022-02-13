import { UserActionTypes } from "../constants/action-types";

const initialUser = {
    username: undefined,
    useravatar:undefined,
    isLoggedIn: false
};

export const userReducer = (state = initialUser, { type, payload }) => {
    switch (type) {
        case UserActionTypes.LOGIN:
            return {
                isLoggedIn: true,
                username: payload.username,
                useravatar: payload.useravatar,
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