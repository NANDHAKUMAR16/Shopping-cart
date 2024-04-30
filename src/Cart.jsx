import React, { useEffect, useState, useContext } from 'react'
import "./Cart.css";
import oops from "./assets/oops.avif";
import { CartContext } from './App.jsx';

export const Cart = () => {
    const [total, setTotal] = useState(0);
    const { cart, setCart } = useContext(CartContext);
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0))
    }, [cart])
    const removeFromCart = (productToRemove) => {
        console.log(cart);
        const updatedCart = cart.filter(product => product !== productToRemove);
        setCart(updatedCart);
    }
    return (
        <>
            <div className="cart-container">
                {
                    cart.map((product,index) => (
                        <div className="cart-product" key={index}>
                            <div className="img">
                                <img src={product.img} alt="image" />
                            </div>
                            <div className="cart-product-details">
                                <p>${product.price}</p>
                            </div>
                            <div className="btn">
                                <button onClick={() => removeFromCart(product)}>Remove</button>
                            </div>
                        </div>
                    ))
                }
                {(cart.length > 0) ? <h2 cart-amout>Total amount $ {total}</h2> : <img style={{ width: "98vw", height: "40vw", display: "flex", justifyContent: "center" }} src={oops} />}
            </div>
        </>
    )
}

export default Cart;
