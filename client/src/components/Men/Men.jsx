import React, { useEffect, useState } from 'react';
import './Men.css';
import ProductCard from '../product_cart/ProductCard';
import axiosInstance from '../../axiosInstance';

const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the latest products from the backend using axiosInstance
    axiosInstance.get('/products/latest/men')  // Endpoint for getting the latest products
      .then(response => {
        setProducts(response.data);  // Set the products from the response
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);  // Empty array means this runs once when the component mounts

  return (
    <section className="section-products pad">
      <div className="container">
        <div className="header">
          <h3>Popular Collection</h3>
          <h2>Men's Watches</h2>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.Name}
              oldPrice={product.oldPrice}
              price={product.Price}
              discount={product.Discount}
              isNew={product.isNew}
              imageUrl={`http://127.0.0.1:8000/storage/${product.image}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Men;
