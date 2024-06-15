import React from "react";
import "./building.css";
import neu from "../images/VIDYAKUL.jpg";
import down from "../images/down.png";
import ceo from "../images/Ellipse 7.png"
import tataneu from "../images/tataneu.png"
import arr from "../images/rightarrow.png"

function Building() {
  return (
    <div className="building container-fluid gx-0">
      <div className="building-heading">
        <h1>
          Building <span className="success-story">Success Stories </span>
          Together
        </h1>
      </div>
      <div className="building-section">
        <div className="neu">
          <img src={neu} alt="img" className="neu-image"/>
        </div>
        <div className="neu-content">
          <div className="neu-content-wrapper">
            <div className="neu-quote">
              <p>It was a real pleasure to work with the team at Es Magico. They created our logo and set uo our website in a relatively short period of time. They were very responsive to our needs and ever willing to change the website to our liking and requirements. Working with them to create the site was a smooth and seamless process.</p>
            </div>
            <div className="neu-ceo">
              <div className="neu-ceo-img">
                <img src={ceo} alt="img" />
              </div>
              <div className="neu-ceo-name">
                <p>Kirti M Jasani</p>
                <p>CEO, TATA Digital</p>
              </div>
            </div>
          </div>
          <div className="neu-footer">
            <div className="neu-footer-1">
              <div className="neu-footer-1-1">
                <img src={tataneu} alt="img" />
              </div>
              <div className="neu-footer-1-2">
                <p>Multi purpose super app</p>
                <p><span className="lakh">5 Lakh </span>Happy users</p>
              </div>
            </div>
            <div className="neu-footer-2">
              <img src={arr} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="down">
        <img src={down} alt="img" className="down-1" />
      </div>
    </div>
  );
}

export default Building;
