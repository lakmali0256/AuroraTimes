import React from 'react'
import './ProductCard.css'

function ProductCard({id,image, availability, price, disprice, description}) {
    const handleClick = () => { 
    };
  return (
    <div className='product-card-cont'>
        <div className='card-image-container'>
            <div className='card-header'>
                <p className="title">{availability}</p>
                <div>
                    <button className="card-btn-on-image">+</button>
                </div>
            </div>
            <img src={image} alt='product' className='p-image'/>     
        </div>
        <div className='card-desc ' onClick={handleClick}>
            {description}
        </div>
        <div className='price-list' onClick={handleClick}>
            <span className='dis-price'>{disprice}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
  )
}

export default ProductCard