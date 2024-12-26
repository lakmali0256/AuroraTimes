import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
    <div class="footer-container">
      <div class="footer-left">
        <p>&copy; AuroraTimes. All Rights Reserved.</p>
        <p>Email: contact@auroratimes.com | Phone: +94 767 752 888</p>
      </div>
      
      <div class="footer-middle">
        <ul class="quick-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
        
        <ul class="social-links">
          <li><a href="https://facebook.com/leafgreen">Facebook</a></li>
          <li><a href="https://instagram.com/leafgreen">Instagram</a></li>
          <li><a href="https://twitter.com/leafgreen">Twitter</a></li>
        </ul>
      </div>
  
      <div class="footer-right">
        
  
        <a href="https://maps.google.com" class="find-us">Find Us</a>
      </div>
    </div>
  
   
  </footer>
  

  )
}

export default Footer