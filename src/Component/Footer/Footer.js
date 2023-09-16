import React from 'react'
import Facebook from '../SvgIcons/Facebook'
import LinkedIn from '../SvgIcons/LinkedIn'
import Instagram from '../SvgIcons/Instagram'
import Twitter from '../SvgIcons/Twitter'
import Location from '../SvgIcons/Location'
import Mail from '../SvgIcons/Mail'
import Call from '../SvgIcons/Call'
import Whatsapp from '../SvgIcons/Whatsapp'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="footer-logo-container">
                          <h1 className='footer-title'>Find N <span>Vibe</span></h1>
                        </div>
                        <p className="footer-para">Find N Vibe is focused on helping our customers to enjoy the vibe of every moment and live their lives to the fullest.</p>
    
                        <div className="social-icon-container">
                            <div className="social-icon-block">
                                <a href="https://twitter.com/findnvibe?t=XiFe9rk2AwoyGPJvsvah3Q&s=09" target="_blank" rel="noreferrer"><Twitter className="icon" /></a>
                            </div>
                            <div className="social-icon-block">
                                <a href="https://www.facebook.com/findnvibe/" target="_blank" rel="noreferrer"><Facebook className="icon" /></a>
                            </div>
                            <div className="social-icon-block">
                                <a href=" https://www.linkedin.com/company/find-n-vibe-tours-and-events-private-limited" target="_blank" rel="noreferrer"><LinkedIn className="icon" /></a>
                            </div>
                            <div className="social-icon-block">
                                <a href="https://instagram.com/_find_n_vibe_?utm_medium=copy_link" target="_blank" rel="noreferrer"><Instagram className="icon" /></a>
                            </div>
                            <div className="social-icon-block">
                                <a href="https://wa.me/message/DIRXZORJPRUNJ1" target="_blank" rel="noreferrer"><Whatsapp className="icon" /></a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                        <h4 className="footer-column-header">Information</h4>
                        <ul>
                            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeBnAn55S6Kw233wCdZWcuabrDKD020vKpjOdH3FEghIUFtlg/viewform?usp=pp_url" target='_blank' rel="noreferrer">Carrer</a></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
                            <li><Link to="termsAndCondition">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                        <h4 className="footer-column-header">Adventure</h4>
                        <ul>
                            <li><Link to="/">The Cursed</Link></li>
                            <li><Link to="/">Rock Climbing</Link></li>
                            <li><Link to="/">Laugavegur</Link></li>
                            <li><Link to="/">Diving</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <h4 className="footer-column-header">Contacts</h4>

                        <div className="mini-flex">
                            <div className="mini-flex-left">
                              <Location className="icon" />
                            </div>
                            <div className="mini-flex-right">
                                <h5>Mumbai</h5>
                            </div>
                        </div>

                        <div className="mini-flex">
                            <div className="mini-flex-left">
                              <Call className="icon" />
                            </div>
                            <div className="mini-flex-right">
                                <h5><a href='tel: 6280205668'> 6280205668</a></h5>
                            </div>
                        </div>

                        <div className="mini-flex">
                            <div className="mini-flex-left">
                              <Mail className="icon" />
                            </div>
                            <div className="mini-flex-right">
                                <h5><a href='mailto:info@findnvibe.com'>info@findnvibe.com</a></h5>
                            </div>
                        </div>
                    </div>
                </div> 
          </div>

            <div className="footer-copyright-container">
                <p className='copyright'><span>Find N Vibe Tours and Events Pvt Ltd</span> © 2022 All Right Reserved</p>
            </div> 
        </div>
    )
}

export default Footer
