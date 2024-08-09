import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "./package.css"
import { TourContext } from '../../TourContext/TourContext'
import {FaStar, FaLocationArrow, FaCalendar, FaPersonBooth} from "react-icons/fa"

const Package = ({data}) => {

    const {wishlist, setWishlist, setId} = useContext(TourContext)

    const handleWishlist = (item) => {
        
        setWishlist((prevWishlist) => {
            const itemExists = prevWishlist.find((eachItem) => eachItem.id === item.id)
            if (itemExists) {
                return prevWishlist.filter((value) => value.id !== item.id)
            } else {
                return [...prevWishlist, item]
            }
        })
    }

  return (
    <div className="data-container" key={data.id}>
        <div className="data">
            <div className="image">
                <img src={data.image} alt="" />
            </div>
            <div className="data-details">
                <div className="bullets">
                    <div className="about">
                        <FaLocationArrow className='icon' />
                        <h3>{data.location}</h3>
                    </div>
                    <div className="about">
                        <FaCalendar className='icon' />
                        <h3>{data.duration}</h3>
                    </div>
                    <div className="about">
                        <FaPersonBooth className='icon' />
                        <h3>{data.persons}</h3>
                    </div>
                </div>

                <h1>{data.title}</h1>
                <hr />

                <div className="rating-cost">
                    <div className="rating-container">
                        <FaStar className='icon' />
                        <h4>{data.rating} ({data.numberOfRatings})</h4>
                    </div>
                    <div className="cost-container">
                        <h4>${data.amount}</h4>
                    </div>
                </div>

                <div className="action-container">
                    <Link to={`/packages/${data.id}`}><button className='view' onClick={() => setId(data.id)}>View Details</button></Link>
                    <Link to={"/bookingform"}><button className='book' onClick={() => setId(data.id)}>Book Now</button></Link>
                </div>

            </div>
            <div className="wishlist" onClick={() => handleWishlist(data)}>
                <FaStar className={wishlist.find((value) => value.id === data.id) && "select"} />
            </div>
            
        </div>
    </div>
  )
}

export default Package