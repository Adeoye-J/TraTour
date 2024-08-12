import React from 'react'
import "./footer.css"
import {FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaArrowRight, FaLocationArrow, FaPhone, FaMailBulk} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-container section-spacing'>
      <div className="footer-content">

        <div className="footer-info">
          <h1>Tra<span>Tour</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ab doloremque harum aliquam quam ipsum omnis quis dicta.</p>
          <div className="social-links">
            <h2>Follow Us</h2>
            <div className="links">
              <div className="link">
                <FaTwitter />
              </div>
              <div className="link">
                <FaFacebook />
              </div>
              <div className="link">
                <FaLinkedin />
              </div>
              <div className="link">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-services">
          <h2>Our Services</h2>
          <ul className="service">
            <li><span><FaArrowRight /></span> About</li>
            <li><span><FaArrowRight /></span> Destination</li>
            <li><span><FaArrowRight /></span> Services</li>
            <li><span><FaArrowRight /></span> Packages</li>
            <li><span><FaArrowRight /></span> Guides</li>
            <li><span><FaArrowRight /></span> Testimonial</li>
            <li><span><FaArrowRight /></span> Blog</li>
          </ul>
        </div>

        <div className="footer-usefull-links">
          <h2>Our Services</h2>
          <ul className="service">
            <li><span><FaArrowRight /></span> About</li>
            <li><span><FaArrowRight /></span> Destination</li>
            <li><span><FaArrowRight /></span> Services</li>
            <li><span><FaArrowRight /></span> Packages</li>
            <li><span><FaArrowRight /></span> Guides</li>
            <li><span><FaArrowRight /></span> Testimonial</li>
            <li><span><FaArrowRight /></span> Blog</li>
          </ul>
        </div>

        <div className="contact-us">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <p><span><FaLocationArrow /></span> 123 Street, New York, USA</p>
            <p><span><FaPhone /></span> +012 345 67890</p>
            <p><span><FaMailBulk /></span> info@example.com</p>
          </div>
          <div className="newsletter">
            <h2>Newsletter</h2>
            <div className="input-button">
              <input type="email" placeholder='Your Email' />
              <button>Sign Up</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer