import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [addCart, setAddCart]= useState([]);

    useEffect( ()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const setOrder = (product) =>{
        const newOrder= [...addCart, product]
        setAddCart(newOrder);
    }

    return (
        <div className='shopin-card'>
           <div className='all-product-section'>
                {
                    products.map(product=> <SingleProduct 
                        key ={product.id} 
                        product ={product} 
                        setOrder={setOrder}></SingleProduct>)
                }
           </div>
           <div>
               <h1>Order sectin : {addCart.length}</h1>
           </div>
        </div>
        
    );
};

export default AllProduct;