import React, {useContext} from 'react'
import "./allPackages.css"
import packages_image from "/images/worldtour.jpg"
import SearchBar from '../../Containers/SearchBar/SearchBar'
import Package from '../../Containers/Package/Package'
import Destination from '../../Containers/Destination/Destination'
import { TourContext } from '../../TourContext/TourContext'
import HeroSec from '../../Containers/HeroSec/HeroSec'

const AllPackages = () => {

    const {allData} = useContext(TourContext)

  return (
    <>
        <HeroSec section={"All Packages"} page="All Packages" image={packages_image} />
        <SearchBar />
        <Destination />
        <div className='allpackages-container'>
            <h2>ALL PACKAGES</h2>
            <h1>Explore All Available Packages</h1>

            <div className="package-container">
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