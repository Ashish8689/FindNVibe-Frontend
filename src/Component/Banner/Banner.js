import React from 'react'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './banner.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

function Banner() {

    console.log();
    return (
        <div className="banner-container">
            <Swiper
                modules={[Pagination, Autoplay]}
                direction={window.innerWidth >= 786 ? 'vertical' : 'horizontal'} 
                slidesPerView={1}
                grabCursor={true}
                pagination={{ clickable: true }}
                className='swiper-container'
                autoplay ={{
                    delay:4000
                }}
                >
                <SwiperSlide className="slider-banner-item">
                    <img src={process.env.PUBLIC_URL + '/images/banner/banner5.jpg'} className="slider-banner-image" alt="Beach" />
                    <div className="swiper-content-container">
                        <h2 className="swiper-content-title">Find N Vibe</h2>
                        <h1 className="swiper-content-subtitle">Enjoy the vibe of every moment</h1>
                        <div className="swiper-content-button-container">
                           <Link to="/contact" className="swiper-content-button">Get in touch</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider-banner-item">
                    <img src={process.env.PUBLIC_URL + '/images/banner/banner6.jpg'} className="slider-banner-image" alt="Beach" />
                    <div className="swiper-content-container">
                        <h6 className="swiper-content-title">Planning a vacation ?</h6>
                        <h5 className="swiper-content-subtitle">Well why not enjoy the vibe of these places</h5>
                        <div className="swiper-content-button-container">
                           <Link to="/contact" className="swiper-content-button">Explore Places</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
