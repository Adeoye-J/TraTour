import React, {useState, createContext} from 'react'
import allData from "../data.json"
import featuredData from "../featuredData.json"

export const TourContext = createContext()

export const TourProvider = ({children}) => {

  const [destination, setDestination] = useState("")

  const [wishlist, setWishlist] = useState([])

  const [authType, setAuthType] = useState("login")

  const [id, setId] = useState(0)

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [bookings, setBookings] = useState([]);

  return (
    <TourContext.Provider value={{destination, setDestination, allData, featuredData, wishlist, setWishlist, id, setId, userDetails, setUserDetails, bookings, setBookings, authType, setAuthType}}>
        {children}
    </TourContext.Provider>
  )
}