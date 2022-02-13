import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
    Basket,
    Books, Films, Footer,
    Header,
    HeaderSecondary,
    Home,
    Join,
    Navigation,
    ProductPage,
    Profile, Songs,
    Wishlist
} from "./components";
import React from "react";

import "./index.scss";

document.body.style.backgroundColor = '#F0F0F0';


export default function App(){
    return (
        <Router>
            <Navigation/>
            <Header/>
            <HeaderSecondary/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Join" element={<Join/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/product/:productName" element={<ProductPage/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Books" element={<Books/>}/>
                <Route path="/Films" element={<Films/>}/>
                <Route path="/Songs" element={<Songs/>}/>
            </Routes>

            <Footer/>
        </Router>
    )
}