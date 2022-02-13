import {UserActionTypes} from "../constants/action-types";

const initialUser = {
    username: undefined,
    useravatar: undefined,
    isLoggedIn: false,
    isMember: false
};

export const userReducer = (state = initialUser, {type, payload}) => {
    switch (type) {
        case UserActionTypes.LOGIN:
            return {
                isLoggedIn: true,
                username: payload.username,
                avatar: payload.avatar,
                isMember: payload.isMember
            };

        case UserActionTypes.LOGOUT:
            return {
                username: undefined,
                useravatar: undefined,
                isLoggedIn: false,
                isMember: false,
            };

        case UserActionTypes.SET_MEMBER:
            return {...state, isMember: payload}

        default:
            return state;
    }
};