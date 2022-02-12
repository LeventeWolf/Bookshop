import React from "react";
import {useDispatch} from "react-redux";
import {addProductToBasket} from "../../redux/actions/basketActions";
import {
    BasketButton,
    DescriptionContainer,
    ProductAuthor, ProductContainer,
    ProductImage,
    ProductPrice,
    ProductTitle
} from "../Component.styles";

export default function Product( {product} ) {
    const dispatch = useDispatch();

    return (
        <ProductContainer>
            <ProductImage w={250} src={product.imageUrl} alt="productImage"/>

            <DescriptionContainer>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductAuthor>{product.author}</ProductAuthor>
                <ProductPrice>{numberWithSpaces(product.price)} Ft</ProductPrice>
                <BasketButton w={200} h={30} onClick={() => dispatch(addProductToBasket(product))}>Add to basket</BasketButton>
            </DescriptionContainer>
        </ProductContainer>
    )
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}