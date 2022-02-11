import React from "react";
import {useSelector} from "react-redux";
import SupplyProduct from "../home/SupplyProduct";
import {v4} from "uuid";

export default function Basket() {
    const basket = useSelector(state => state.basket)

    return (
        <div className="main-wrap">
            <div className="supply-wrap">
                <h1>Basket</h1>

                <div className="supply-container">
                    {basket.map(product => <SupplyProduct product={product} key={v4()}/>)}
                </div>
            </div>
        </div>
    )
}