import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header/index'
import Menu from '../pages/Menu/index'
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Hero from '../components/Hero/index'


function Router() {

    return (
        <>
            <Header />
            <Hero />
            <Menu />
        
            <Routes>
                <Route exact path="/" element={ <Menu />} />
                <Route exact path="/:filter?" element={ <Menu />} />
                
                <Route exact path="/checkout" element={ <Checkout />} />
                <Route exact path="/orders" element={ <Orders />} />
            </Routes >
        </>
    )
}

export default Router