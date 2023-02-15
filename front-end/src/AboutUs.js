import image from './image.jpg'
import React from 'react'
import './AboutUs.css'

const AboutUs = props => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <h2>Hi! My name is Tiffany.</h2>
      <img src={image} width="20%" />
      <p>
        I am a senior studying computer science. I am from Korea. I am
        interested in entrepreneurship and software development. On my free
        time, I like to cook, go on a run, and binge-watch Netflix shows.
      </p>
    </div>
  )
}

export default AboutUs
