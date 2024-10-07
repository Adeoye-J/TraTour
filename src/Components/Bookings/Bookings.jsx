import React, { useContext } from 'react'
import "./bookings.css"
import {TourContext} from "../../TourContext/TourContext"
import HeroSec from '../../Containers/HeroSec/HeroSec'
import bookings_image from "/images/placetour.jpg"

const Bookings = () => {

  const {bookings, setBookings} = useContext(TourContext)

  const handleRemove = (id) => {
    const remainingBookings = bookings.filter((eachBooking) => eachBooking.id !== id)
    setBookings(remainingBookings)
  }

  return (
    <>
      <HeroSec section={"Bookings"} image={bookings_image} />
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
                <button onClick={() => handleRemove(booking.id)}>Remove Booking</button>
              </div>
            </div>
          ))} 
        </div>
          :
        <h1>You Have No Bookings!</h1>
        }

      </div>
    </>
  )
}

export default Bookings