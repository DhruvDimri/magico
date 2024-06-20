import React from "react";
import "./built.css";
import pizza from "../images/image 2357.png";
import keka from "../images/image-removebg-preview (37) 1.png";
import plum  from "../images/plum.png"
import neu  from "../images/ne.png"
import samagra from "../images/samagra.png"
import peek from "../images/peek.png"
import book from "../images/bookmyshow.png"
import pay from "../images/pay.png"
import rixil from "../images/rixil.png"
import hdfc from "../images/hdfc.png"
import brik from "../images/brik.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



function Built() {
  useGSAP(() => {
    gsap.to(".same-1", {
      backgroundColor: "transparent",
      mixBlendMode: "normal",
      duration: 1,
      scrollTrigger: {
        trigger: ".same-1",
        scroller: "body",
        start: "top 25%"
      }
    })
    gsap.to(".same-2", {
      backgroundColor: "transparent",
      mixBlendMode: "normal",
      duration: 1,
      scrollTrigger: {
        trigger: ".same-1",
        scroller: "body",
        start: "top 25%"
      }
    })
  })
  return (
    <div className="container-fluid gx-0 built">
      <div className="main-heading">
        <h1>
          We have <span className="design-1"> built </span>for
        </h1>
      </div>
      <div className="built-slide-1">
        <div className="same-1">
          <img src={pizza} alt="image" className="pizza" />
        </div>
        <div className="same-1">
          <img src={plum} alt="image" className="pizza" />
        </div>
        <div className="same-1">
          <img src={neu} alt="image" className="pizza" />
        </div>
        <div className="same-1">
          <img src={peek} alt="image" className="pizza" />
        </div>
        <div className="same-1">
          <img src={book} alt="image" className="pizza" />
        </div>
        <div className="same-1">
          <img src={samagra} alt="image" className="pizza" />
        </div>
      </div>

      <div className="slide-2">
        <div className="same-2">
          <img src={keka} alt="image" className="keka" />
        </div>
        <div className="same-2">
          <img src={pay} alt="image" className="keka" />
        </div>
        <div className="same-2">
          <img src={rixil} alt="image" className="keka" />
        </div>
        <div className="same-2">
          <img src={hdfc} alt="image" className="keka" />
        </div>
        <div className="same-2">
          <img src={brik} alt="image" className="keka" />
        </div>
        <div className="same-2">
          <img src={pay} alt="image" className="keka" />
        </div>
      </div>
    </div>
  );
}

export default Built;
