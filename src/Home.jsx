import React, { useContext, useState } from 'react';
import data from "./data.json";
import "./Home.css"
import { Product } from './Product.jsx';
export const Home = () => {
    return (
        <div className='container'>
            {
                data.map((product, index) => (
                    <Product key={index} product={product} />
                ))
            }
        </div>
    );
}

export default Home;

