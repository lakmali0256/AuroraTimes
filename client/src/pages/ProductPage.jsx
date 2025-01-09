import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import ProductCard from "../components/product_cart/ProductCard";
import axiosInstance from "../axiosInstance";  // Assuming you have an axiosInstance file set up

const ProductPage = () => {
  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: 1000,
    sort: "newest",
  });
  const [products, setProducts] = useState([]);  // Store fetched products
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState("");  // Track errors

  // Fetch products from the backend when component mounts or filters change
  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products", {
          params: {
            category: filters.category !== "all" ? filters.category : "",
            maxPrice: filters.maxPrice,
            sort: filters.sort,
          },
        });
        setProducts(response.data);  // Set the fetched products
        setLoading(false);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);  // Run this effect when filters change

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Determine Banner Content
  const getBannerTitle = () => {
    if (filters.category === "men") return "Men's Collection";
    if (filters.category === "women") return "Women's Collection";
    return "All Products";
  };

  const getBannerSubtitle = () => {
    if (filters.category === "men")
      return "Explore timeless elegance and innovative craftsmanship for men.";
    if (filters.category === "women")
      return "Discover stunning designs crafted exclusively for women.";
    return "Browse our exquisite collection for everyone.";
  };

  return (
    <div className="product-page">
      {/* Banner Section */}
      <div className="banner">
        <h1>{getBannerTitle()}</h1>
        <p>{getBannerSubtitle()}</p>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filter-item">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" value={filters.category} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="men">Men's</option>
            <option value="women">Women's</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="sort">Sort By:</label>
          <select name="sort" id="sort" value={filters.sort} onChange={handleFilterChange}>
            <option value="newest">Newest</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Display Loading or Error */}
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {/* Product Grid */}
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
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
          ))
        ) : (
          <p className="no-products">No products match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
