import React from "react";
import "./technology.css";
import setting from "../images/Group.png";
import watch from "../images/Group 36936.png";
import arrow1 from "../images/right_4682277 1.png"
import arr from "../images/arrow.png"
import ai from "../images/ai.png"
import phone from "../images/phone.png"

function Technology() {
  return (
    <div className="container-fluid technology gx-0">
      <div className="tech-heading">
        <h1 className="tech-content">
          We are disrupting technology as a service, and this is{" "}
          <span className="tech-highlight">how</span>
        </h1>
      </div>
      <div className="tech-wrapper">
        <div className="tech-box-1">
          <div className="box-1-wrapper">
            <div className="tech-img">
              <img src={setting} alt="img" />
            </div>
            <div className="tech-content-1">
              <p className="tech-content-heading">Modern Tech at the core</p>
              <p className="tech-content-para">
                We use the latest tech stacks, microservices architecture,
                open-source languages, and popular frameworks to build
                best-in-class products.
              </p>
              <span className="tech-arrow-align" >
                <img src={arrow1} alt="img" />
              </span>
            </div>
          </div>
        </div>
        <div className="tech-box-2 tech-boxes">
          <div className="box-2-wrapper">
            <div className="tech-img-2">
              <img src={watch} alt="img" />
            </div>
            <div className="tech-content-2">
                <p>Superfast Pace of Execution</p>
                <img src={arr} alt="img" className="tech-arrow-align-1 tech-arrow-align-1-1"/>
            </div>
          </div>
        </div>
        <div className="tech-box-3 tech-boxes">
        <div className="box-3-wrapper">
            <div className="tech-img-2">
              <img src={ai} alt="img" />
            </div>
            <div className="tech-content-3">
                <p>AI Expertise</p>
                <img src={arr} alt="img" className="tech-arrow-align-1"/>
            </div>
          </div>
        </div>
        <div className="tech-box-4 tech-boxes">
        <div className="box-2-wrapper">
            <div className="tech-img-2">
              <img src={phone} alt="img" />
            </div>
            <div className="tech-content-4">
                <p>Intuitive UX</p>
                <img src={arr} alt="img" className="tech-arrow-align-1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
