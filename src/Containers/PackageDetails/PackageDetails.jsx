import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import "./packageDetails.css"
import { TourContext } from '../../TourContext/TourContext';
import HeroSec from '../HeroSec/HeroSec';

const PackageDetails = () => {

    const {allData, id} = useContext(TourContext)

    const chosenPackage = allData.find((data) => data.id === id)

  return (
    <>
        <HeroSec page="Package Details" section={`More Details Here for "${chosenPackage.title}"`} />
        <div className='package-details-container section-spacing'>
            <h2>Package Details</h2>
            <h1>More About the Package</h1>
            <div className="package-content">
                <div className="package-details" key={chosenPackage.id}>
                    <div className="image">
                        <img src={chosenPackage.image} alt={chosenPackage.title} />
                    </div>
                    <div className="more-details">
                        <h1>{chosenPackage.title}</h1>  
                        <table>
                            <tbody>
                                <tr>
                                    <td>Location</td>
                                    <td>{chosenPackage.location}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>${chosenPackage.amount}</td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>{chosenPackage.duration}</td>
                                </tr>
                                <tr>
                                    <td>Persons</td>
                                    <td>{chosenPackage.persons}</td>
                                </tr>
                                <tr>
                                    <td>No Of Ratings</td>
                                    <td>{chosenPackage.rating}</td>
                                </tr>
                                <tr>
                                    <td>No Of Ratings</td>
                                    <td>{chosenPackage.numberOfRatings}</td>
                                </tr>
                                <tr>
                                    <td>Pecks</td>
                                    <td>{chosenPackage.pecks}</td>
                                </tr>
                                <tr>
                                    <td>Other Details</td>
                                    <td>{chosenPackage.otherDetails}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to={"/bookingform"}><button>Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PackageDetails