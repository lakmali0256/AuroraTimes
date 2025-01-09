import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import HotCollection from '../components/HotCollection/HotCollection'
import Footer from '../components/Footer/Footer'
import SpecialOfferCard from '../components/SpecialOffer/SpecialOfferCard'
import Knowledge from '../components/Knowlege/Knowledge'
import Men from '../components/Men/Men'
import Women from '../components/Women/Women'

function Home() {
  return (
    <div>
        <Hero/>
        <HotCollection/>
        <SpecialOfferCard/>
        <Men/>
        <Knowledge/>
        <Women/>
    </div>
  )
}

export default Home