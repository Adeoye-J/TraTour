import React, { useContext, useEffect, useState } from 'react'
import "./featured.css"
import Package from '../../../Containers/Package/Package'
import { TourContext } from '../../../TourContext/TourContext'


const Featured = () => {

  const {featuredData} = useContext(TourContext)

    // const [packages, setPackages] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    // const fetchPackages = async () => {
    //     try {
    //         setLoading(true)
    //         const response = await fetch(getUrl)

    //         const packageData = await response.json()
    //         console.log(packageData)
    //         setPackages(packageData)
    //         setLoading(false)
    //     } catch (e) {
    //         setError(e.message)
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchPackages()
    // }, [])

  return (
    <div className='featured-container section-spacing'>
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