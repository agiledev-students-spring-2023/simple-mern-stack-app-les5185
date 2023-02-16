import image from './image.jpg'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './AboutUs.css'

const AboutUs = props => {
  const [images, setImages] = useState([])
  const [text, setText] = useState([])
  const [error, setError] = useState([])
  const [loaded, setLoaded] = useState(false)

  const fetchInfo = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutUs`)
      .then(response => {
        const content = response.data.text
        const image = response.data.img
        console.log(image)
        setText(content)
        setImages(image)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoaded(true)
      })
  }

  useEffect(() => {
    fetchInfo()

    const intervalHandel = setInterval(() => {
      fetchInfo()
    }, 5000)

    return e => {
      clearInterval(intervalHandel)
    }
  }, [])
  return (
    <>
      <h1> About Us</h1>
      <img src={images} width="30%" alt="loading" />

      <p className="aboutMe">
        <br></br>
        {text}
        <br></br>
      </p>
    </>
  )
}

export default AboutUs
