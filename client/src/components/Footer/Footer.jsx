import React from 'react';
import './Footer.css';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
      <div className="footer-contact">
  <div className="footer-contact-item">
    <FiPhone className="footer-icon" />
    <p>(+94) 71 123 8971</p>
  </div>
  <div className="footer-contact-item footer-contact-center">
    <FiMail className="footer-icon" />
    <p>hello@AuroraTimes.com</p>
  </div>
  <div className="footer-contact-item">
    <FiMapPin className="footer-icon" />
    <p>Colombo,Sri Lanka</p>
  </div>
</div>

      </div>

      <div className="footer-middle">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column subscribe">
          <h4>Subscribe</h4>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button>
              <FiArrowRight />
            </button>
          </div>
          <p>Get digital marketing updates in your mailbox</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>© 2024 AuroraTimes. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
