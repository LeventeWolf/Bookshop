import React, {useEffect, useState} from "react";
import '../../styles/featuring.scss';
import {v4} from "uuid";
import arrowImage from '../../assets/featuring-arrow.png';
import Axios from "axios";
import {ProductSM} from "../templates/TemplateProducts";


export default function Featuring() {
    const [products, setProducts] = useState([]);

    let featuringContainer = document.getElementsByClassName('container-wrap')[0];
    const scrollAmount = 1185;
    let autoScrollInterval;

    useEffect(() => {
        Axios.get('http://localhost:3001/api/all-books')
            .then(response => {
                // shuffleArray(response.data);
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
                    {products.map(product => <ProductSM product={product} key={v4()}/>)}
                </div>

                <div onClick={() => scrollRight(scrollAmount, 'smooth')} className="slider-next-wrap">
                    <img className="next-arrow" src={arrowImage} alt=">"/>
                </div>
            </div>
        </div>
    )
};
