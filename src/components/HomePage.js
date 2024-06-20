import React from 'react'
import "./homepage.css"
import Navbar from './Navbar'
import Section from './Section'
import Built from './Built'
import Founder from './Founder'
import Technology from './Technology'
import Earth from './Earth'
import Tech from './Tech'
import Building from './Building'
import Expertise from './Expertise'
import Connected from './Connected'
import Footer from './Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function HomePage() {
  useGSAP(() => {
    gsap.to(".homepage",{
      backgroundColor: "rgba(247, 247, 247, 1)",
      delay: 4.26
    })
    gsap.to(".anim-wrapper",{
      duration: 4,
      delay: 3.55,
      width: "4900px",
      height: "2850px",
      zIndex: "-1"
    })
  })
  return (
    <>
    <div className="container-fluid gx-0 homepage">
      <div className="anim-wrapper"></div>
        <Navbar/>
        <Section/>
    </div>
        <Built/>
        <Founder/>
        <Technology/>
        <Earth/>
        <Tech/>
        <Building/>
        <Expertise/>
        <Connected/>
        <Footer/>
    </>
  )
}

export default HomePage