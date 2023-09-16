import React from "react";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="section-flex">
          <div className="section-left">
            <div className="section-img-container">
              <img
                src={process.env.PUBLIC_URL + "/images/travel.png"}
                className="section-img"
                alt="cover"
              />
            </div>
          </div>

          <div className="section-right">
            <div className="content">
              <h2 className="subtitle">Bucket list</h2>
              <h1 className="title">FulFill your exclusive list</h1>
              <ul className="bucketlist-swiper">
                <Swiper
                  modules={[Autoplay]}
                  direction={"vertical"}
                  slidesPerView={5}
                  loop={true}
                  grabCursor={true}
                  className="bucketlist-swiper-container"
                  autoplay={{
                    delay: 1000,
                  }}
                >
                  <SwiperSlide className="bucketlist-swiper-item">
                    <li> Visit the Taj Mahal in Agra.</li>
                  </SwiperSlide>
                  <SwiperSlide className="bucketlist-swiper-item">
                    <li>Sleep under the stars in the Great Thar Desert.</li>
                  </SwiperSlide>
                  <SwiperSlide className="bucketlist-swiper-item">
                    <li>Be adventurous and go trekking in the Himalayas.</li>
                  </SwiperSlide>
                  <SwiperSlide className="bucketlist-swiper-item">
                    <li>Explore the hidden caves within the Jaintia Hills.</li>
                  </SwiperSlide>

                  <SwiperSlide className="bucketlist-swiper-item">
                    <li> Visit the Taj Mahal in Agra.</li>
                  </SwiperSlide>
                  <SwiperSlide className="bucketlist-swiper-item">
                    <li>Sleep under the stars in the Great Thar Desert.</li>
                  </SwiperSlide>
                  <SwiperSlide className="bucketlist-swiper-item">
                    <li>Be adventurous and go trekking in the Himalayas.</li>
                  </SwiperSlide>
                  <SwiperSlide className="bucketlist-swiper-item">
                    <li>Explore the hidden caves within the Jaintia Hills.</li>
                  </SwiperSlide>
                </Swiper>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
