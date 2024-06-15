import React from "react";
import "./section.css";
import arr from "../images/down arrow.png"

const Section = () => {
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
