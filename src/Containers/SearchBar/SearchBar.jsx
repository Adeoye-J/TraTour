import React, {useContext, useState} from 'react'
import "./searchBar.css"
import { TourContext } from '../../TourContext/TourContext'

const SearchBar = () => {

  const {destination, setDestination} = useContext(TourContext)

  return (
    <div className='search-bar section-spacing'>
        <div className="search-container">
          <div className="search-content">
            <label htmlFor="destination">Destination: </label>
            <input type="text" id='destination' placeholder='Destination' value={destination} onChange={(e) => setDestination(e.target.value)} />
          </div>
          <div className="search-content">
            <label htmlFor="duration">Duration: </label>
            <input type="text" id='duration' placeholder='Duration' />
          </div>
          {/* <div className="search-content">
            <label htmlFor="departure">Departure Date: </label>
            <input type="" id='departure' placeholder='Depart Date' />
          </div>
          <div className="search-content">
            <label htmlFor="arrival">Arrival Date: </label>
            <input type="text" id='arrival' placeholder='Return Date' />
          </div> */}
          {/* <div className="submit">
            <button onClick={handleSubmit}>Submit</button>
          </div> */}
        </div>
    </div>
  )
}

export default SearchBar