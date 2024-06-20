import React from 'react'
import "./earth.css"
import globe from "../images/Globe.png"
// import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Earth() {
  const handleMouseEnter = () => {
    gsap.to(".earth-2-image", {
      rotation: "7deg",
      scale: 1.1,
      duration: 2.5,
    });
  };
  const handleMouseLeave = () => {
    gsap.to(".earth-2-image", {
      rotation: 0,
      scale: 1,
      duration: 2.5,
    });
  };
  
  return (
    <div className="container-fluid gx-0 earth">
        <div className="second-earth">
            <div className="earth-1">
                <h1>We have launched <span className='earth-color'>10+ products</span> in <span className='earth-color'>10+ countries</span></h1>
            </div>
            <div className="earth-2">
                <img src={globe} alt="img" className='earth-2-image' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            </div>
            <div className="checking"></div>
        </div>
    </div>

  )
}

export default Earth