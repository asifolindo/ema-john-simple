import React, { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {




    const [products, setProducts] = useState([]);

        const handleAddProduct = (product) =>{
            const newCart = [...cart, product];
            setCart(newCart);
        }
const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            },);
    }, [])


    const first10 = products.slice(0, 10);
    console.log(first10);
    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(pd => <Products 
                        handleAddProduct = {handleAddProduct}
                        product={pd}></Products>)
                }

            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>


        </div>
    );
};

export default Shop;