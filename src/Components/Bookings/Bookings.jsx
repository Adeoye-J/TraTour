import React, { useContext } from 'react'
import "./bookings.css"
import {TourContext} from "../../TourContext/TourContext"
import Hero from '../Home/Hero/Hero'

const Bookings = () => {

  const {id, bookings, setBookings} = useContext(TourContext)

  const handleRemove = () => {
    const remainingBookings = bookings.filter((eachBooking) => eachBooking.id !== id)
    setBookings(remainingBookings)
  }

  return (
    <>
      <Hero />
      <div className='bookings-container section-spacing'>
        <h2>Bookings</h2>
        <h1>Explore Bookings</h1>

        {bookings.length ?
        <div className="bookings-content">
          {bookings.map((booking) => (
            <div className='booking' key={booking.id}>
              <div className="image">
                <img src={booking.image} alt="booking image" />
              </div>
              <div className="booking-details">
                <h2>{booking.title}</h2>
                <p>Location: {booking.location}</p>
                <p>Cost: ${booking.amount}</p>
              </div>
              <div className="delete-booking">
                <button onClick={handleRemove}>Remove Booking</button>
              </div>
            </div>
          ))} 
        </div>
          :
        <h1>No Bookings Available for now.</h1>
        }

      </div>
    </>
  )
}

export default Bookings