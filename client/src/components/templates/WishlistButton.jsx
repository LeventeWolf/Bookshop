import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProductToBasket} from "../../redux/actions/basketActions";
import styled from "styled-components";
import {
    handleAddProductToWishlist,
    handleRemoveProductFromWishlist,
    removeProductFromWishlist
} from "../../redux/actions/wishlistActions";
import {useAlert} from "react-alert";

export const WishlistButtonStyle = styled.button`
  border-radius: 5px;

  background-color: #f0f0f0;
  color: #666666;
  font-size: 11pt;
  font-family: Roboto, sans-serif;

  transition: all .3s;

  width: ${props => props.w + 'px'};
  height: ${props => props.h + 'px'};

  &:hover {
    background-color: #CECECE;
  }
`;

export default function WishlistButton ( {children, product, style, type} ) {
    const dispatch = useDispatch();
    const username = useSelector(state => state.user.username)
    const alert = useAlert();

    function addProductToWishlist() {
        dispatch(handleAddProductToWishlist(username, product))
            .then(response => {
                alert.success('Product added to wishlist!')
            })
            .catch(response => {
                alert.error('Something went wrong!');
                console.log(`[DISPATCH] ERROR IN: Adding product to wishlist!`)
                console.log(response)
            });
    }

    function removeProductFromWishlist() {
        dispatch(handleRemoveProductFromWishlist(username, product))
            .then(response => {
                alert.success('Product removed from wishlist!')
            })
            .catch(response => {
                alert.error('Something went wrong!');
                console.log(`[DISPATCH] ERROR IN: Removing product from wishlist!`)
                console.log(response)
            });
    }


    return (
        <WishlistButtonStyle style={style} onClick={type === 'remove' ? removeProductFromWishlist : addProductToWishlist}>
            {children}
        </WishlistButtonStyle>
    )
}