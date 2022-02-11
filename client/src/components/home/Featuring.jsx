import React from "react";
import './featuring.scss';

import {decrement, increment} from "../../redux/actions/counterActions";
import {useDispatch, useSelector} from "react-redux";

export default function Featuring() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div className="featuring-wrap">
            <h1>Featuring (2022)</h1>

            <button className="supply-product-add-to-basket" onClick={() => dispatch(decrement())}>-</button>
            <div> Counter: {counter}</div>
            <button className="supply-product-add-to-basket" onClick={() => dispatch(increment())}>+</button>

            <div className="featuring-product-container">

            </div>
        </div>
    )
}