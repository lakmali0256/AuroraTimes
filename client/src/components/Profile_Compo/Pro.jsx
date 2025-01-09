import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance'; // Adjust the import path as needed
import './Pro.css'; // Import CSS for styling

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/logout');
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (!user) {
    return <p>Loading user information...</p>;
  }

  return (
    <div className="user-profile">
      <div className="profile-container">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="profile-image"
        />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
