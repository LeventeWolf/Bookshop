import React, {useEffect} from "react";
import '../../styles/home.scss';
import Bestsellers from "./Bestsellers";
import Featuring from "./Featuring";
import Supply from "./Supply";


function Home() {
    useEffect(() => {
        document.title = "Bookshop"
    }, []);

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
