import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav id='mainNav' className="navbar navbar-expand navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand js-scroll-trigger">
                    <img src={'https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.14/img/logo.svg'} alt="Logo" width={'120px'}/>
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
    );
}

export default Header;
