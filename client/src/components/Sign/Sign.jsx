import React, { useState } from "react";
import axiosInstance from "../../axiosInstance"; // Import the axiosInstance
import "./Sign.css";

const SignupForm = () => {
  // State to manage form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const [loading, setLoading] = useState(false); // For loading state

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Basic validation: check if passwords match
    if (password !== password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true); // Show loading state

    // Prepare the data for the POST request
    const data = {
      name,
      email,
      password,
      password_confirmation
    };

    try {
      // Send a POST request to the backend using axiosInstance
      const response = await axiosInstance.post("/register", data); // Use the correct API endpoint
      
      // Handle successful registration (for example, redirect to login page or show success message)
      console.log("Registration Successful:", response.data);
      setLoading(false); // Hide loading state

      // Redirect to login page or show success message
      window.location.href = "/login"; // Example of redirecting
    } catch (error) {
      setLoading(false); // Hide loading state
      setError(error.response?.data?.message || "An error occurred"); // Display error message
      console.error("Registration Error:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="form-title">
          Join <span className="gold">AuroraTime</span>
        </h2>
        <p className="form-subtitle">Create your account</p>

        {/* Show error if there is any */}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={password_confirmation}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="form-footer">
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
