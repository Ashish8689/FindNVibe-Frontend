import React from 'react'
import { useNavigate } from 'react-router-dom';
import Star from '../SvgIcons/Star'
import './packageCard.css';

function PackageCard({tourPackage,user}) {

    const navigation = useNavigate();

    const {tour, miniDescription,review, image } = tourPackage;

    return (
        <div className="packageCard-container">
            <div className="packageCard-img-container">
                <img src={image[0]} alt={tour} />
            </div>
            <div className="packageCard-content">
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
            
                <h1 className="packageCard-title">{tour}</h1>
                {/* <h2 className="packageCard-pricing"> <span>₹ {price} </span> / Per person</h2> */}
                <h4 className="packageCard-description">{miniDescription}</h4>

                <div className="packageCard-details-button-container">
                    <span onClick={() => navigation(`/singleDestination/${tour}`, { state: tourPackage})} className="package-details-button">See Details</span>
                </div>
            </div>
        </div>
    )
}

export default PackageCard
