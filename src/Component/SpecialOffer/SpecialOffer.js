import React from 'react'
import { Link } from 'react-router-dom'
import './specialOffer.css'

function SpecialOffer() {
    return (
        <div className="specialOffer-container">
            <div className="specialOffer-content-container">
                <h1 className="specialOffer-title">Winter <span>SpecialOffer </span> </h1>
                <h2 className="specialOffer-subtitle">Book beautiful places for spending time with your partner</h2>
                <Link to="/contact" className="specialOffer-button" >Book Now</Link>
            </div>
        </div>
    )
}

export default SpecialOffer
