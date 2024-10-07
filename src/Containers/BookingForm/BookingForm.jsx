import React, { useContext } from 'react';
import "./bookingForm.css"
import { TourContext } from '../../TourContext/TourContext';
import HeroSec from '../HeroSec/HeroSec';

const BookingForm = () => {
  const {userDetails, setUserDetails, bookings, setBookings, id, allData} = useContext(TourContext);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    allData.map((chosenPackage) =>
      (chosenPackage.id === id && setBookings([...bookings, chosenPackage])))
    alert("Bookings Successful")
  };

  

  return (
    <>
      <HeroSec page="book details" section="Booking Details" />
      <div className="bookingform-container">
        <h2>Booking Form</h2>
        {
          allData.map((chosenPackage) => (chosenPackage.id === id && 
            <div className='booked-package'>
              <div className="image">
                <img src={chosenPackage.image} alt={chosenPackage.title} />
              </div>
              <h1>{chosenPackage.title}</h1>
            </div>
          ))
        }
        <h1>Fill the form below to book selected package.</h1>
        <form onSubmit={handleSubmit} className='bookingform-content'>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Make Bookings</button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
