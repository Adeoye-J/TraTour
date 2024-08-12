import React, {useContext} from 'react'
import "./home.css"
import Hero from './Hero/Hero'
import SearchBar from "../../Containers/SearchBar/SearchBar"
import Featured from "./Featured/Featured"
import Services from './Services/Services'
import Destination from '../../Containers/Destination/Destination'
import Testimonials from "./Testimonials/Testimonials"
// import { TourContext } from '../../TourContext/TourContext'

const Home = () => {

  // const url = "test.api.amadeus.com/v2"
  // const {featuredData} = useContext(TourContext)

  return (
    <div>
        <Hero title={"Tours and Travels"} />
        <SearchBar />
        <Destination />
        <Featured />
        <Services />
        <Testimonials />
    </div>
  )
}

export default Home