import React from 'react'
import './about.css'

function AboutCommon() {
    return (
        <div className="about-comman-container">
            <div className="section1">
            <div className="container">
                <div className="section-flex">
                    <div className="section-left">
                        <div className="content"> 
                            <h2 className="subtitle">About Find N Vibe</h2>
                            <h1 className="title">Best Travel Agency Company Since 2021</h1>
                            <p className="para">Travel is the main thing you purchase that makes you more extravagant. We, at Find N Vibe Tours and Events Private Limited, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly. You have found us if you are reading this description, now just allow us to make you enjoy the vibe of every moment you spend with us.</p>
                        </div>
                    </div>

                    <div className="section-right">
                        <div className="section-img-container">
                            <div className="cover-image">
                                <img src={process.env.PUBLIC_URL + '/images/about-3.jpg'} className="section-img" alt="cover"/>
                            </div>

                            {/* ********  Shapes  ********** */}
                            <img src={process.env.PUBLIC_URL + '/images/shape/shape-12.png'} className="section-shapeleft" alt="cover"/>
                            <img src={process.env.PUBLIC_URL + '/images/shape/shape-3.png'} className="section-shaperight" alt="cover"/>
                            <img src={process.env.PUBLIC_URL + '/images/shape/shape-13.png'} className="section-bigshape" alt="cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutCommon
