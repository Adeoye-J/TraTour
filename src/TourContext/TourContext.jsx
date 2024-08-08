import React, {useState, createContext} from 'react'
import package1 from "../assets/images/package-1.jpg"
import package2 from "../assets/images/package-2.jpg"
import package3 from "../assets/images/package-3.jpg"
import package4 from "../assets/images/package-4.jpg"
import package5 from "../assets/images/package-5.jpg"
import package6 from "../assets/images/package-6.jpg"
import package7 from "../assets/images/destination-1.jpg"
import package8 from "../assets/images/destination-2.jpg"
import package9 from "../assets/images/destination-3.jpg"
import package10 from "../assets/images/destination-4.jpg"
import package11 from "../assets/images/destination-5.jpg"
import package12 from "../assets/images/destination-6.jpg"
import package13 from "../assets/images/blog-1.jpg"
import package14 from "../assets/images/blog-2.jpg"
import package15 from "../assets/images/blog-3.jpg"



export const TourContext = createContext()

export const TourProvider = ({children}) => {

  const [destination, setDestination] = useState("")

  const [wishlist, setWishlist] = useState([])

  const [id, setId] = useState(0)

  const allData = [
    {
      id: 1,
      image: package1,
      location: "Thailand",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 2,
      image: package2,
      location: "Switzerland",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 3,
      image: package3,
      location: "Mexico",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 4,
      image: package4,
      location: "Thailand",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 5,
      image: package5,
      location: "Thailand",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 6,
      image: package6,
      location: "Mexico",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 7,
      image: package7,
      location: "Switzerland",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 8,
      image: package8,
      location: "Thailand",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 9,
      image: package9,
      location: "United States",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 10,
      image: package10,
      location: "London",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 11,
      image: package11,
      location: "Russia",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 12,
      image: package12,
      location: "United States",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 13,
      image: package13,
      location: "Mexico",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 14,
      image: package14,
      location: "London",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
    {
      id: 15,
      image: package15,
      location: "Finland",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400,
      pecks: "Free wifi during adventure",
      otherDetails: "You get access to the best suite and restricted locations with premium"
    },
  ]

  const featuredData = [
    {
      id: 1,
      image: package1,
      location: "Thailand",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400
    },
    {
      id: 2,
      image: package2,
      location: "Switzerland",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400
    },
    {
      id: 3,
      image: package3,
      location: "Mexico",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400
    },
    {
      id: 4,
      image: package4,
      location: "Thailand",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400
    },
    {
      id: 5,
      image: package5,
      location: "Thailand",
      duration: "3 days",
      persons: "2 Person",
      title: "Discover great places with us",
      rating: 4.5,
      numberOfRatings: 250,
      amount: 400
    },
  ] 

  return (
    <TourContext.Provider value={{destination, setDestination, allData, featuredData, wishlist, setWishlist, id, setId}}>
        {children}
    </TourContext.Provider>
  )
}
