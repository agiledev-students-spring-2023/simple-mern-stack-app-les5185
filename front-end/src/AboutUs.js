import image from './image.jpg'
import React from 'react'
import './AboutUs.css'

const AboutUs = props => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <img
        src={image}
        style={{
          width: '25%',
          display: 'inline-block',
          verticalAlign: 'top',
        }}
      />
      <p style={{ width: '50%', display: 'inline-block', marginTop: '16px' }}>
        <h3>
          Hi! My name is Tiffany. I am a senior studying computer science.{' '}
          <br /> I am from Korea. I am interested in entrepreneurship and
          software development. As an aspiring entrepreneur, I wish to help
          people form healthy values in their lives and stay positive and
          motivated. <br /> On my free time, I like to cook, go on a run, and
          binge-watch Netflix shows.
        </h3>
      </p>
    </div>
  )
}

export default AboutUs
