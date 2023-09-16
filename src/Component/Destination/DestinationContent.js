import React from 'react'
import Location from '../SvgIcons/Location'
import Play from '../SvgIcons/Play'
import ReactHtmlParser from 'react-html-parser';
import Star from '../SvgIcons/Star';

function DestinationContent({tourPackage}) {

    const { tour,description, hightlights,review,location,pdf} = tourPackage;
    
    return (
        <div className="destination-content">
            <div className="container">

                <div className="destination-content-header">
                    <div className="destination-review-rating-container">
                        <div className="rating-container">
                            <Star className="star" />
                            <Star className="star" />
                            <Star className="star" />
                            <Star className="star" />
                            <Star className="star" />
                        </div>
                        <div className="destination-review-container">
                            <h3>{review} Review</h3>
                        </div>
                    </div>

                    <div className="destination-location">
                        <div className="icon-name">
                            <Location className="icon"/> 
                            <h3>{tour}</h3>
                        </div>
                        <a href={location} target="_blank" rel="noreferrer">view map</a>
                    </div>
                </div>
                


                <div className="destination-title-container">
                    <div className="title-pricing-container">
                        <h1 className="title">{tour}</h1>
                        {/* <h2 className="destination-pricing"> <span>₹ {price} </span> / Per person</h2> */}
                    </div>
  
                    <div className="destination-booknow-container">
                        <a href="https://wa.me/message/DIRXZORJPRUNJ1" target="_blank" rel="noreferrer" className="destination-booknow">Get a Quote</a>
                     </div>
                </div>


                <div className="destination-description-container">
                    <p>{description}</p>

                    {hightlights && (
                        <> 
                         <h3>Your handpicked inclusions:</h3>
                         {ReactHtmlParser(hightlights)}
                        </>
                    )}
                </div>

                <div className="destination-links-container">
                    <div className="destination-links-button">
                        <a href={pdf} download>Download Travel Schedule PDF</a>
                    </div>

                    <div className="destination-links-button">
                        <Play className="play" />
                        <a>Watch Video</a>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default DestinationContent
