import React from 'react'
import './coverPackages.css';
// import banner from '../../images/kashmir.jpg'

function MainPackage() {
    return (
        <div className="cover-package">
            <div className="cover-package-block">
                <div className="cover-package-block-img-container">
                    <img src="{banner}" alt="" />
                </div>
                <div className="cover-package-content-container">
                   <h1 className="cover-package-block-title">Balloon Flights</h1>
                </div>
            </div>

            <div className="cover-package-block">
                <div className="cover-package-block-img-container">
                    <img src="{banner}" alt="" />
                </div>
                <div className="cover-package-content-container">
                   <h1 className="cover-package-block-title">Mountain Holiday</h1>
                </div>
            </div>

            <div className="cover-package-block">
                <div className="cover-package-block-img-container">
                    <img src="{banner}" alt="" />
                </div>
                <div className="cover-package-content-container">
                   <h1 className="cover-package-block-title">Beach Holiday</h1>
                </div>
            </div>
        </div>
    )
}

export default MainPackage
