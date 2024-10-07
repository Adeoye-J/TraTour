import React, { useContext, useEffect, useState } from 'react'
import "./featured.css"
import Package from '../../../Containers/Package/Package'
import { TourContext } from '../../../TourContext/TourContext'


const Featured = () => {

  const {featuredData} = useContext(TourContext)

  return (
    <div className='featured-container'>
        <h2>PACKAGES</h2>
        <h1>Featured Tours & Travels Packages</h1>
        <div className="package-container">
        {
            featuredData.map((data) => (
                <Package data={data} key={data.id} />
            ))
        }
        </div>
        
    </div>
  )
}

export default Featured