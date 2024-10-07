import React from 'react'
import about_image from "/images/peopletour.jpg"
import "./about.css"
import HeroSec from '../../Containers/HeroSec/HeroSec'

const About = () => {
  return (
    <>
      <HeroSec section={"About"} image={about_image}/>
      <div className='about-container'>
        <h1>About Us</h1>
      </div>
    </>
  )
}

export default About
