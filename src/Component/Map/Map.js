import React from 'react'
import './map.css'

function Map() {
    return (
        <div className='map'>

            <div className="map-container">
                <div className="map-header">
                    <h2 className="subtitle">Modern & Beautiful</h2>
                    <h1 className="title">Explore the World for Travel</h1>
                </div>

                <div className="worldMap">
                    <img src={process.env.PUBLIC_URL + '/images/map.png'} alt="world map" />
                </div>
            </div>

             <div className="count-container">
                <div className="row category">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="category-block c1">
                            <h4 className="block-count">500+</h4>
                            <h3 className="block-title">Satisfied Customers</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="category-block c2">
                            <h4 className="block-count">250+</h4>
                            <h3 className="block-title">Stunning Places</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="category-block c3">
                            <h4 className="block-count">600+</h4>
                            <h3 className="block-title">Miles to hike</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="category-block c4">
                            <h4 className="block-count">02+</h4>
                            <h3 className="block-title">Years in Service</h3>
                        </div>
                    </div>
                </div>

                <img src={process.env.PUBLIC_URL + '/images/shape/shape-12.png'} className="section-shapeleft" alt="cover"/>
                <img src={process.env.PUBLIC_URL + '/images/shape/shape-3.png'} className="section-shaperight" alt="cover"/>
             </div>
        </div>
    )
}

export default Map
