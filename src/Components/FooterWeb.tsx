import React, {ReactNode} from 'react';
import {ReactComponent as InstagramIcon} from "../assets/icons/004-vimeo-social-logo.svg";
import {ReactComponent as FacebookIcon} from "../assets/icons/001-facebook-logo-button.svg";
import {ReactComponent as TikTokIcon} from "../assets/icons/ph_tiktok-logo.svg";
import {ReactComponent as YouTubeIcon} from "../assets/icons/ant-design_youtube-outlined.svg";
import {ReactComponent as DashtoonIcon} from "../assets/icons/Frame 4.svg";
import {Link, useNavigate} from 'react-router-dom';

import '../styles/footerWebStyles.css'; // Import the stylesheet

interface SocialIconProps {
    icon: ReactNode; // Accepts any ReactNode as the icon (SVG component in this case)
    url: string;
}


const FooterWeb = () => {
    const navigate = useNavigate();
    return (
        <footer className={"footer-web"}>
            <div className={"group-web"}>
                <div className="logo-section-web">
                    <div className="logo-wrapper-web">
                        <DashtoonIcon className="logo-frame-web" aria-label="Frame"/>
                        <div className="logo-text-web">DASHTOON</div>
                    </div>
                    <p className="copyright-web">©2024 Dashverse. All rights reserved.</p>
                    <div className="social-icons-web">
                        <Link to="https://www.facebook.com/groups/414812484208696/"
                              className="facebook-logo-web"><FacebookIcon className="facebook-logo-web"/></Link>
                        <Link to="https://www.instagram.com/dashtoon_/" className="vimeo-social-web"><InstagramIcon
                            className="vimeo-social-web"/></Link>
                        <Link to="https://www.youtube.com/@dashtoonapp" className="youtube-logo-web"><YouTubeIcon
                            className="vimeo-social-web"/></Link>
                        <Link to="https://www.tiktok.com/@dashtoon_app" className="tiktok-logo-web"><TikTokIcon
                            className="vimeo-social-web"/></Link>
                    </div>
                </div>
                <div className="navigation-section-web">
                    <div className="nav-category-web">
                        <div className="category-title-web">Company</div>
                        <div className="nav-links-web">
                        <span onClick={() => {
                            navigate('/company/#about')
                        }}>
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
                    <div className="nav-category-web">
                        <div className="category-title-web">Dash Studio</div>
                        <div className="nav-links-web">
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
                    <div className="nav-category-web">
                        <div className="category-title-web">Careers</div>
                        <div className="nav-links-web">
                            <Link to={"https://dashtoon.notion.site/Work-Dashtoon-bb502d8112114e89b75573614c7ded36"}
                                  className={"explore-opportunities-web"}>Explore Opportunities</Link>
                        </div>
                    </div>
                    <div className="nav-category-web">
                        <div className="category-title-web">Authors</div>
                        <div className="nav-links-web">
                            <span onClick={() => {
                                navigate('/authors')
                            }}>Authors Program</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className={"legal-Web"}>
                <button className="transparentButton" onClick={() => {
                    navigate('/terms-and-conditions')
                }}>Terms & Conditions
                </button>
                <button className="transparentButton" onClick={() => {
                    navigate('/privacy-policy')
                }}>Privacy Policy
                </button>
                <button className="transparentButton" onClick={() => {
                    navigate('/bug-bounty')
                }}>Bug Bounty
                </button>
            </div>
        </footer>
    );
};

export default FooterWeb;
