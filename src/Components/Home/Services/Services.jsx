import React from 'react'
import "./services.css"
import {FaRoute, FaTicketAlt, FaHotel} from "react-icons/fa"

const Services = () => {
  return (
    <div className='services-container section-spacing'>
        <h2>SERVICES</h2>
        <h1>Tours & Travels Services</h1>
        <div className="services-content">
            <div className="service">
                <div className="logo">
                    <FaRoute size={40} className='icon'/>
                </div>
                <h1>Travel Guide</h1>
                <p>One of our distinct offers is to guide you on your tour or travel in order to ensure to a safe and satisfying ride.</p>
            </div>
            <div className="service">
                <div className="logo">
                    <FaTicketAlt size={40} className='icon'/>
                </div>
                <h1>Ticket Booking</h1>
                <p>Another of our unique offers is to help you conveniently secure a spot by booking tickets in order to ensure an assured spot and a satisfying ride.</p>
            </div>
            <div className="service">
                <div className="logo">
                    <FaHotel size={40} className='icon'/>
                </div>
                <h1>Hotel Booking</h1>
                <p>We also aid you in securing an hotel booking that meets your prefernce anytime of the day.</p>
            </div>
        </div>
    </div>
  )
}

export default Services