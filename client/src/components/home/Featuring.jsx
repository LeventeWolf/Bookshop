import React from "react";
import './featuring.scss';
import faker from "faker";
import {v4} from "uuid";
import {FeaturingProduct} from "./FeaturingProduct";
import arrowImage from '../../assets/featuring-arrow.png';

export default function Featuring() {
    const featuringProducts = [];

    for (let i = 1; i <= 100; i++) {
        const product = {
            title: 'book#' + i,
            author: faker.name.findName(),
            price: Math.floor(Math.random() * 20000) + 100,
            imageUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1323/9780132350884.jpg',
            quantity: 1,
        }

        featuringProducts.push(product)
    }

    function scrollLeft() {
        const container = document.getElementsByClassName('container-wrap')[0];
        container.scroll({left: container.scrollLeft - 1170, behavior: 'smooth'})
    }

    function scrollRight () {
        const container = document.getElementsByClassName('container-wrap')[0];
        // container.scrollLeft += 1170;

        container.scroll({left: container.scrollLeft + 1170, behavior: 'smooth'})
    }


    return (
        <div className="featuring-wrap">
            <h1>Featuring (2022)</h1>

            <div className="featuring-product-container">
                <div onClick={scrollLeft} className="slider-previous-wrap">
                    <img className="previous-arrow" src={arrowImage} alt=">"/>
                </div>

                <div className="container-wrap">
                    {featuringProducts.map(product => <FeaturingProduct product={product} key={v4()}/>)}
                </div>

                <div onClick={scrollRight} className="slider-next-wrap">
                    <img className="next-arrow" src={arrowImage} alt=">"/>
                </div>
            </div>
        </div>
    )
};