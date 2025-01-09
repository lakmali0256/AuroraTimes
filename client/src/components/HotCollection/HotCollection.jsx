import React, { useState, useEffect } from 'react';
import './HotCollection.css';
import ProductCard from '../product_cart/ProductCard';
import axiosInstance from '../../axiosInstance'; // Import axiosInstance

const HotCollection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the latest products from the backend using axiosInstance
    axiosInstance.get('/products/latest')  // Endpoint for getting the latest products
      .then(response => {
        setProducts(response.data);  // Set the products from the response
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);  // Empty array means this runs once when the component mounts

  return (
    <section className="section-products">
      <div className="container">
        <div className="header">
          <h3>Hot Collection</h3>
          <h2>Popular Products</h2>
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

export default HotCollection;
