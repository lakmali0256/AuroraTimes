import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import HotCollection from '../components/HotCollection/HotCollection'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HotCollection/>
        <Footer/>
    </div>
  )
}

export default Home