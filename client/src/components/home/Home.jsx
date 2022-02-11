import React from "react";
import './home.scss';
import Bestsellers from "./Bestsellers";
import Featuring from "./Featuring";
import Supply from "./Supply";

import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "../../redux/actions/counterActions";

function Home() {
    return (
        <div className="main-wrap">
            <div className="grid-container">
                <Bestsellers />
                <Featuring />
                <Supply />
            </div>
        </div>
    );
}

export default Home;
