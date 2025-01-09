import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For getting product ID from the URL
import axiosInstance from "../../axiosInstance"; // Assuming you have an axiosInstance for API calls
import "./SingleProductPage.css"; // You can style this page as needed

const SingleProductPage = () => {
  const [product, setProduct] = useState(null); // State to hold product data
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(""); // For error state
  const { id } = useParams(); // Get product ID from URL

  // Hardcoded description and reviews for now
  const hardcodedDescription = `This is a high-quality product that ensures durability and style. It's perfect for both casual and formal occasions, with versatile usage and sleek design. Ideal for people who value elegance and functionality.`;
  const hardcodedReviews = [
    { name: "John Doe", rating: 5, comment: "Amazing product! Worth every penny." },
    { name: "Jane Smith", rating: 4, comment: "Good quality, but the size didn't fit me well." },
    { name: "Alice Brown", rating: 3, comment: "It's okay, but I expected more for the price." }
  ];

  // Fetch the product details based on the ID
  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`); // Fetch product by ID
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load product details. Please try again later.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle add to cart functionality (this is a placeholder function)
  const handleAddToCart = () => {
    alert("Product added to cart!"); // Replace with actual cart logic
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="single-product-page">
      <p>Watches/Collection/{product.Category}/{product.Name}</p>

      {product && (
        <div className="product-details">
          <div className="product-image">
            <img
              src={`http://127.0.0.1:8000/storage/${product.image}`} // Assuming image is stored in public/storage
              alt={product.Name}
              width="300" // Adjust the width as needed
            />
          </div>

          <div className="product-info">
            <h2>{product.Name}</h2>
            <p><strong></strong> {product.model}</p>
            <p><strong></strong> {hardcodedDescription}</p>
            <p><strong>Price:</strong> ${product.Price}</p>
            <p><strong>Discount Price:</strong> ${product.Price - product.Price * product.Discount / 100}</p>
            <p><strong>Discount:</strong> {product.Discount}%</p>

            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}

      <div className="reviews-section">
        <h3>Customer Reviews</h3>
        {hardcodedReviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>{review.name}</strong> - Rating: {review.rating} stars</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProductPage;
