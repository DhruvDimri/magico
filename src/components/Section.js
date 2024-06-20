import React from "react";
import "./section.css";
import arr from "../images/down arrow.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Section = () => {
  useGSAP(() => {
    gsap.from(".section-wrapper", {
      y: 550,
      duration: 3.1,
      delay: 0.5,
      opacity: "0",

    })
    gsap.to(".section-wrapper-1 p", {
      color: "rgba(15, 15, 15, 1)",
      duration: 3,
      delay: 2.3
    })
    gsap.to(".barrier", {
      color: "rgba(15, 15, 15, 1)",
      duration: 3,
      delay: 2.3
    })
    gsap.to(".section-wrapper-2 p", {
      color: "rgba(15, 15, 15, 1)",
      duration: 3,
      delay: 2.3
    })
    gsap.to(".go", {
      opacity: "1",
      backgroundColor: "rgba(247, 247, 247, 1)",
      delay: 4.18
    })
  })
  return (
    <div className="section container-fluid gx-0">
      <div className="section-wrapper">
        <div className="section-wrapper-1">
          <p>
            <span className="barrier"> Don’t let</span> tech become a barrier!
          </p>
        </div>
        <div className="section-wrapper-2">
          <p>
            We leverage AI as an enabler, building advanced tech that brings
            your ideas to life.
          </p>
        </div>
      </div>
      <div className="go">
        <img src={arr} alt="img" />
        <p>let’s go</p>
      </div>
    </div>
  );
};

export default Section;
