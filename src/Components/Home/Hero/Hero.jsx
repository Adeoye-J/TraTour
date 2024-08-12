import React, { useEffect, useState } from 'react'
import "./hero.css"



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
      image: "/images/package-3.jpg",
      title: "Tours & Travel",
      text: "Let's Discover The World Together"
    },
    {
      id: 3,
      image: "/images/carousel-2.jpg",
      title: "Tours & Travel",
      text: "Let's Discover The World Together"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carousels.length)
    }, 3000)

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