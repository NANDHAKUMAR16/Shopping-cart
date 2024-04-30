import React, { useState, createContext } from 'react'
import "./App.css"
import { Header } from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from "./Cart.jsx";
import Home from './Home.jsx';
export const CartContext = createContext();
export const App = () => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <BrowserRouter>
                <div className="header">
                    <Header />
                </div>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/cart' element={<Cart />}> </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContext.Provider>
    )
}

export default App;