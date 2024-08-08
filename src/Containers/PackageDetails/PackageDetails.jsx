import React, { useContext } from 'react'
import "./packageDetails.css"
import { TourContext } from '../../TourContext/TourContext';
import Hero from '../../Components/Home/Hero/Hero';

const PackageDetails = () => {

    const {allData, id} = useContext(TourContext)

  return (
    <>
        <Hero title={"More Details Here"} />
        <div className='package-details-container section-spacing'>
            <h2>Package Details</h2>
            <h1>More About the Package</h1>
            <div className="package-content">
                {
                    allData.map((chosenPackage) => ( chosenPackage.id === id &&
                        <div className="package-details" key={chosenPackage.id}>
                            <div className="image">
                                <img src={chosenPackage.image} alt={chosenPackage.title} />
                            </div>
                            <div className="more-details">
                                <h1>{chosenPackage.title}</h1>  
                                <p>Location: <span>{chosenPackage.location}</span></p>
                                <p>Price: <span>${chosenPackage.amount}</span></p>
                                <p>Duration: <span>{chosenPackage.duration}</span></p>
                                <p>Persons: <span>{chosenPackage.persons}</span></p>
                                <p>Ratings: <span>{chosenPackage.persons}</span></p>
                                <p>No Of Ratings: <span>{chosenPackage.persons}</span></p>
                                <div className="additionals">
                                    <p>Pecks: <span>{chosenPackage.pecks}</span></p>
                                    <p>Other Details: <span>{chosenPackage.otherDetails}</span></p>
                                </div>
                                <button className="">Book Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default PackageDetails