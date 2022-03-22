import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    console.log(props)
    // const {setOrder}= props.product;
    const{name, img, price, seller, ratings, id}= props.product;
    return (
        <div className='single-product-section'>
            <img src={img} alt="product-img" />
            <div className='single-product-text'>
                <p>Name : <small>{name}</small></p>
                <p>Price : <small>${price}</small></p>
                <p>Seller : <small>{seller}</small></p>
                <p>Ratings : <small>{ratings} star</small></p>
            </div>
            <button  onClick={()=>props.setOrder(props.product)} className='add-product-btn'>
                <p>Add prodct</p>
            </button>
        </div>
    );
};

export default SingleProduct;