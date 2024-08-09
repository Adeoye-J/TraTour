import React, { useContext } from 'react'
import { TourContext } from '../../TourContext/TourContext'
import Package from '../../Containers/Package/Package'
import Hero from '../Home/Hero/Hero'
import "./favorites.css"

const Favorites = () => {

    const {wishlist} = useContext(TourContext)

  return (
    <>
        <Hero title={"Explore Your Favorites"} />
        <div className='wishlist-container section-spacing'>
            
            <h2>Favorites</h2>
            <h1>Explore Favorites</h1>
            {
                wishlist.length > 0 ? (
                    <div className="wishlist-content">
                        {wishlist.map((wishItem) => (
                            <Package data={wishItem} />
                        ))}
                    </div>
                    ) : (
                        <h1>No Favorites here. Add to view.</h1>
                    )
                
            
            }
        </div>
    </>
  )
}

export default Favorites