import React, {useContext} from 'react'
import "./allPackages.css"
import Hero from '../Home/Hero/Hero'
import SearchBar from '../../Containers/SearchBar/SearchBar'
import Package from '../../Containers/Package/Package'
import Destination from '../../Containers/Destination/Destination'
import { TourContext } from '../../TourContext/TourContext'

const AllPackages = () => {

    const {allData} = useContext(TourContext)

  return (
    <>
        <Hero title={"Have Fun Exploring All Packages"} />
        <SearchBar />
        <Destination />
        <div className='allpackages-container'>
            <h2>ALL PACKAGES</h2>
            <h1>Explore All Available Packages</h1>

            <div className="packages-container">
                {
                    allData.map(item => (
                        <Package data={item} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default AllPackages