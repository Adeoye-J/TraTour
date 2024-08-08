import React from 'react'
import './App.css'
import NavBar from './Containers/NavBar/NavBar'
import Footer from './Containers/Footer/Footer'
import {Routes, Route} from "react-router-dom"
import { TourProvider } from './TourContext/TourContext'
// import Hero from './Components/Home/Hero/Hero'
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Favorites from './Components/Favorites/Favorites'
// import Destination from "./Containers/Destination/Destination"
import AllPackages from './Components/AllPackages/AllPackages'
import PackageDetails from './Containers/PackageDetails/PackageDetails'
import Home from "./Components/Home/Home"


function App() {

  return (
    <>
      <NavBar />
      <TourProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/allpackages" element={<AllPackages />} />
          <Route path="/packages/:id" element={<PackageDetails/>} />
        </Routes>
      </TourProvider>
      {/* <Footer /> */}
    </>
  )
}

export default App
