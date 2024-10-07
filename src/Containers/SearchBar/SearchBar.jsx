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
            <input type="text" id='destination' placeholder='Search Destination or Trip...' value={destination} onChange={(e) => setDestination(e.target.value)} />
          </div>
        </div>
    </div>
  )
}

export default SearchBar