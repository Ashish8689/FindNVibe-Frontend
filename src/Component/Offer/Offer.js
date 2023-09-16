import React from 'react'
import './offer.css';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {
    NorthPackages,
    SouthPackages,
    EastPackages,
    WestPackages,
  } from "../AllDestination/ToursPackagesList";
import PackageCard from "../PackageCard/PackageCard";

function Offer() {

    return (
        <div className="offer-container">
                <div className="container">
                    <div className="offer-header-container">
                        <h2 className="offer-subtitle">Offer</h2>
                        <h1 className="offer-title">Special Offer</h1>
                        <hr className="offer-title-underline"/>
                        <h2 className="offer-description">Check out our special offer tour</h2>
                    </div>

                    <div className="offer-swiper-container">
                        <Swiper
                            className='swiper'
                            modules={[Autoplay,Navigation]}
                            loop={true}
                            navigation
                            grabCursor={true}
                            spaceBetween={10}
                            autoplay={{ delay: 3500 }} 
                            breakpoints={{
                                "450": {
                                    "slidesPerView": 1,
                                },
                                "768": {
                                    "slidesPerView": 2,
                                },
                                "1024": {
                                    "slidesPerView": 2,
                                },
                                "1200": {
                                    "slidesPerView": 3,
                                }
                            }}
                        >

                            {[...NorthPackages,...SouthPackages,...EastPackages,...WestPackages].filter(tours => tours.offer === true)?.map((offerPackage,index) =>(
                                <SwiperSlide key={index} className="offer-swiper">
                                    <PackageCard  tourPackage={offerPackage} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
        </div>
    )
}

export default Offer
