import { CounterActionTypes } from "../constants/action-types";


export const increment = (amount) => {
    return {
        type: CounterActionTypes.INCREMENT,
        payload: amount
    }
}

export const decrement = (amount) => {
    return {
        type: CounterActionTypes.DECREMENT,
        payload: amount,

    }
}