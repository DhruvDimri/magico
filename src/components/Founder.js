import React, { useState } from "react";
import "./founder.css";
import handshake from "../images/Rectangle 72.png";
import graph from "../images/Rectangle 73.png";
import bulb from "../images/bulb.png";
import tablet from "../images/tablet.png";
import earth from "../images/Rectangle 74.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Founder() {
  
  
  useGSAP(() => {
    gsap.from(".founder-sq-anim", {
      opacity: "0",
      duration: 2,
      scrollTrigger: {
        trigger: ".founder-sq-anim",
        scroller: "body",
        start: "top 80%"
      }
    })
    gsap.from(".founder-square-anim", {
      duration: 1.5,
      delay: 1.5,
      x: -1320,
      scrollTrigger: {
        trigger: ".founder-sq-anim",
        scroller: "body",
        start: "top 80%"
      }
    })
    gsap.to(".founder-2", {
      duration: 2,
      top: "150px",
      opacity: "1",
      scrollTrigger: {
        trigger: ".founder-2",
        scroller: "body",
        start: "top 90%"
      }
    })
    gsap.from(".founder-sq2-anim", {
      opacity: "0",
      duration: 2,
      delay: 1.5,
      scrollTrigger: {
        trigger: ".founder-2",
        scroller: "body",
        start: "top 90%"
      }
    })
    gsap.from(".founder-square2-anim", {
      duration: 3,
      delay: 2.5,
      x: -1320,
      scrollTrigger: {
        trigger: ".founder-2",
        scroller: "body",
        start: "top 90%"
      }
    })
  })
  return (
    <div className="container-fluid-md founder gx-0">
        {/* <div className=" founder-wrapper"> */}
          <div className="founder-1">
            <h3 className="for-founder">01. For Founders</h3>
            <div className=" flex-positioning">
              <div className="founder-square">
                <img src={bulb} alt="image" />
                <span className="bulb-anim founder-sq-anim">Idea</span>
              </div>

              <div className="founder-square">
                <img src={tablet} alt="image" />
                <span className="tablet-anim founder-sq-anim">GTM Strategy</span>
              </div>

              <div className="founder-square">
                <img src={earth} alt="image" />
                <span className="earth-anim founder-sq-anim">Tech... Umm!?</span>
              </div>
              <div className="founder-square-anim">
              <p className="founder-square-anim-p">We get your MVP to market faster than ever before.</p>
              </div>
            </div>
          </div>

          <div className="founder-2">
            <h3 className="for-founder">02. For Enterprises</h3>
            <div className="flex-position">
                <div className="founder-square-2">
                  <img src={handshake} alt="image" />
                  <span className="handshake-anim founder-sq2-anim">Proven Business.</span>
                </div>
                <div className="founder-square-3">
                  <img src={graph} alt="image" />
                  <span className="graph-anim founder-sq2-anim">New-age UX?</span>
                </div>
                <div className="founder-square2-anim">
                  <p className="founder-square2-anim-p">We implement technologies to fuel your growth.</p>
                </div>
            </div>
          </div>
        {/* </div> */}
    </div>
  );
}

export default Founder;
