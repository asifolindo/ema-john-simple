import React from 'react';
import './Products.css';

const Products = (props) => {

    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{props.product.name}</h4>
                <br />
                <p><small>By:{props.product.seller}</small></p>
                <br />
                <p>${props.product.price}</p>
                <br />
                <p><small>Only {props.product.stock} left in stock - Order soon</small></p>
                <button 
                onClick={() => props.handleAddProduct(props.product)}
                className='main-button'>add to cart</button>
            </div>

        </div>
    );
};

export default Products;