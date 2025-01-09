import React from 'react';
import './Hero.css';
import { FiArrowRight } from 'react-icons/fi'; // Arrow icon
import WatchImage from '../../assets/1.webp'; // Replace with your watch image

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Timeless elegance &<br /> swiss precision</h1>
        <p className="hero-description">
          At "Aurora Time," we are not just a store, we are an arena where time takes the form of elegance, 
          and every watch is the start of a new story. We create a world where a watch not only measures time 
          but becomes a symbol of elegance, style, and excellence.
        </p>
        <button className="hero-button">
          Buy for $99.99 <FiArrowRight />
        </button>
      </div>
      <div className="hero-image">
        <img src={WatchImage} alt="Luxury Watch" />
      </div>
    </section>
  );
}

export default Hero;
