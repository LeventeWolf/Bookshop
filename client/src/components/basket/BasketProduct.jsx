import React from "react";
import faker from "faker";
import SupplyProduct from "../home/SupplyProduct";
import {v4} from "uuid";
import {useSelector} from "react-redux";

export default function BasketProduct() {
    const basket = useSelector(state => state.basket)

    return (
        <div className="supply-wrap">
            <h1>Supply</h1>

            <div className="supply-container">
                {basket.map(product => <SupplyProduct product={product} key={v4()}/>)}
            </div>
        </div>
    )
}