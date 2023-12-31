import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelop,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    //console.log(props);
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                
                <p><small> Only {stock} left in stock - Order soon!</small></p>
                <button 
                onClick={() => props.handleAddProduct(props.product)}
                className="main-button"
                >
                    <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon> add to cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;