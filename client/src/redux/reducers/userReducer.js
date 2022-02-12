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
                username: payload.username,
                useravatar: payload.useravatar,
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