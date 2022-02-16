import React, {useEffect, useState} from "react";

import {
    Main,
    PageTitle
} from "../../styles/Component.styles";
import Axios from "axios";
import {uuid} from "uuidv4";


export default function Wishlist( ) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/wishlist?username`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(response => {
                console.log(response)
            })
    }, [])


    return (
        <Main>
            <div id="product-page">
                <PageTitle>{name}</PageTitle>

                {products.map(product => <TemplateProduct product={product} key={uuid()}/>)}
            </div>
        </Main>
    );
};
