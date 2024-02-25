import React from 'react';
import {ReactComponent as InstagramIcon} from "../assets/icons/004-vimeo-social-logo.svg";
import {ReactComponent as FacebookIcon} from "../assets/icons/001-facebook-logo-button.svg";
import {ReactComponent as TikTokIcon} from "../assets/icons/ph_tiktok-logo.svg";
import {ReactComponent as YouTubeIcon} from "../assets/icons/ant-design_youtube-outlined.svg";
import {ReactComponent as DashtoonIcon} from "../assets/icons/Frame 4.svg";

import '../styles/footerMobileStyles.css';
import {Link, useNavigate} from "react-router-dom"; // Import the stylesheet

const FooterMobile = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <div className={'group'}>
            <div className="logo-section">
                <div className="logo-wrapper">
                    <DashtoonIcon className="logo-frame" aria-label="Frame"/>
                    <div className="logo-text">DASHTOON</div>
                </div>
                <div className="social-icons">
                    <span>
                    <Link to="https://www.facebook.com/groups/414812484208696/"
                          className="facebook-logo"><FacebookIcon className="vimeo-social"/></Link>
                    <Link to="https://www.instagram.com/dashtoon_/" className="vimeo-social"><InstagramIcon
                        className="vimeo-social"/></Link>
                    <Link to="https://www.youtube.com/@dashtoonapp" className="youtube-logo"><YouTubeIcon
                        className="vimeo-social"/></Link>
                    <Link to="https://www.tiktok.com/@dashtoon_app" className="tiktok-logo"><TikTokIcon
                        className="vimeo-social"/></Link>
                    </span>
                </div>
                <p className="copyright">©2024 Dashverse. All rights reserved.</p>
            </div>
            <div className="navigation-section-1">
                <div className="nav-category">
                    <div className="category-title">Company</div>
                    <div className="nav-links">
                        <span onClick={()=> {navigate('/company/#about')}}>
                                About
                        </span>
                        <span onClick={() => {
                            navigate('/company/#people')
                        }}>Team</span>
                        <span onClick={() => {
                            navigate('/company/#awards')
                        }}>Awards</span>
                        <span onClick={() => {
                            navigate('/company/#inTheNews')
                        }}>In the News</span>
                    </div>
                </div>
                <div className="nav-category">
                    <div className="category-title">Dash Studio</div>
                    <div className="nav-links">
                        <span onClick={() => {
                            navigate('/create/#features')
                        }}>Features</span>
                        <span onClick={() => (window.open('https://studio.dashtoon.ai/'))}>
                             Sign up
                        </span>
                        <span onClick={() => (navigate('/creators'))}>
                             Creators
                        </span>
                    </div>
                </div>
            </div>
                <div className="navigation-section-2">
                    <div className="nav-category">
                    <div className="category-title">Careers</div>
                    <div className="explore-opportunities">
                        <Link to={"https://dashtoon.notion.site/Work-Dashtoon-bb502d8112114e89b75573614c7ded36"}
                              className="explore-opportunities-web">Explore Opportunities</Link>
                    </div>
                </div>
            </div>
            </div>
            <div className={"legal-Mobile"}>
                <button className="transparentButtonMobile" onClick={() => {
                    navigate('/terms-and-conditions')
                }}>Terms & Conditions
                </button>
                <button className="transparentButtonMobile" onClick={() => {
                    navigate('/privacy-policy')
                }}>Privacy Policy
                </button>
                <button className="transparentButtonMobile" onClick={() => {
                    navigate('/bug-bounty')
                }}>Bug Bounty
                </button>
            </div>
        </footer>
    );
};

export default FooterMobile;
