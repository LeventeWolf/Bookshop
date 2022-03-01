import React from "react";
import '../styles/headerSecondary.scss';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {numberOfProducts, numberWithSpaces, sumOfProducts} from "../lib/helper";
import basketIcon from '../assets/basketIcon.svg'
import Odometer from 'react-odometerjs';
import "odometer/themes/odometer-theme-default.css";

function HeaderSecondary() {
    const basket = useSelector(state => state.basket)
    const user = useSelector(state => state.user);

    return (
        <div className="header-secondary-wrap">
            <div className="header-secondary-primary-wrap">
                <ul>
                    <li>
                        <span>Shop by category</span>
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
                        {/*{numberWithSpaces(sumOfProducts(basket))} Ft*/}
                        <Odometer animation="count" format="( ddd)" duration={500} value={sumOfProducts(basket)}/> Ft
                    </div>

                    <div className="line"/>

                    <div className="basket-wrap">
                        <NavLink className="navlink" to="/basket">
                            {/*{numberWithSpaces(numberOfProducts(basket))}*/}
                            <Odometer format="d" duration={200} value={numberOfProducts(basket)}/>
                            <img src={basketIcon} className="basket-icon" alt="B"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HeaderSecondary;
