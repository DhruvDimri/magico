import React from 'react'
import "./footer.css"
import magico from "../images/magico.png"
import build from "../images/build.png"

function Footer() {
  return (
    <div className="footer container-fluid gx-0">
        <div className='footer-wrapper'>
            <div className="footer-about">
                <div className="footer-logo">
                    <img src={magico} alt="img" />
                </div>
                <div className="footer-logo-about">Launch your own Software As A Service Application with Flex Solutions.</div>
            </div>
            <div className="footer-blog">
                <div className="footer-blog-1">
                    <div className="footer-blog-1-1">Product</div>
                    <div className="footer-blog-1-2">
                        <div className="footer-feature">Features</div>
                        <div className="footer-feature">Solutions</div>
                        <div className="footer-feature">Pricing</div>
                        <div className="footer-feature">Tutorials</div>
                        <div className="footer-feature">Updates</div>
                    </div>
                </div>
                <div className="footer-blog-1">
                <div className="footer-blog-1-1">Remaining</div>
                    <div className="footer-blog-1-2">
                        <div className="footer-feature">Blog</div>
                        <div className="footer-feature">Newsletter</div>
                        <div className="footer-feature">Help Center</div>
                        <div className="footer-feature">Careers</div>
                        <div className="footer-feature">Support</div>
                    </div>
                </div>
            </div>
            <div className="footer-users">
                <div className="footer-users-content">Ready to delight your users?</div>
                <div className="footer-users-submit">
                    <div className="footer-users-submit-wrapper">
                        <div>Build</div>
                        <div>
                            <img src={build} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">&copy; 2021 Flex. All rights reserved.</div>
    </div>
  )
}

export default Footer