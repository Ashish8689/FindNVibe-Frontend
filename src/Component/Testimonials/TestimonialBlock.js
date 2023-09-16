import React from 'react';
import './testimonials.css';

function Testi_block({content:{id,name,designation,description,img}}) {

    return (
        // <SwiperSlide>
            <div className="testimonial-block">
                <div className="testimonial-img-container">
                    <img src={process.env.PUBLIC_URL + '/images/testimonial/quote.png'} className="quote" alt="acc" />
                    <div className="testimonial-mini-img-container">
                        <img src={img} alt="acc"/>
                    </div>   
                </div>

                <div className="testimonial-content">
                    <h5 className="testimonial-name">{name}</h5>

                    <div className="star-container">
                        <img src={process.env.PUBLIC_URL + '/images/testimonial/star.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/testimonial/star.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/testimonial/star.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/testimonial/star.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/images/testimonial/star.png'} alt="" />
                    </div>
                    <p className="testimonial-para">{description}</p>
                </div>
            </div>
        // </SwiperSlide>
    )
}

export default Testi_block
