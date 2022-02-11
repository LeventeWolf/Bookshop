import { UserActionTypes } from "../constants/action-types";

const initialUser = {
    username: undefined,
    isLoggedIn: false
};

export const userReducer = (state = initialUser, { type, payload }) => {
    switch (type) {
        case UserActionTypes.SET_USERNAME:
            const userCopy = Object.assign({}, state);

            userCopy.name = payload;

            return state;

        case UserActionTypes.SET_LOGIN:


            userCopy.isLoggedIn = payload;

            return userCopy;

        default:
            return state;
    }
};