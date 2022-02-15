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

    return (
        <Button style={style} onClick={() => dispatch(addProductToBasket(product))}>
            {children}
        </Button>
    )
}