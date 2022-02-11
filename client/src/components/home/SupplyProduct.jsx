import React from "react";

export default function SupplyProduct() {
    return (
        <div className="supply-product">
            <img src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1323/9780132350884.jpg"
                 className="supply-product-image" alt="img" />

            <h2 className="supply-product-title">
                Clean Code
            </h2>

            <h2 className="supply-product-price">
                10 265 Ft
            </h2>

            <button className="supply-product-add-to-basket">
                Add to basket
            </button>
        </div>
    )
}