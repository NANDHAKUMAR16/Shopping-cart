import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
import { CartContext } from './App';

export const Header = () => {
    const {cart,setCart} =useContext(CartContext);
    return (
        <>
            <div className="navbar">
                <div className="logo">Food cart</div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <span className='span'>{cart.length}</span>
                        <Link to={"/cart"}>View cart</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;
