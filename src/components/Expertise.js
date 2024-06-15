import React from 'react'
import "./expertise.css"
import arrow from "../images/rightarrow.png"

function Expertise() {
  return (
    <div className="expertise container-fluid gx-0">
        <div className="expertise-heading">
            <h1>
                Insights and <span className='expertise-color'>Expertise</span> 
            </h1>
        </div>
        <div className="expertise-content">
            <div className="expertise-content-1">
                <div className="blank"></div>
                
                <div className="priority">
                    <p className='priority-1'>We prioritize products and harness cutting-edge stacks to engineer</p>
                    <p className='priority-2'>We prioritize products and harness cutting-edge stacks to engineer. We prioritize products and harness</p>
                </div>
                <div className="expertise-content-1-footer">
                    <div className="akshat">By Akshat</div>
                    <div className="akshat-time">1 hr ago</div>
                </div>
            </div>
            <div className="expertise-content-2">
                <div className="expertise-same">
                    <div className="expertise-head">
                        <div className="expertise-head-1">By <span className='peter'>Peter</span></div>
                        <div className="expertise-head-2">1 hr ago</div>
                    </div>
                    <div className="expertise-body">
                        <div className="expertise-body-1">We prioritize products and harness cutting-edge stacks to engineer</div>
                        <div className="expertise-body-2">
                            <img src={arrow} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="expertise-same">
                <div className="expertise-head">
                        <div className="expertise-head-1">By <span className='peter'>Peter</span></div>
                        <div className="expertise-head-2">1 hr ago</div>
                    </div>
                    <div className="expertise-body">
                        <div className="expertise-body-1">We prioritize products and harness cutting-edge stacks to engineer</div>
                        <div className="expertise-body-2">
                            <img src={arrow} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="expertise-same">
                <div className="expertise-head">
                        <div className="expertise-head-1">By <span className='peter'>Peter</span></div>
                        <div className="expertise-head-2">1 hr ago</div>
                    </div>
                    <div className="expertise-body">
                        <div className="expertise-body-1">We prioritize products and harness cutting-edge stacks to engineer</div>
                        <div className="expertise-body-2">
                            <img src={arrow} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="expertise-same">
                <div className="expertise-head">
                        <div className="expertise-head-1">By <span className='peter'>Peter</span></div>
                        <div className="expertise-head-2">1 hr ago</div>
                    </div>
                    <div className="expertise-body">
                        <div className="expertise-body-1">We prioritize products and harness cutting-edge stacks to engineer</div>
                        <div className="expertise-body-2">
                            <img src={arrow} alt="img" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Expertise