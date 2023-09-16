import React from 'react'
import { Link } from 'react-router-dom';
import Star from '../SvgIcons/Star'

function OfferCard({offer}) {

    const {cardTitle, price, miniDescription,review, image } = offer;
    return (
        <div className="offerCard-container">
            <div className="offerCard-img-container">
                <img src={image} alt={cardTitle} />
            </div>
            <div className="offerCard-content">
                <div className="rating-review-container">
                    <div className="rating-container">
                        <Star className="star" />
                        <Star className="star" />
                        <Star className="star" />
                        <Star className="star" />
                    </div>
                    <div className="review-container">
                        <h3>{review} Review</h3>
                    </div>
                </div>
            
                <h1 className="offerCard-title">{cardTitle}</h1>
                <h2 className="offerCard-pricing"> <span>₹ {price} </span> / Per person</h2>
                <h4 className="offerCard-description">{miniDescription}</h4>

                <div className="offerCard-details-button-container">
                    <Link to="/contact" className="offer-details-button">See Details</Link>
                </div>
            </div>
        </div>
    )
}

export default OfferCard
