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
            return {...payload, isLoggedIn: true};

        case UserActionTypes.LOGOUT:
            return initialUser;

        case UserActionTypes.SET_MEMBER:
            return {...state, isMember: payload}

        default:
            return state;
    }
};