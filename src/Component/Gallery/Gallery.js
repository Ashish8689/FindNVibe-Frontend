import React from 'react'
import './gallery.css';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode"
import { GalleryImageList } from './gallerylist';

function Gallery() {
    return (
        <div className="gallery-container">
               <div className="gallery-header-container">
                    <h1 className="gallery-subtitle">Happy Moments</h1>
                    <p className="gallery-title">Our customer vibing on trip</p>           
                </div>

                <div className="gallery-swiper-container">

                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, Autoplay]}
                        freeMode={true}
                        spaceBetween={20}
                        loop={true}
                        className="mySwiper"
                        breakpoints={{
                            "500": {
                                "slidesPerView": 1,
                              },
                            "640": {
                              "slidesPerView": 2,
                            },
                            "768": {
                              "slidesPerView": 3,
                            },
                            "1024": {
                              "slidesPerView": 4,
                            },
                            "1440": {
                            "slidesPerView": 5,
                            }
                        }}
                        autoplay={{ delay: 2500 }} 
                        >

                        {GalleryImageList.map(({id,title,image}) => (
                            <SwiperSlide key={id} className="slider-gallery-container">
                                <div className="swiper-img-block">
                                    <img src={image} alt={title} />
                                </div>
                            </SwiperSlide>
                        ))}  
                    </Swiper>
                </div>
        </div>
    )
}

export default Gallery
