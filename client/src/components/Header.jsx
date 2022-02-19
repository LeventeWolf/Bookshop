import React from "react";
import '../styles/header.scss';
import {NavLink} from "react-router-dom";
import Axios from "axios";

function Header() {
    function handleSearch() {
        Axios.get(`http://localhost:3001/api/test/`)
            .then(response => {
                console.log(response.data.rows)
            }).catch(response => {
                console.log(response)
            })
    }

    return (
        <div className="header-wrap">
            <header className="header">
                <div className="primary-wrap">
                    <div className="brand-wrap">
                        <h1>
                            <NavLink to="/" className="brand-link">
                                <img src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.14/img/logo.svg"
                                     alt="Bookdepository.com"/>
                            </NavLink>
                        </h1>
                    </div>

                    <div className="search-wrap">
                        <img
                            src="https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640"
                            alt="go" className="search-icon"/>

                        <input type="text" placeholder="Search for books by keyword / title / author / ISBN"
                               name="search"
                               className="text-input"/>

                        <button onClick={handleSearch} aria-label="Search" className="header-search-btn" type="submit">
                            <span className="text">Search</span>
                        </button>

                        <button aria-label="Search" className="header-advanced-search-btn" type="submit">
                            <span>Advanced Search</span>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}


export default Header;
