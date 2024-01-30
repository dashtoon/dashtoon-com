import React, {ReactNode} from 'react';
import {ReactComponent as InstagramIcon} from "../assets/icons/004-vimeo-social-logo.svg";
import {ReactComponent as FacebookIcon} from "../assets/icons/001-facebook-logo-button.svg";
import {ReactComponent as TikTokIcon} from "../assets/icons/ph_tiktok-logo.svg";
import {ReactComponent as YouTubeIcon} from "../assets/icons/ant-design_youtube-outlined.svg";
import {ReactComponent as DashtoonIcon} from "../assets/icons/Frame 4.svg";
import {Link} from 'react-router-dom';

import '../styles/footerWebStyles.css'; // Import the stylesheet

interface SocialIconProps {
    icon: ReactNode; // Accepts any ReactNode as the icon (SVG component in this case)
    url: string;
}


const FooterWeb = () => {
    return (
        <footer className="group-web">
            <div className="logo-section-web">
                <div className="logo-wrapper-web">
                    <DashtoonIcon className="logo-frame-web" aria-label="Frame"/>
                    <div className="logo-text-web">DASHTOON</div>
                </div>
                <p className="copyright-web">©2022 Dashverse. All rights reserved.</p>
                <div className="social-icons-web">
                    <Link to="https://www.facebook.com/groups/414812484208696/"
                          className="facebook-logo-web" ><FacebookIcon className="facebook-logo-web"/></Link>
                    <Link to="https://www.instagram.com/dashtoon_/" className="vimeo-social-web"><InstagramIcon className="vimeo-social-web"/></Link>
                    <Link to="https://www.youtube.com/@dashtoonapp" className="youtube-logo-web"><YouTubeIcon className="vimeo-social-web"/></Link>
                    <Link to="https://www.tiktok.com/@dashtoon_app" className="tiktok-logo-web"><TikTokIcon className="vimeo-social-web"/></Link>
                </div>
            </div>
            <div className="navigation-section-web">
                <div className="nav-category-web">
                    <div className="category-title-web">Company</div>
                    <div className="nav-links-web">
                        <span>
                            <Link to={"https://dashtoon.com/about-us"} className={"navigation-links"}>
                                About
                            </Link>
                        </span>
                        <span>Team</span>
                        <span>Awards</span>
                        <span>In the News</span>
                    </div>
                </div>
                <div className="nav-category-web">
                    <div className="category-title-web">Dash Studio</div>
                    <div className="nav-links-web">
                        <span>Features</span>
                        <span>
                            <Link to={" https://studio.dashtoon.ai/"} className={"navigation-links"}>
                             Sign up
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="nav-category-web">
                    <div className="category-title-web">Careers</div>
                    <div className="nav-links-web">
                        <Link to={"https://dashtoon.notion.site/Work-Dashtoon-bb502d8112114e89b75573614c7ded36"}
                              className="explore-opportunities-web">Explore Opportunities</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterWeb;
