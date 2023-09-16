import React from 'react';
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,  Pagination} from 'swiper';
import TestimonialBlock from './TestimonialBlock';

SwiperCore.use([Pagination, Autoplay]);

function Testimonial() {

    const testimonials = [
         {
            id:1,
            name:"Yash",
            img: process.env.PUBLIC_URL + '/images/testimonial/t2.jpg',
            description:`All the things were good & worth for 7 days trip. Enjoyed a lot Gulmarg's stay was very nice & it is such a beautiful place to visit. Thank you Find N Vibe.`,
        },
        {
            id:2,
            name:"Shristi",
            img: process.env.PUBLIC_URL + '/images/testimonial/t1.jpg',
            description:`I am so thankful you guys are my travel agents as I am too overwhelmed with everything else. You know you are much more than travel company. You are my friends, and that means a great deal to me. Thank You Find N Vibe for the amazing trip.`,
        },
        {
            id:3,
            name:"Rohit",
            img: process.env.PUBLIC_URL + '/images/testimonial/t3.jpeg',
            description:`A very emotional experience. Thank you Find N Vibei for leading this successful trip. The hotel, the food, the guide, and the traveling and trip schedule including visiting significant places in Uttarakhand made this trip an experience that was perfectly orchestrated and adjusted according to limits and changes.
            Thank you for all your efforts.`,
        }
    ]
    
    return (
        <div className="testimonials">
            <div className="container">
                <div className="testimonial-header">
                    <h2 className="testimonial-subTitle">Read The Top</h2>
                    <h1 className="testimonial-title">Travel Reviews</h1>
                </div>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    className='swiper-container'
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    >

                        {testimonials.map(testimonial =>(
                           <SwiperSlide key={testimonial.id}>
                               <TestimonialBlock content={testimonial}/>
                           </SwiperSlide>
                        ))}
                </Swiper>
                   
            </div> 
        </div>
    )
}

export default Testimonial
