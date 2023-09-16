import React from 'react'
import './about.css'
import AboutCommon from './AboutCommon'

function AboutUs() {
    return (
        <div className='aboutUs'>
            <div className="about-banner">
                <div className="about-content-container">
                    <h1 className='about-title'>About Us</h1>
                </div>
            </div>

           <AboutCommon/>

            <div className="section2">
              <div className="section-flex">
                  <div className="section-left">
                        <div className="section-img-container">
                           <img src={process.env.PUBLIC_URL + '/images/North/nanital/2.jpg'} className="section-img" alt="cover"/>
                        </div>
                  </div>
                  <div className="section-right">
                        <div className="content"> 
                            <h2 className="subtitle">Our Story</h2>
                            <h1 className="title">Inspired & passionate travelers</h1>
                            <p className="para">Find N Vibe Tours and Events Pvt Ltd works on a unique combination of tours and events so that our clients don’t only just visit a particular place but also enjoy the vibe and ambience of that place. We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel packages. We rouse our clients to carry on with a rich life, brimming with extraordinary events and travel encounters.</p>
                        </div>
                  </div>
              </div>

              <div className="section-flex order">
                  <div className="section-left">
                       <div className="content"> 
                            <h2 className="subtitle">Our Values</h2>
                            <h1 className="title">Journeys worth takings</h1>
                            <p className="para">Find N Vibe is focused on helping our customers to enjoy the vibe of every moment and live their lives to the fullest.</p>
                        </div>
                  </div>
                  <div className="section-right">
                        <div className="section-img-container">
                           <img src={process.env.PUBLIC_URL + '/images/South/kerala/2.jpg'} className="section-img" alt="cover"/>
                        </div>
                  </div>
              </div>

            </div>
        </div>
    )
}

export default AboutUs
