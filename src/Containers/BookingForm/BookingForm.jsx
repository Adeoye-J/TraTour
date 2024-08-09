import React, { useContext } from 'react';
import "./bookingForm.css"
import { TourContext } from '../../TourContext/TourContext';
import Hero from "../../Components/Home/Hero/Hero"

const BookingForm = () => {
  const {userDetails, setUserDetails} = useContext(TourContext);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onBook(userDetails);
    alert("Bookings made for ")
  };


  return (
    <>
      <Hero title="Booking Form" />
      <div className="bookingform-container">
        <h2>Booking Form</h2>
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
            />
          </div>
          <button type="submit">Make Bookings</button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
