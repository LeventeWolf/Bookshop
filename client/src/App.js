import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
    Basket,
    Footer,
    Header,
    HeaderSecondary,
    Home,
    Join,
    Navigation,
    ProductPage,
    Profile,
    TemplatePage
} from "./components";
import React from "react";

import "./styles/index.scss";

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
                <Route path="/wishlist" element={<TemplatePage name={'Wishlist'}/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/product/:productName" element={<ProductPage/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Books" element={<TemplatePage name={'Books'}/>}/>
                <Route path="/Films" element={<TemplatePage name={'Films'}/>}/>
                <Route path="/Songs" element={<TemplatePage name={'Songs'}/>}/>
            </Routes>

            <Footer/>
        </Router>
    )
}