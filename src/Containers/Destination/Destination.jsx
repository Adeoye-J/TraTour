import React, { useContext } from 'react'
import "./destination.css"
import Package from '../Package/Package'
import { TourContext } from '../../TourContext/TourContext'

const Destination = () => {

  const {allData, destination} = useContext(TourContext)

  const filteredDestination = allData.filter((data) => data.location.toLowerCase().includes(destination.toLowerCase()) || data.title.toLowerCase().includes(destination.toLowerCase()))

  return (
    <div className="destination-package-container section-spacing">
      {destination && (<>
      <h2>SEARCH RESULT</h2>
      <h1>Result for {destination}</h1>
        { filteredDestination.length ?
        <div className='destination-container section-spacing'>
            filteredDestination.map((item) => (
              <Package data={item} />
            ))
        </div>
        : <p>Not Available At The Moment!</p>
        }
      </>)
      }
    </div>
  )
}

export default Destination
