import React from "react";
import './headerSecondary.scss';
import {NavLink} from "react-router-dom";

function HeaderSecondary() {
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
                        0 Ft
                    </div>

                    <div className="line"></div>


                    <div className="basket-wrap">
                        <span>0</span>
                        <img className="basket-icon" src="https://image.flaticon.com/icons/png/512/68/68892.png"
                             alt="B" />

                    </div>
                </div>
            </div>
        </div>
    );
}


export default HeaderSecondary;
