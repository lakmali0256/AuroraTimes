import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosInstance"; // Assuming you have an axiosInstance for API calls
import { useNavigate } from "react-router-dom"; // For navigation to login page after logout
import "./AdminProductPage.css"; // Assuming you have styles for the page

const AdminProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingProduct, setEditingProduct] = useState(null); // For update form
  const navigate = useNavigate(); // Hook for navigation

  // Fetch all products from the backend
  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products"); // Endpoint to get all products
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle delete product
  const handleDeleteProduct = async (productId) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      try {
        await axiosInstance.delete(`/products/${productId}`); // Endpoint to delete product
        setProducts(products.filter((product) => product.id !== productId)); // Update state after delete
      } catch (error) {
        setError("Failed to delete the product. Please try again.");
      }
    }
  };

  // Handle update product without changing the image
  const handleUpdateProduct = async () => {
    if (editingProduct) {
      const { id, Name, Category, Price, Discount } = editingProduct;

      // Create an object with updated data excluding the image
      const updatedProduct = { Name, Category, Price, Discount };

      try {
        await axiosInstance.put(`/products/${id}`, updatedProduct); // Endpoint to update product
        setEditingProduct(null); // Reset editing mode
        setError("");
        setLoading(true);
        const response = await axiosInstance.get("/products"); // Fetch updated products
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to update the product. Please try again.");
      }
    }
  };

  // Handle changes in the update form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  // Handle logout
  const handleLogout = () => {
    // Clear any stored session or authentication data
    localStorage.removeItem("authToken"); // Example: remove token from local storage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="admin-product-page">
      {/* Banner Section */}
      <div className="admin-header">
        <h1>Admin Dashboard - Products</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      {/* Display Error or Loading */}
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {/* Display Products */}
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.Name}</td>
                  <td>{product.Category}</td>
                  <td>${product.Price}</td>
                  <td>{product.Discount}%</td>
                  <td>
                    <img
                      src={`http://127.0.0.1:8000/storage/${product.image}`} // Assuming image is stored in public/storage
                      alt={product.name}
                      width="50" // Adjust the width as needed
                    />
                  </td>
                  <td>
                    <button onClick={() => setEditingProduct(product)}>Edit</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h2>Edit Product</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editingProduct.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={editingProduct.category}
                onChange={handleChange}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={editingProduct.price}
                onChange={handleChange}
              />
            </label>
            <label>
              Discount:
              <input
                type="number"
                name="discount"
                value={editingProduct.discount}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleUpdateProduct}>Save</button>
            <button onClick={() => setEditingProduct(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductPage;
