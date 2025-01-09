// LoginForm.js
import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance'; // Import the Axios instance
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    try {
      const response = await axiosInstance.post('/login', formData);

      // Store the token and user data in localStorage
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Determine user role and redirect accordingly
      const userRole = response.data.user.user_type; // Adjust this based on your backend response

      if (userRole === 'admin') {
        navigate('/admin'); // Redirect to admin dashboard
      } else {
        navigate('/'); // Redirect to homepage or user dashboard
      }
    } catch (error) {
      // Handle errors
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">
          Welcome to <span className="gold">AuroraTime</span>
        </h2>
        <p className="form-subtitle">Log in to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
        <div className="form-footer">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
