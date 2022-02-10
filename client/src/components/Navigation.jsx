import React from "react";
import {NavLink} from "react-router-dom";
import './navigation.scss'

function Navigation() {
    return (
        <div className="nav-wrap">
            <nav id='mainNav' className="navbar navbar-expand navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand js-scroll-trigger">

                    </a>

                    <ul className="navbar-nav ml-auto text-uppercase">
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink className="nav-link" to="/wishlist">
                                Wishlist
                            </NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <NavLink className="nav-link" to="/join">
                                Sign in/Join
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;