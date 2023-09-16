import React from 'react';
import './scroll.css';
import Whatsapp from '../SvgIcons/Whatsapp';

function ScrollTop() {

    window.onscroll = function(){ scrollFunction()};
    
    function scrollFunction(){
        var mybutton= document.getElementById("mybtn");
      if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        mybutton.style.display = "flex";
      }
      else{
        mybutton.style.display="none";
      }
    }

    return (
        <div className="scrolltop float-right">
          <div id="mybtn" >
            <a href="https://wa.me/message/DIRXZORJPRUNJ1" target="_blank" rel="noreferrer">
               <Whatsapp className="i"/>
            </a>
          </div>
        </div>
    )
}

export default ScrollTop
