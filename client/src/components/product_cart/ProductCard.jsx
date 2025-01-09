import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ProductCard.css';

const ProductCard = ({ id, title, model, price, discount, isNew, imageUrl }) => {
  return (
    <div className="single-product">
      <div className="part-1">
        {/* Link the product to the Single Product Page */}
        <Link to={`/product/${id}`} className="product-link">
          <img src={imageUrl} alt={title} className="product-image" />
        </Link>
        {discount && <div className="discount">{discount}% OFF</div>}
        {isNew && <div className="new">New</div>}
      </div>
      <div className="part-2">
        <h4 className="product-title">{title}</h4>
        {discount > 0 && <span className="product-old-price">{price}</span>}
        <span className="product-price">{price - price * discount / 100}</span>
      </div>
      <div>
        <button className='button'>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
