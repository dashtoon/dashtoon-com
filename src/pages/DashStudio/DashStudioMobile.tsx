// WebPage.js

import React, {useEffect, useState} from 'react';
import './DashStudioMobileStyles.css'; // Assuming you have a separate mobile stylesheet
import NavbarWeb from "../../Components/NavbarWeb";
import studioImage from "../../assets/images/Group 823createDashtoon.png";
import consistentImage from "../../assets/images/group-764-1036x747.png";
import soManyStylesImage from "../../assets/images/group-763-1256x829.png";
import aiNativeImage from "../../assets/images/group-770-1024x724.png";
import publishImage from "../../assets/images/publish.png"

import NavbarMobile from "../../Components/NavbarMobile";
import FooterMobile from "../../Components/FooterMobile";
import {useLocation, useNavigate} from "react-router-dom";
import {isProduction} from "../../Config/Config";
import {auth} from "../../firebaseConfig";
import LoginModal from "../../Components/LoginModal/LoginModal";

const StudioPageMobile = () => {
    const location  = useLocation();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        switch (window.location.hash) {
            case '#features':
                window.scrollTo({
                    top: document.getElementById('features')!.offsetTop,
                    behavior: "smooth"
                });
                break;
            default:
                break;
        }
    }, [location]);

    const handleButtonClick = (path :string) => {
        if (auth.currentUser && !auth.currentUser.isAnonymous) {
            window.location.href = path;
        } else {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        if (auth.currentUser && !auth.currentUser.isAnonymous) {
            window.location.href = '/studio/new-dashtoon';
            setShowModal(false);
        } else {
            setShowModal(false);
        }
    };

    return (
        <div>
        <div className="web-page-container-mobile">
                <NavbarMobile></NavbarMobile>

            <div className="heading-section-studio-mobile">
                <h2 className="heading-text-studio-mobile">
                    Create, Publish, Earn
                </h2>

                <p className="comic-title-mobile">
                    Dashtoon Studio makes comic creation feel like a breeze with AI magic!
                </p>
                <button className={"create-dashtoon-button-mobile"}
                        onClick={() => handleButtonClick('/studio/create')}> Create a Dashtoon
                </button>
                {showModal && <LoginModal open={true} onClose={handleCloseModal}/>}
                <img
                    className="heading-image-mobile"
                    src={studioImage}
                    alt="Dashtoon Studio Image"
                />
            </div>

            <div className="features-section-mobile" id={'features'}>
                <h2 className="features-heading-mobile">Features</h2>
                <div className="features-content-mobile">
                    {/* Text Section */}
                    <div className="text-section-mobile">
                        <p className="features-content-heading-mobile">CONSISTENT CHARACTERS</p>
                        <p className={"features-content-description-mobile"}>Choose characters from Dashtoon's character
                            library or create your own </p>
                    </div>

                    {/* Image Section */}
                    <div className="image-section-mobile">
                        <img
                            src={consistentImage}
                            alt="Feature Image"
                            style={{
                                width: '275px',
                                height: '199px'
                            }}
                        />
                    </div>
                </div>
                <div className="features-content-mobile">
                    {/* Text Section */}
                    <div className="text-section-mobile">
                        <p className="features-content-heading-mobile">SO MANY STYLES</p>
                        <p className={"features-content-description-mobile"}>
                            Pick a unique style to match your story
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="image-section-mobile">
                        <img
                            src={soManyStylesImage}
                            alt="Feature Image"
                            style={{
                                width: '297px',
                                height: '196px'
                            }}
                        />
                    </div>
                </div>

                <div className="features-content-mobile">
                    {/* Text Section */}
                    <div className="text-section-mobile">
                        <p className="features-content-heading-mobile">AI NATIVE TOOLS</p>
                        <p className={"features-content-description-mobile"}>
                            Convert storyboards into comics, remove backgrounds, fix faces & upscale images
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="image-section-mobile">
                        <img
                            src={aiNativeImage}
                            alt="Feature Image"
                            style={{
                                width: '334px',
                                height: '237px'
                            }}
                        />
                    </div>
                </div>

                <div className="features-content-mobile">
                    {/* Text Section */}
                    <div className="text-section-mobile">
                        <p className="features-content-heading-mobile">PUBLISH & MONETIZE</p>
                        <p className={"features-content-description-mobile"}>Publish comics & monetize through the Dashtoon Reader app </p>
                    </div>

                    {/* Image Section */}
                    <div className="image-section-mobile">
                        <img
                            src={publishImage}
                            alt="Feature Image"
                            style={{
                                width: '275px',
                                height: '199px'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="comic-section-container-mobile">
                <div className="comic-content-mobile">
                    <h1 className="comic-title-mobile">Make your first Dashtoon in minutes!</h1>
                    <button className={"comic-btn-container-mobile"}
                            onClick={() => handleButtonClick('/studio/home')}>
                        Get Started
                    </button>
                </div>
                <div className="youtube-video-container-mobile">
                    <iframe
                        className="youtube-video-mobile"
                        src="https://www.youtube.com/embed/3KPMuRVufjM?si=ClmfUtSdYV1c7oLg?rel=0&amp;amp;mute=1&amp;showinfo=0&amp;autoplay=1&amp;loop=0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className={"mainContainer-mobile"}>
                        <div className={"joinTitle-mobile"}>Join the Community</div>
                        <div className={"joinDescription-mobile"}>
                            See what others are creating. Reach out to the moderators in our discord server for faster access.
                        </div>
                        <button className={"joinButton-mobile"} onClick={()=> {window.open('https://discord.com/invite/DwBuquQABM')}}>Join Discord</button>
              </div>
        </div>
            <FooterMobile></FooterMobile>
        </div>
    );
};

export default StudioPageMobile;
