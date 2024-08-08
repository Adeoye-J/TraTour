import React from 'react'
import "./hero.css"

const Hero = ({title}) => {
  return (
    <div className='hero-container section-spacing'>
        <div className="hero-content">
            <h1>{title}</h1>
            <p>Discover Amazing Place with us. Let's discover the world together.</p>
        </div>
    </div>
  )
}

export default Hero