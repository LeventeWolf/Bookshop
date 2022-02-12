import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {v4} from "uuid";

import './basket.scss'
import BasketProduct from "./BasketProduct";

export default function Basket() {
    const basket = useSelector(state => state.basket)

    useEffect(() => {
        document.title = "Your basket"
    }, []);

    return (
        <div className="main-wrap">
            <h1 className="page-title">Your basket</h1>

            <div className="basket-page-wrap">
                <h2 className="basket-page-title-secondary">Shopping basket details</h2>

                <div className="basket-page-container">
                    {
                        basket.length !== 0 ?
                            basket.map(product => <BasketProduct product={product} key={v4()}/>)
                        :
                            <div className="basket-empty">Your Basket is empty!</div>
                    }
                </div>
            </div>
        </div>
    )
}