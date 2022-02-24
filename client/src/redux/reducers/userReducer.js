import {UserActionTypes} from "../constants/action-types";
import {setMember} from "../actions/userActions";

const initialUser = {
    username: undefined,
    avatar: undefined,
    isLoggedIn: false,
    isMember: false,
    boughtAmount: 0,
    error: null,
    userLoggingIn:false
};

export const userReducer = (user = initialUser, {type, payload}) => {
    switch (type) {
        case UserActionTypes.LOGIN_SUCCESS:
            return {...payload, isLoggedIn: true};

        case UserActionTypes.LOGIN_ERROR:
            return {error:payload, isLoggedIn: false}

        case UserActionTypes.LOGIN_LOADING:
            return {...payload, userLoggingIn: true}

        case UserActionTypes.LOGOUT:
            return initialUser;

        case UserActionTypes.UPDATE_MEMBER:
            if (user.boughtAmount >= 5) {
                return {...user, isMember: true};
            }

            return {...user, isMember: false};

        case UserActionTypes.SET_BOUGHT_AMOUNT:
            return {...user, boughtAmount: payload};


        default:
            return user;
    }
};