import React, { useContext } from 'react'
import "./destination.css"
import Package from '../Package/Package'
import { TourContext } from '../../TourContext/TourContext'

const Destination = () => {

  const {allData, destination} = useContext(TourContext)

  return (
    <div className="destination-package-container section-spacing">
      {destination && (<>
      <h2>SEARCH RESULT</h2>
      <h1>Result for {destination}</h1>
      <div className='destination-container section-spacing'>
        {
          allData.map((item) => (destination === item.location ? 
            <Package data={item} />
            : "") )
        }

          {/* {
              allData.map((data) => (
                  <Package data={data} key={data.id} />
              ))
          } */}
      </div>
      </>)
      }
    </div>
  )
}

export default Destination
