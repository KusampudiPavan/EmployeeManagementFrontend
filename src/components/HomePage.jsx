import React from "react";
import "./Navbarstyle.css";
import Footer from './Footer'
import CarouselFade from '../Utils/Carousal'
import Header from './Header'
// import Home from 'C:/Users/kusampudi.pavan/React Projects/employeefrontend/src/assets/HomePageSlide1.png'

function HomePage() {

  return (
    <div>
      <Header/>
      {/* <img   src={Home} className="ImageHome" alt="..."></img> */}
      <CarouselFade/>
      {/* <Footer/> */}

    </div>
  )
}

export default HomePage

