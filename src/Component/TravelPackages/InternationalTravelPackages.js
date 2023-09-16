import React from 'react'
import Card from '../Card/Card'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './travelPackage.css'
import {InternationalPackages} from './InternationalPackages';

function InternationalTravelPackages() {
    return (
        <div className="package-container">
        <div className="container">
                <div className="package-header-container">
                    <h1 className="package-title">Trending Indian Destinations</h1>
                    <hr className="package-title-underline"/>
                    <p className="packages-description">Planning a surprise vacation for your family any time soon? Well, these best family holiday destinations in India </p>           
                </div>

                <div className="packages-place-container">
                    <Swiper
                        // install Swiper modules
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        // centeredSlides={true}
                        breakpoints={{
                            "640": {
                              "slidesPerView": 2,
                            },
                            "768": {
                              "slidesPerView": 3,
                            },
                            "1024": {
                              "slidesPerView": 3,
                            },
                            "1440": {
                            "slidesPerView": 4,
                            }
                        }}
                        autoplay={{ delay: 2500, waitForTransition: true }} 
                        >
                            {
                                InternationalPackages.map(({src,cardTitle,subTitle})=>(
                                    <SwiperSlide className="slider-package-container">
                                        <Card src={src} cardTitle={cardTitle} subTitle={subTitle}/>
                                    </SwiperSlide>
                                ))
                            }
                    </Swiper>
                </div>
            </div>    
        </div>
    )
}

export default InternationalTravelPackages
