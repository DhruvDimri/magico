import React from "react";
import "./navbar.css"
import grp57 from "../images/Group 57.png"
import map from "../images/Map Arrow Up.png"

function Navbar() {
  return (
    <>
    <div className="container-fluid gx-0 navbar-wrapper">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid nav-position">
          <a className="navbar-brand" href="/">
            <img src={grp57} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse box" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Page 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Page 4
                </a>
              </li>
              <li className="nav-item map">
                <a className="btn-navbar" aria-current="page" href="/">
                  CTA
                </a>
                <img src={map} alt="arrow" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
