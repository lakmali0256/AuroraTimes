import React from 'react'
import './Hero.css'
import HeroImage from '../../assets/Watch2.jpeg'

function Hero() {
  return (
    <div className='hero'>
        <div className='left'>
            <h1>Timeless Elegance, Crafted for You.</h1>
            <p>Where precision meets luxury in every tick. Discover the art of watchmaking, crafted for those who appreciate timeless beauty.</p>
            <a href="#explore" class="button-explore">Explore</a>


        </div>
        <div>
            <img src={HeroImage}/>
        </div>

    </div>
  )
}

export default Hero