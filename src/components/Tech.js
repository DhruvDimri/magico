import React from 'react'
import "./tech.css"
import gratify from "../images/Group 36959.png"
import esto from "../images/esto.png"
import pyzo from "../images/pyzo.png"


function Tech() {
  return (
    <div className="tech container-fluid gx-0">
        <div className="tech-heading-1">
            <span className='main-one'>We are a one-stop shop for all things </span>
            <span className='main-two'>Tech</span>
        </div>

        <div className="partition-1">
            <div className="part-1">
                <div className="part-1-1">
                    <h3 className='product-dev'>Product Development</h3>
                    <h3 className='build-scale'>We Build Scalable Solutions</h3>
                </div>
                <div className="part-1-2">
                    <ul className='custom-list'>
                        <li>Tech Architure</li>
                        <li>AI Solutions</li>
                        <li>Mobile and Web Engineering</li>
                        <li>Analytics and Business Dashboards</li>
                    </ul>
                </div>
            </div>
            <div className="part-2">
            <div className="part-1-1">
                    <p className='product-dev'>Product Design</p>
                    <p className='build-scale'>We Craft Intuitive User Experiences</p>
                </div>
                <div className="part-1-2">
                    <ul className='custom-list'>
                        <li>Research</li>
                        <li>Wireframing and Design</li>
                        <li>Prototyping</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="partition-2">
            <div className="partition-2-heading">
                <h3 className='software-design'>Software as a Service</h3>
                <h4 className='products-design'>Our plug-and-play products enhance your existing product suite</h4>
            </div>
            <div className="partition-2-text">
                <div className="gratify">
                    <div>
                        <img src={gratify} alt="img" />
                    </div>
                    <div>
                        <p className='esto'>Gratify</p>
                        <p className='pyzo'>Rewards & Gamification SaaS</p>
                    </div>
                </div>
                <div className="gratify">
                <div>
                        <img src={esto} alt="img" />
                    </div>
                    <div>
                        <p className='esto'>Esto</p>
                        <p className='pyzo'>Smart Marketing & Sales SaaS</p>
                    </div>
                </div>
                <div className="gratify">
                <div>
                        <img src={pyzo} alt="img" />
                    </div>
                    <div>
                        <p className='esto'>Pyzo</p>
                        <p className='pyzo'>Conversational AI SaaS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tech
