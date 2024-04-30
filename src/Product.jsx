import React, { useState,useContext } from 'react'
import { CartContext } from './App.jsx';

export const Product = ({ product}) => {
    const addCart = () => {
        setCart([...cart, product]);
    }
    const removeCart = () => {
        setCart(cart.filter((c) => c.id != product.id));
    }
    const {cart,setCart} =useContext(CartContext);
    return (
        <>
            <div className="item">
                <img draggable={"false"} src={product.img} alt="" />
                <p>{product.price}</p>
                {
                    cart.includes(product) ? (
                        <button onClick={removeCart} className='btnRemove'>Remove from cart</button>
                    ) : (
                        <button onClick={addCart}>Add to cart</button>
                    )
                }
            </div>
        </>
    )
}


export default Product;