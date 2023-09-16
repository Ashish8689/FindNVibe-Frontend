import React from 'react'
import './card.css';
import Location from '../SvgIcons/Location';
import { useNavigate } from 'react-router-dom';

function Card({image,cardTitle,part}) {
    const navigation = useNavigate();

    return (
        <div className="card-block"
         onClick={()=>{
            navigation(`/allDestination?${part}`);
        }}>
            <div className="card-img-container">
                <img src={image} alt={cardTitle} />
            </div>
            <div className="card-location-container">
                <div className="card-location-subcontainer">
                    <Location className="location"/>
                    <h2 className="card-title">{cardTitle}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card