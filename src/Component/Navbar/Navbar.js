import React, { useState } from "react";
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Call from '../SvgIcons/Call';
import Facebook from '../SvgIcons/Facebook'
import LinkedIn from '../SvgIcons/LinkedIn'
import Instagram from '../SvgIcons/Instagram'
import Twitter from '../SvgIcons/Twitter'
import Whatsapp from '../SvgIcons/Whatsapp'

function Navbar() {

    const [open, setopen] = useState(false);
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

        const changeBackground = () =>{
                
            if(window.scrollY >= 100){
                setNav(true);
            }
            else{
                setNav(false);
            }
        }

        window.addEventListener('scroll', changeBackground);


        const handleHamburger = () =>{
            setopen(!open);
            if(open){
                document.querySelector('.body').classList.remove('active');
            }
            else{
                document.querySelector('.body').classList.add('active');
            }
        }

        const handleNavlinkClick =() =>{
            setopen(false);
            document.querySelector('.body').classList.remove('active');
        } 
    


    return (
        <div className={nav ? "nav active" : "nav"}>

            <div className="nav-media-container">
                <p className="nav-call"> <Call className="icon" /><a href='tel: 6280205668'> 6280205668</a> </p>

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

            <div className="container">
                    <div className="logo-block">
                        <img className="logo" onClick={()=>navigate("/")} src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt="test"></img>
                    </div>
            
                    <div className="side-menu">
                        <ul className={ open ? "nav-list active" : "nav-list"}>
                            
                            <Link to="/"><li className="nav-link" onClick={handleNavlinkClick}>Home</li></Link>

                            <Link to="/collection">
                                <li className="nav-link" onClick={handleNavlinkClick}>Collection</li>
                            </Link>

                            <Link to="/blog">
                                <li className="nav-link" onClick={handleNavlinkClick}>Blog</li>
                            </Link>

                            <Link to="/about">
                                <li className="nav-link" onClick={handleNavlinkClick}>About us</li>
                            </Link>

                            <Link to="/contact">
                                <li className="nav-link" onClick={handleNavlinkClick}>Contact us</li>
                            </Link>
                        </ul>
                    </div> 


                     {/*  *****************   Mobile Sidebar  ******************  */}

                    <div className={ open ? "mobile-sidebar active" : "mobile-sidebar"}>
                        <div className="number">
                            <a className="nav-link" href="tel: 6280205668"> ( +91 ) 6280205668</a> 

                            <div className="hamburger" onClick={handleHamburger} >
                                <span className="span span1 active"></span>
                                <span className="span span2 active"></span>
                                <span className="span span3 active"></span>
                            </div> 
            
                        </div>

                        <div className="navigation-link">
                            <ul className="nav-list">
                                <Link to="/"><li className="nav-link" onClick={handleNavlinkClick}>Home</li></Link>

                                <Link to="/collection">
                                    <li className="nav-link" onClick={handleNavlinkClick}>Collection</li>
                                </Link>

                                <Link to="/blog">
                                    <li className="nav-link" onClick={handleNavlinkClick}>Blog</li>
                                </Link>

                                <Link to="/about">
                                    <li className="nav-link" onClick={handleNavlinkClick}>About us</li>
                                </Link>

                                <Link to="/contact">
                                    <li className="nav-link" onClick={handleNavlinkClick}>Contact us</li>
                                </Link>
                            <li>
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
                            </li>

                            <li>
                                Mumbai
                            </li>
                            </ul>
                        </div>
                    </div> 
                    
                    <div className="hamburger" onClick={handleHamburger} >
                        <span className={open ? "span span1 active" : "span span1"}></span>
                        <span className={open ? "span span2 active" : "span span2"}></span>
                        <span className={open ? "span span3 active" : "span span3"}></span>
                    </div>  
            </div>
        </div>
    )
}

export default Navbar
