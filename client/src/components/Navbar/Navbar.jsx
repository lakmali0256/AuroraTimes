import React from 'react';
import './Navbar.css';
import Search from '../../assets/Search.png';
import Cart from '../../assets/Cart.png';
import Acc from '../../assets/Account.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AuroraTime</div>
      <ul className="navbar-links">
        <li><a href="#" className="icon-hover">Men's</a></li>
        <li><a href="#" className="icon-hover">Women's</a></li>
        <li><a href="#" className="icon-hover">About Us</a></li>
        <li><a href="#" className="icon-hover">Contact Us</a></li>
      </ul>
      <div className='right'>
        <img src={Search} width={30} className="icon-hover"/>
        <img src={Acc} width={30} className="icon-hover"/>
        <img src={Cart} width={30} className="icon-hover"/>
      </div>
    </nav>
  );
}

export default Navbar;
