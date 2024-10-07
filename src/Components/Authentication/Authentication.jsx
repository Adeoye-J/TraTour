import React, {useContext} from 'react'
import "./authentication.css"
import { TourContext } from '../../TourContext/TourContext'
import { Link } from 'react-router-dom'

const Authentication = () => {

    const {authType, setAuthType} = useContext(TourContext)

  return (
    <div className='auth-container'>
        <div className="auth-content">
            <div className='form-header'>
                <h1>{authType === "login" ? "Login Form" : "Signup Form"}</h1>
                <div className="auth-nav">
                    <button className={`${authType === "login" ? "active" : "none"}`} onClick={() => setAuthType("login")}>Login</button>
                    <button className={`${authType === "signup" ? "active" : "none"}`} onClick={() => setAuthType("signup")}>Signup</button>
                </div>
            </div>
            {
                authType === "login" && (
                    <div className='form-container'>
                        <form action="">
                            <div className="input-con">
                                <input type="email" placeholder='Email Address' />
                            </div>
                            <div className="input-con">
                                <input type="password" placeholder='Password' />
                            </div>
                            <span>Forgot Password?</span>
                            <button type='submit'>Login</button>
                            <p>Not a member? <Link onClick={() => setAuthType("signup")}>Signup now</Link></p>
                        </form>
                    </div>
                )
            }
            {
                authType === "signup" && (
                    <div className='form-container'>
                        <form action="">
                            <div className="input-con">
                                <input type="email" placeholder='Email Address' />
                            </div>
                            <div className="input-con">
                                <input type="password" placeholder='Password' />
                            </div>
                            <div className="input-con">
                                <input type="password" placeholder='Confirm Password' />
                            </div>
                            <span>Forgot Password?</span>
                            <button type='submit'>Signup</button>
                        </form>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Authentication