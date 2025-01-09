import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import './Add_Product.css';

function AddProduct() {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    description: '',
    model: '',
    price: '',
    discount: '',
    main_image: null,
    additional_images: [null, null, null],
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'main_image') {
      setProductData({ ...productData, main_image: files[0] });
    } else {
      const index = parseInt(name.split('-')[1], 10);
      const updatedImages = [...productData.additional_images];
      updatedImages[index] = files[0];
      setProductData({ ...productData, additional_images: updatedImages });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('Name', productData.name);
    formData.append('Category', productData.category);
    formData.append('Description', productData.description);
    formData.append('model', productData.model);
    formData.append('Price', productData.price);
    formData.append('Discount', productData.discount);
    formData.append('Quantity', productData.quantity);

    if (productData.main_image) {
      formData.append('main_image', productData.main_image);
    }

    productData.additional_images.forEach((image, index) => {
      if (image) {
        formData.append(`additional_image-${index}`, image);
      }
    });

    try {
      const response = await axiosInstance.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Product added successfully:', response.data);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };
  return (
    <div className="add-product-container">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            name="model"
            value={productData.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Discount (%)</label>
          <input
            type="number"
            name="discount"
            value={productData.discount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Main Image</label>
          <input
            type="file"
            name="main_image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Additional Images</label>
          {[0, 1, 2].map((index) => (
            <input
              key={index}
              type="file"
              name={`additional_image-${index}`}
              accept="image/*"
              onChange={handleFileChange}
            />
          ))}
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
