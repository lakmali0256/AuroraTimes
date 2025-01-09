import React from 'react'
import WatchFitGuide from '../Guide/WatchFitGuide'
import './Knowledge.css'
import GalleryOne from '../GalleryOne/GalleryOne'
import GalleryTwo from '../GalleryTwo/GalleryTwo'

function Knowledge() {
  return (
    <div className='cont'>
        <GalleryOne/>
        <WatchFitGuide/>
        <GalleryTwo/>
    </div>
  )
}

export default Knowledge