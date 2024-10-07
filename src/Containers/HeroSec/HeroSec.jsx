import React from 'react'
import { Link } from 'react-router-dom'
import "./heroSec.css"

const HeroSec = ({section, image, page}) => {

    return (
        <div className='herosec-container' style={{backgroundImage:`url(${image})`}}>
            <div className="herosec-content">
                <h1>{section} Page</h1>
                <p>
                    <Link to="/home" style={{textDecoration:"underline", color:"#ff0"}}><p>Home</p></Link>
                    <span>/</span>
                    <p>{page}</p>
                </p>
            </div>
        </div>
    )
}

export default HeroSec