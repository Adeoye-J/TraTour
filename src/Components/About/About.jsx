import React from 'react';
import { motion } from 'framer-motion';
import about_image from "/images/aboutus.jpg";
import "./about.css";
import HeroSec from '../../Containers/HeroSec/HeroSec';

const About = () => {
  return (
    <>
      <HeroSec section={"About"} page="About Us" image={about_image} />
      <div className="about-us">
        <motion.section 
          className="mission"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Tratour, our mission is to provide unforgettable travel experiences that enrich lives and broaden horizons. We believe that travel is not just about visiting new places but about connecting with different cultures, exploring breathtaking landscapes, and creating memories that last a lifetime.
            </p>
          </div>
          <img src="/images/mission.jpg" alt="Travel Experience" />
        </motion.section>

        <motion.section 
          className="team"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Our Team</h2>
          <p>
            Our dedicated team of travel experts is passionate about crafting the perfect itineraries tailored to your preferences. With extensive knowledge of destinations worldwide, we are here to guide you every step of the way. Meet our team of professionals committed to making your travel dreams a reality.
          </p>
          <div className="team-members">
            <motion.div 
              className="team-member"
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/images/team1.png" alt="Team Member 1" />
              <h3>Jane Doe</h3>
              <p>Travel Consultant</p>
            </motion.div>
            <motion.div 
              className="team-member"
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/images/team2.png" alt="Team Member 2" />
              <h3>John Smith</h3>
              <p>Tour Guide</p>
            </motion.div>
            <motion.div 
              className="team-member"
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/images/team3.png" alt="Team Member 3" />
              <h3>Alice Johnson</h3>
              <p>Customer Support</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="history"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="history-content">
            <h2>Our History</h2>
            <p>
              Founded in 1800, Tratour has grown from a small local agency to a renowned travel service provider. Our journey began with a passion for travel and a desire to help others discover the world. Over the years, we have partnered with top hotels, airlines, and tour operators to bring you the best travel options available.
            </p>
          </div>
          <img src="/images/history.jpg" alt="Company History" />
        </motion.section>
      </div>
    </>
  );
}

export default About;
