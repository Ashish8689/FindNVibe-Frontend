import React from 'react'
import './slideBanner.css';

function SlideBanner({image,tour}) {

    return (
        <div className="slideBanner-container">
            <img src={image} alt={tour} />
        </div>
    )
}

export default SlideBanner
