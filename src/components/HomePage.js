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


function HomePage() {
  return (
    <>
    <div className="container-fluid gx-0 homepage">
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