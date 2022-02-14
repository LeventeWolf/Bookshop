import React, {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {
    ActionsContainer, BasketButton,
    Container,
    DescriptionContainer,
    Main,
    PageTitle, ProductAuthor,
    ProductContainer,
    ProductImage, ProductPrice, ProductTitle, ProductType, Section, WishlistButton
} from "../styles/Component.styles";
import Axios from "axios";
import {numberWithSpaces, shuffleArray} from "../lib/helper";
import {v4} from "uuid";
import '../styles/relatedProducts.scss'
import {addProductToBasket} from "../redux/actions/basketActions";
import {FeaturingProduct} from "./home/Featuring";


export default function ProductPage() {
    const product = useSelector(state => state.product);

    return (
        <Main>
            <div id="product-page">
                <PageTitle>Product Details</PageTitle>

                {Object.keys(product).length !== 0 ?
                    <>
                        <Product product={product}/>

                        <RelatedProducts />
                    </>
                        :
                    'Please select a product!:)'
                }
            </div>
        </Main>
    );
};

function Product( {product} ) {
    const dispatch = useDispatch();
    const isMember = useSelector(state => state.user.isMember);

    return (
        <Container h={'500px'}>
            <ProductContainer style={{height: 400}}>
                <ProductImage w={'280px'} src={product.imageUrl} alt="productImage"/>

                <DescriptionContainer>
                    <Section borderBottom>
                        <ProductTitle fontSize='20pt'>{product.longTitle}</ProductTitle>
                    </Section>

                    <Section style={{marginBottom: 'auto', marginTop: '40px'}}>
                        <ProductType>{product.type}</ProductType>
                        <ProductAuthor>By (author): {product.author}</ProductAuthor>
                    </Section>

                    <Section style={{marginBottom: '20px'}}>
                        <ProductAuthor>{product.description}</ProductAuthor>
                    </Section>

                </DescriptionContainer>

            </ProductContainer>

            <ActionsContainer style={{width: 400, marginLeft: 'auto'}}>
                <Section borderBottom style={{marginBottom: 'auto'}}>
                    <div className="price-container-row">
                        {isMember ?
                            <h3 className="original-price" style={{fontSize: 17}}>{numberWithSpaces(isMember ? product.price : '')} Ft</h3>
                            : null
                        }

                        <h2 className="product-price" style={{fontSize: 25}}>
                            {numberWithSpaces(isMember ? Math.round(product.price * 0.9) : product.price)} Ft
                        </h2>
                    </div>
                </Section>

                <Section style={{gap: '10px'}}>
                    <BasketButton w={300} h={40} onClick={() => dispatch(addProductToBasket(product))}>Add to basket</BasketButton>
                    <WishlistButton w={300} h={40} onClick={() => dispatch(addProductToBasket(product))}>Add to wishlist</WishlistButton>
                </Section>
            </ActionsContainer>
        </Container>
    )
}

function RelatedProducts() {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/all-books')
            .then(response => {
                shuffleArray(response.data);
                setRelatedProducts(response.data.splice(0, 6));
            })
            .catch(response => {
                console.log(response)
            });
    }, [])

    console.log(relatedProducts)

    return (
        <div style={{marginTop: 30}}>
            <h2 className="secondary-title">People who bought this also bought</h2>

            <div className="related-wrap">
                <div className="related-products-container">
                    {relatedProducts.map(product => <FeaturingProduct product={product} key={v4()}/>)}
                </div>
            </div>
        </div>
    )
}