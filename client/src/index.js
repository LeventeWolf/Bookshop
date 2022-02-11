import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigation, Header, HeaderSecondary, Footer, Home, Join} from "./components";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
    <ChakraProvider>
        <Router>
            <Navigation/>
            <Header/>
            <HeaderSecondary/>
  
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/join" element={<Join/>}/>
            </Routes>

            <Footer/>
        </Router>
    </ChakraProvider>,

    document.getElementById("root")
);
