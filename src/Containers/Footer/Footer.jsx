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
                <FaTwitter size={20} className='icon' />
              </div>
              <div className="link">
                <FaFacebook size={20} className='icon' />
              </div>
              <div className="link">
                <FaLinkedin size={20} className='icon' />
              </div>
              <div className="link">
                <FaInstagram size={20} className='icon' />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-services">
          <h2>Our Services</h2>
          <ul className="service">
            <li><FaArrowRight size={10} color='blue' /> <span>About</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Destination</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Services</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Packages</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Guides</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Testimonial</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Blog</span></li>
          </ul>
        </div>

        <div className="footer-useful-links">
          <h2>Useful Links</h2>
          <ul className="service">
            <li><FaArrowRight size={10} color='blue' /> <span>About</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Destination</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Services</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Packages</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Guides</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Testimonial</span></li>
            <li><FaArrowRight size={10} color='blue' /> <span>Blog</span></li>
          </ul>
        </div>

        <div className="contact-us">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <p><span><FaLocationArrow size={10} color='blue' /></span> 123 Street, New York, USA</p>
            <p><span><FaPhone size={10} color='blue' /></span> +012 345 67890</p>
            <p><span><FaMailBulk size={10} color='blue' /></span> info@example.com</p>
          </div>
          <div className="newsletter">
            <h2>Newsletter</h2>
            <div className="input-container">
              <input type="email" placeholder='Your Email' />
              <button>Sign Up</button>
            </div>
          </div>
        </div>

      </div>

      <p>All Rights Reserved - <span>Jeremiah Codes//</span></p>
    </div>
  )
}

export default Footer