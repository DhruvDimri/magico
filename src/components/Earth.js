import React from 'react'
import "./earth.css"
import globe from "../images/Globe.png"

function Earth() {
  return (
    <div className="container-fluid gx-0 earth">
        <div className="second-earth">
            <div className="earth-1">
                <h1>We have launched <span className='earth-color'>10+ products</span> in <span className='earth-color'>10+ countries</span></h1>
            </div>
            <div className="earth-2">
                <img src={globe} alt="img" className='earth-2-image'/>
            </div>
        </div>
    </div>

  )
}

export default Earth