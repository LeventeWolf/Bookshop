import { CounterActionTypes } from "../constants/action-types";

export const counterReducer = (state = 0, {type, payload}) => {
    switch (type) {
        case CounterActionTypes.INCREMENT:
            return state + payload;
        case CounterActionTypes.DECREMENT:
            return state - payload;
        default:
            return state;
    }
}