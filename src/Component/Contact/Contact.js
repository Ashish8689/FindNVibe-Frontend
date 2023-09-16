import React, { useState } from 'react'
import './contact.css'
import Mail from '../SvgIcons/Mail'
import Call from '../SvgIcons/Call'
import Location from '../SvgIcons/Location'
import emailjs from '@emailjs/browser';
import Plus from '../SvgIcons/Plus'

function Contact() {
    const [open, setOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setOpen(true);
    
        emailjs.sendForm('service_5uqtwks', 'template_yc0ysv8', e.target, 'user_lMbjPUixLzuHrECPFlkkn')
        .then((result) => {
            console.log(result.text);
            setOpen(true);
        }).catch((error) => {
            console.log(error.text);
            alert("Couldn't send mail. Please contact via call or whatsapp");
        }).finally(()=>{
            e.target.reset();
        });
    };
    
    return (
        <div className="contact">

            <div className="contact-banner">
                <div className="contact-content-container">
                    <h1 className='contact-title'>Contact Us</h1>
                </div>
            </div>

                <div className="contact-flex">
                    <div className="contact-left">
                        <div className="contact-inner-container">
                            <div className="inner-top">
                                <h1 className="title">Contact Information</h1>
                                <p className="para">Fill up the form and our Team will get back to you within 24 hours</p>
            
                                <div className="contact-block">
                                    <div className="contact-content-container">
                                            <Location className="icon"/>
                                            <div className="contact-content">
                                                <p>Mumbai</p>
                                            </div>
                                    </div>
                                
                                    <div className="contact-content-container">
                                        <Call className="icon" />
                                        <div className="contact-content">
                                            <p><a href="tel: 6280205668">6280205668</a></p>
                                        </div>
                                    </div>
            
                                    <div className="contact-content-container">
                                        <i className="fas fa-envelope-open-text"></i>
                                        <Mail className="icon" />
                                        <div className="contact-content">
                                            <p><a href="mailto: info@findnvibe.com">info@findnvibe.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-map-section">
                                <iframe title="FindV" className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1736.5920305670809!2d72.83477270400095!3d19.183721876286704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ee06ebad2b%3A0x9c288235c433657d!2sInfiniti%20Mall!5e0!3m2!1sen!2sin!4v1642172759412!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                            </div>

                            {/* <div className="inner-bottom">
                                <div className="footer-social">
                                    <div className="social-icon-container">
                                        <a href="#" className="social-icon">
                                            <Instagram className="icon"/>
                                        </a>
                                    </div>
                                    <div className="social-icon-container">
                                            <a href="#" className="social-icon">
                                               <Facebook className="icon"/>
                                            </a>
                                    </div>
                                    <div className="social-icon-container">
                                            <a href="#" className="social-icon">
                                               <Twitter className="icon"/>
                                            </a>
                                    </div>
                                    <div className="social-icon-container">
                                            <a href="#" className="social-icon">
                                                <Whatsapp className="icon"/>
                                            </a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="contact-right">
                        <form onSubmit={sendEmail} method="POST">
                                <div className="form-group row">
                                    <div className="col-md-6 col-12 form-group-inner">
                                        <label for="name">Name</label>
                                        <input type="text" name="name"  autocomplete="off"/>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <label for="Name">Email</label>
                                        <input type="email" name="email" autocomplete="off"/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-6 col-12 form-group-inner">
                                        <label for="Name">Number of People</label>
                                        <input type="number" name="people" autocomplete="off"/>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label for="name">Date of Travel</label>
                                        <input type="date" name="date"  autocomplete="off"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="Name">Mobile no</label>
                                    <input type="number" name="mobile"  autocomplete="off"/>
                                </div>                    
                                
                                <div className="form-group">
                                    <label for="Name">Message</label>
                                    <textarea name="message" cols="30" rows="3"  autocomplete="off"></textarea>
                                </div>
                            
                                <div className="form-button">
                                    <button type="submit" className="button">Submit</button>
                                </div>
                        </form>
                    </div>
                </div>

            
             <div className={open ? 'mail-popup active' : 'mail-popup'}>
                 <div className="mail-inner-block">
                     <div className="icon-container" onClick={()=> setOpen(false)}>
                        <Plus className={'icon'} />
                     </div>
                    <h1>Your message is successfully send to <span>Find N Vibe</span>.  Our team will contact you in next 24hrs 😊</h1>
                 </div>
             </div>
        </div>
    )
}

export default Contact
