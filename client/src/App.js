import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
    Basket,
    Header,
    HeaderSecondary,
    Home,
    Logout,
    Join,
    Navigation,
    ProductPage,
    Profile,
    TemplatePage,
    Wishlist
} from "./components";
import React from "react";

import "./styles/index.scss";
import Books from "./components/products/Books";
import Films from "./components/products/Films";
import Songs from "./components/products/Songs";


export default function App(){
    document.body.style.backgroundColor = '#F0F0F0';

    return (
        <Router>
            <Navigation/>
            <Header/>
            <HeaderSecondary/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Join" element={<Join/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Logout" element={<><Logout/><Join/></>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/product/:id/:productTitle" element={<ProductPage/>}/>

                {/* TemplatePages */}
                <Route path="/wishlist" element={<Wishlist />}/>
                <Route path="/Books" element={<Books/>}/>
                <Route path="/Films" element={<Films/>}/>
                <Route path="/Songs" element={<Songs/>}/>
                <Route path="/Bestsellers" element={<TemplatePage name={'Bestsellers'} api={'bestsellers'}/>}/>
            </Routes>

            {/*<Footer/>*/}
        </Router>
    )
}