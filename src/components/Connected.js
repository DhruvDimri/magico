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
        < div className="connect-form">
          <div className="connect-form-1">
              <input type="text" className="want" value="I want to"/>
              <img src={down} alt="img" className="want-down"/>
          </div>
          
          <input type="text" value="Name"/>
          
          <input type="text" value="Name"/>
          
          <input type="text" value="Name"/>
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
