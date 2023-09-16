import React from "react";
import About from "../About/About";
import AboutCommon from "../AboutUs/AboutCommon";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Offer from "../Offer/Offer";
import MainPackage from "../MainPackage/MainPackage";
import DomesticTravelPackages from "../TravelPackages/DomesticTravelPackages";
import Honeymoon from "../HoneyMoon/HoneyMoon";
import Testimonials from "../Testimonials/Testimonials";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import Map from "../Map/Map";

function Home() {
  return (
    <>
     <Banner/>
     <AboutCommon/>
     <SpecialOffer/>
     <MainPackage/>  
     <DomesticTravelPackages />
     <Offer/>
     <Honeymoon/>
     <Map/>
     <Testimonials/>
     <About/>
     <Gallery/>
   </>
 );
}
export default Home;