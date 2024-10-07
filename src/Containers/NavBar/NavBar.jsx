import React, { useEffect, useState, useContext } from 'react'
import {Link} from "react-router-dom"
import { CgMenuGridO } from "react-icons/cg";
import { MdCloseFullscreen } from "react-icons/md";
import { TourContext } from '../../TourContext/TourContext';

import "./navbar.css"

const Menu = ({setToggle}) => {

  return(
    <>
      <li onClick={() => setToggle(false)}>
        <Link to={"/home"} className='menu'>Home</Link>
      </li>
      <li onClick={() => setToggle(false)}>
        <Link to={"/about"} className='menu'>About</Link>
      </li>
      <li onClick={() => setToggle(false)}>
        <Link to={"/favorites"} className='menu'>Favorites</Link>
      </li>
      <li onClick={() => setToggle(false)}>
        <Link to={"/allpackages"} className='menu'>All Packages</Link>
      </li>
      <li onClick={() => setToggle(false)}>
        <Link to={"/bookings"} className='menu'>Bookings</Link>
      </li>
    </>
  )
}

const NavBar = () => {

  const [toggle, setToggle] = useState(false)
  
  const [scroll, setScroll] = useState(false)
  
  
  const handleScroll = () => {
    window.scrollY > 50 ? setScroll(true) : setScroll(false)
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    
    return(() => {
      window.removeEventListener("scroll", handleScroll)
    })
  }, [])
  
  const {setAuthType} = useContext(TourContext)

  return (
    <div className={`navbar-container section-spacing ${scroll && "scroll"}`}>

      <div className="logo">
        <h1><Link to={"/home"} style={{textDecoration: "none"}}>TRA<span>TOUR</span></Link></h1>
      </div>

      <div className="main-menu">
        <ul>
          <Menu />
        </ul>
      </div>

      {
        toggle &&
        <div className="menu-container">
          <ul>
            <Menu setToggle={setToggle} />
          </ul>

          <div className="action-container">
            <Link to="/auth"><button onClick={() => {setAuthType("login"); setToggle(false)}}>Login</button></Link>
            <Link to="/auth"><button onClick={() => {setAuthType("signup"); setToggle(false)}}>Signup</button></Link>
          </div>

          <div className="close-menu">
            <MdCloseFullscreen size={23} onClick={() => setToggle(false)} />
          </div>

        </div>
      }

      <div className='menu-selection'>
        <div className="main-action-container">
          <Link to="/auth"><button className='login' onClick={() => setAuthType("login")}>Login</button></Link>
          <Link to="/auth"><button onClick={() => setAuthType("signup")}>Signup</button></Link>
        </div>

        <div className="menu-toggle">
          <CgMenuGridO className='menu-icon' size={29} onClick={() => setToggle(true)} />
        </div>
      </div>
      
    </div>
  )
}

export default NavBar
