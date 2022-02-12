import React, {useEffect, useState} from "react";
import './featuring.scss';
import faker from "faker";
import {v4} from "uuid";
import {FeaturingProduct} from "./FeaturingProduct";
import arrowImage from '../../assets/featuring-arrow.png';



export default function Featuring() {
    let featuringContainer;
    const featuringProducts = [];
    let autoScrollInterval;

    for (let i = 1; i <= 100; i++) {
        const product = {
            title: 'F-book #' + i,
            longTitle: 'F-book #' + i + ' : A Handbook of Agile Software Craftsmanship',
            description: 'Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn\'t have to be that way.',
            author: faker.name.findName(),
            price: Math.floor(Math.random() * 20000) + 100,
            imageUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg',
            type: 'Paperback',
            language: 'English',
            quantity: 1,
        }

        featuringProducts.push(product)
    }

    useEffect(() => {
        featuringContainer = document.getElementsByClassName('container-wrap')[0];
        startAutoScroll();
    }, []);

    function scrollLeft() {
        const container = document.getElementsByClassName('container-wrap')[0];
        container.scroll({left: container.scrollLeft - 1175, behavior: 'smooth'})
    }

    function scrollRight() {
        const container = document.getElementsByClassName('container-wrap')[0];
        container.scroll({left: container.scrollLeft + 1175, behavior: 'smooth'})
    }

    function autoScroll() {
        featuringContainer.scroll({left: featuringContainer.scrollLeft + 2, behavior: 'auto'})
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    function startAutoScroll () {
        autoScrollInterval = setInterval(autoScroll, 50)
    }


    return (
        <div onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll} className="featuring-wrap">
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