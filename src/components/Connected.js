import React from "react";
import "./connected.css";
import down from "../images/down arrow.png";
import arrow from "../images/Arrow Down.png"

function Connected() {
  return (
    <div className="container-fluid connect gx-0">
      <div className="connect-wrapper">
        <div className="connect-head">
          <h1>
            Let’s stay <span className="connect-design">connected</span>
          </h1>
        </div>
        <div className="connect-form">
          <div className="connect-form-1">
            <div className="connect-form-1-inner">
              <div>I want to</div>
              <div>
                <img src={down} alt="img" />
              </div>
            </div>
          </div>
          <div className="connect-form-2">
          <div className="connect-form-2-inner">
              <div >Name</div>
          </div>
          </div>
          <div className="connect-form-2">
          <div className="connect-form-2-inner">
              <div >Email Address</div>
          </div>
          </div>
          <div className="connect-form-2">
          <div className="connect-form-2-inner">
              <div >+91 | 0000000000</div>
          </div>
          </div>
        </div>

        <div className="connect-submit">
            <div className="connect-submit-wrapper">
                <div className="connect-submit-text">Submit</div>
                <div className="connect-submit-image">
                    <img src={arrow} alt="img" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Connected;
