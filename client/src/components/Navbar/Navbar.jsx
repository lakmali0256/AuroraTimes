import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Search from "../../assets/Search.png";
import Cart from "../../assets/Cart.png";
import Acc from "../../assets/Account.png";
import x from "../../assets/x.png";

function Navbar() {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleSearch = () => {
    setInputVisible(!isInputVisible);
  };

  // Check if the user is logged in by verifying the presence of the auth token
  const isLoggedIn = !!localStorage.getItem('authToken');

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/products" className="icon-hover">
              Men's
            </Link>
          </li>
          <li>
            <Link to="#" className="icon-hover">
              Women's
            </Link>
          </li>
        </ul>
        <div className="navbar-logo">
          <Link to='/' className="logo">Aurora<span className="gold">Time</span></Link>
        </div>
        <div className="right">
          <img src={Search} width={30} className="icon-hover" onClick={toggleSearch} alt="search" />
          {/* Conditionally render the link based on login status */}
          {isLoggedIn ? (
            <Link to='/profile'>
              <img src={Acc} width={30} className="icon-hover" alt="profile" />
            </Link>
          ) : (
            <Link to='/login'>
              <img src={Acc} width={30} className="icon-hover" alt="login" />
            </Link>
          )}
          <Link to='/cart'>
            <img src={Cart} width={30} className="icon-hover" alt="cart" />
          </Link>
        </div>
      </nav>
      {isInputVisible && (
        <div className="search-bar">
          <img src={Search} width={30} className="magni" alt="search" />
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            autoFocus
          />
          <img src={x} width={20} className="close-icon" onClick={toggleSearch} alt="close" />
        </div>
      )}
    </>
  );
}

export default Navbar;
