import React from 'react'
import Card from '../Card/Card'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './travelPackage.css'
import {DomesticPackages} from './DomesticPackages';


function DomesticTravelPackages() {
    return (
        <div className="package-container">
            <div className="domestic-container">
                <div className="package-header-container">
                    <h1 className="package-subtitle">Plan The</h1>
                    <h1 className="package-title">Perfect Holiday</h1>
                    <hr className="package-title-underline"/>
                    <p className="packages-description">Planning a vacation anytime soon? well !! why not enjoy the vibe of these places.</p>           
                </div>

                <div className="packages-place-container">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        grabCursor={true}
                        breakpoints={{
                            "500": {
                                "slidesPerView": 1,
                            },
                            "768": {
                              "slidesPerView": 2,
                            },
                            "1024": {
                              "slidesPerView": 3,
                            },
                            "1440": {
                            "slidesPerView": 4,
                            }
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        >
                            {
                                DomesticPackages.map(({image,cardTitle, part})=>(
                                    <SwiperSlide key={part} className="slider-package-container">
                                        <Card image={image} cardTitle={cardTitle} part={part}/>
                                    </SwiperSlide>
                                ))
                            }
                    </Swiper>
                </div>
            </div>    
        </div>
    )
}

export default DomesticTravelPackages
