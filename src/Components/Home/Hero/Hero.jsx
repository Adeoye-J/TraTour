import React, { useEffect, useState } from 'react'
import "./hero.css"
import { Link } from 'react-router-dom'



const Hero = () => {

  const carousels = [
    {
      id: 1,
      image: "/images/carousel-1.jpg",
      title: "Tours & Travel",
      text: "Let's Discover The World Together"
    },
    {
      id: 2,
      image: "/images/carousel-2.jpg",
      title: "Tours & Travel",
      text: "Let's Discover The World Together"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carousels.length)
    }, 10000)

    return () => clearInterval(interval)

  }, [])

  return(

    <div className='hero-container'>
      <div className="hero-content">
        {
          carousels.map((carousel, index) => (
            <div 
              className={`carousel ${index === activeIndex ? "index" : ""}`} 
              key={carousel.id} 
              style={{backgroundImage: `url(${carousel.image})`}}
            >
              <div className="carousel-details">
                <h1>{carousel.title}</h1>
                <p>{carousel.text}</p>
              </div>
              <Link to="/allpackages"><button>Explore Packages</button></Link>
            </div>
          ))
        }
      </div>
      <div className="carousel-indicators">
        {carousels.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>

  )
}

export default Hero