import React from "react";
import '../styles/headerSecondary.scss';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {numberOfProducts, numberWithSpaces, sumOfProducts} from "../lib/helper";
import basketIcon from '../assets/basketIcon.svg'

function HeaderSecondary() {
    const basket = useSelector(state => state.basket)
    const user = useSelector(state => state.user);

    return (
        <div className="header-secondary-wrap">
            <div className="header-secondary-primary-wrap">
                <ul>
                    <li>
                        <a>Shop by category</a>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/bestsellers">Bestsellers</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/songs">Songs</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/films">Films</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/books">Books</NavLink>
                    </li>
                </ul>

                <div className="right-section">
                    <div className="total">
                        {numberWithSpaces(sumOfProducts(basket, user.isMember))} Ft
                    </div>

                    <div className="line"/>

                    <div className="basket-wrap">
                        <NavLink className="navlink" to="/basket">
                            <span>{numberOfProducts(basket)}</span>
                            <img src={basketIcon} className="basket-icon" alt="B"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HeaderSecondary;
