import React, {useEffect, useState} from "react";
import '../../styles/featuring.scss';
import faker from "faker";
import {v4} from "uuid";
import {FeaturingProduct} from "./FeaturingProduct";
import arrowImage from '../../assets/featuring-arrow.png';
import Axios from "axios";



export default function Featuring() {
    const [products, setProducts] = useState([]);

    let featuringContainer = document.getElementsByClassName('container-wrap')[0];
    const scrollAmount = 1175;
    let autoScrollInterval;

    useEffect(() => {
        Axios.get('http://localhost:3001/api/all-books')
            .then(response => {
                shuffleArray(response.data);
                setProducts(response.data);

                featuringContainer = document.getElementsByClassName('container-wrap')[0];
                startAutoScroll()
            })
            .catch(response => {
                console.log(response)
            });

    }, [])

    function scrollLeft() {
        featuringContainer.scroll({left: featuringContainer.scrollLeft - scrollAmount, behavior: 'smooth'})
    }

    function scrollRight(scrollAmount, type) {
        featuringContainer.scroll({left: featuringContainer.scrollLeft + scrollAmount, behavior: type})
    }

    function stopAutoScroll() {
        // TODO: BUG: WON'T STOP!
        clearInterval(autoScrollInterval);
    }

    function startAutoScroll () {
        autoScrollInterval = setInterval(() => scrollRight(scrollAmount, 'smooth'), 8000);
    }


    return (
        <div className="featuring-wrap">
            <h1>Featuring (2022)</h1>

            <div className="featuring-product-container">
                <div onClick={scrollLeft} className="slider-previous-wrap">
                    <img className="previous-arrow" src={arrowImage} alt=">"/>
                </div>

                <div className="container-wrap">
                    {products.map(product => <FeaturingProduct product={product} key={v4()}/>)}
                </div>

                <div onClick={() => scrollRight(scrollAmount, 'smooth')} className="slider-next-wrap">
                    <img className="next-arrow" src={arrowImage} alt=">"/>
                </div>
            </div>
        </div>
    )
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}