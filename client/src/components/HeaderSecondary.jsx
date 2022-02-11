import React from "react";
import './headerSecondary.scss';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

function HeaderSecondary() {
    const basket = useSelector(state => state.basket)

    let sum = 0;

    basket.forEach(product => {
        sum += product.price;
    })

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
                        {numberWithSpaces(sum)} Ft
                    </div>

                    <div className="line"/>

                    <div className="basket-wrap">
                        <span>{basket.length}</span>
                        <img className="basket-icon" src="https://image.flaticon.com/icons/png/512/68/68892.png"
                             alt="B"/>

                    </div>
                </div>
            </div>
        </div>
    );
}


function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default HeaderSecondary;
