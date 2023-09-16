import React from 'react'
import SlideBanner from '../SlideBanner/SlideBanner';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './destination.css';
import 'swiper/css';
import 'swiper/css/navigation';
import DestinationContent from './DestinationContent';
import { useLocation } from 'react-router-dom';

function Destination() {

    const { state } = useLocation();

    return (
        <div className="destination">
            <Swiper
                className='bannerSlider'
                modules={[Autoplay,Navigation]}
                loop={true}
                navigation
                autoplay={{ delay: 2500 }} 
            >
                {state?.image.map((image,index) =>(
                    <SwiperSlide  key={index} className="swiper-sliderBanner">
                        <SlideBanner image={image} tour={state.tour}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <DestinationContent tourPackage={state}/>
        </div>
    )
}

export default Destination
