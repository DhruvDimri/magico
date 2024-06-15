import React from "react";
import "./founder.css";
import handshake from "../images/Rectangle 72.png";
import graph from "../images/Rectangle 73.png";
import bulb from "../images/bulb.png";
import tablet from "../images/tablet.png";
import earth from "../images/Rectangle 74.png";

function Founder() {
  return (
    <div className="container-fluid-md founder gx-0">
      <div className="row row-wrapper">
        <div className="col-md-10 founder-wrapper">
          <div className="founder-1">
            <h3 className="for-founder">01. For Founders</h3>
            <div className=" flex-positioning">
              <div className="founder-square">
                <img src={bulb} alt="image" />
              </div>

              <div className="founder-square">
                <img src={tablet} alt="image" />
              </div>

              <div className="founder-square">
                <img src={earth} alt="image" />
              </div>
            </div>
          </div>
          <div className="founder-2">
            <h3 className="for-founder">02. For Enterprises</h3>
            <div className="flex-position">
              
                <div className="founder-square-2">
                  <img src={handshake} alt="image" />
                </div>
              
              
                <div className="founder-square-3">
                  <img src={graph} alt="image" />
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
