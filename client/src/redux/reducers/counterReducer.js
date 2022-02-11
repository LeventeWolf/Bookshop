import { CounterActionTypes } from "../constants/counter-action-types";

const counterReducer = (state = 0, {type}) => {
    switch (type) {
        case CounterActionTypes.INCREMENT:
            return state + 1;
        case CounterActionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;