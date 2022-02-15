import React from "react";
import {useDispatch} from "react-redux";
import {addProductToBasket} from "../../redux/actions/basketActions";
import styled from "styled-components";

export const Button = styled.button`
  width: ${props => props.w};
  height: ${props => props.h};

  border-radius: 5px;

  background-color: #0cceeb;
  color: white;
  font-size: 11pt;
  font-weight: bold;
  font-family: Roboto, sans-serif;

  transition: all .3s;

  &:hover {
    filter: brightness(108%);
  }
`;

export default function BasketButton ( {children, product, style} ) {
    const dispatch = useDispatch();

    function handleAddProductToBasket() {
        dispatch(addProductToBasket(product));
        console.log('Adding product to basket!');
        cacheProducts();
    }

    /**
     * Store basket products in localStorage
     */
    function cacheProducts() {
        // If cached basket is empty create new with the product
        if (localStorage.basket === undefined) {
            localStorage.setItem('basket', JSON.stringify([product]))
            return;
        }

        // Append product to cached products
        const cachedProducts = JSON.parse(localStorage.basket);

        // If product already there, increase quantity
        for (const cachedProduct of cachedProducts) {
            if (cachedProduct.title === product.title) {
                cachedProduct.quantity++;
                localStorage.basket = JSON.stringify(cachedProducts);
                return;
            }
        }

        // Store product
        cachedProducts.push(product);
        localStorage.basket = JSON.stringify(cachedProducts);
    }

    return (
        <Button style={style} onClick={handleAddProductToBasket}>
            {children}
        </Button>
    )
}