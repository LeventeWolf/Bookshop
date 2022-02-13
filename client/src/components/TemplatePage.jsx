import React, {useEffect, useState} from "react";

import {
    BasketButton,
    Container,
    DescriptionContainer,
    Main,
    PageTitle, ProductAuthor,
    ProductContainer,
    ProductImage, ProductPrice, ProductTitle, ProductType, Section, WishlistButton
} from "../styles/Component.styles";
import Axios from "axios";
import {uuid} from "uuidv4";
import {numberWithSpaces} from "../lib/helper";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {select} from "../redux/actions/productActions";
import {addProductToBasket} from "../redux/actions/basketActions";


export default function TemplatePage( {name} ) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/all-books`)
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

function TemplateProduct( {product} ) {
    const dispatch = useDispatch();

    return (
        <Container style={{height: '200px'}}>
            <ProductContainer>
                <ProductImage w={'175px'} h={'180px'} src={product.imageUrl} alt="productImage"/>

                <DescriptionContainer>
                    <Section borderBottom>
                        <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                            <ProductTitle fontSize='18pt'>{product.longTitle}</ProductTitle>
                        </Link>
                    </Section>

                    <Section style={{marginBottom: 'auto', marginTop: '40px'}}>
                        <ProductType>{product.type}</ProductType>
                        <ProductAuthor>By (author): {product.author}</ProductAuthor>
                    </Section>

                    <Section style={{marginBottom: '20px'}}>
                        <ProductAuthor>{product.description}</ProductAuthor>
                    </Section>

                </DescriptionContainer>


                <Section style={{marginLeft: '50px', width: '200px'}}>
                    <Section borderBottom style={{marginBottom: 'auto'}}>
                        <ProductPrice fontSize='22pt'>{numberWithSpaces(product.price)} Ft</ProductPrice>
                    </Section>

                    <Section style={{gap: '10px'}}>
                        <BasketButton w={200} h={40} onClick={() => dispatch(addProductToBasket(product))}>Add to basket</BasketButton>
                        <WishlistButton w={200  } h={40} onClick={() => dispatch(addProductToBasket(product))}>Add to wishlist</WishlistButton>
                    </Section>
                </Section>
            </ProductContainer>

        </Container>
    )
}