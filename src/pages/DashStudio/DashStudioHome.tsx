// WebPage.js

import React, {useEffect} from 'react';
import './DashStudioHome.css';
import NavbarWeb from "../../Components/NavbarWeb"; // Import your global styles if needed
import studioImage from "../../assets/images/Group 823createDashtoon.png";
import consistentImage from "../../assets/images/group-764-1036x747.png";
import soManyStylesImage from "../../assets/images/group-763-1256x829.png";
import aiNativeImage from "../../assets/images/group-770-1024x724.png";
import discordImage from "../../assets/images/discordImage.png"
import publishImage from "../../assets/images/publish.png"
import FooterWeb from "../../Components/FooterWeb";

const WebPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div>
        <div className="web-page-container">

                <NavbarWeb currentPage={'studio'}></NavbarWeb>


            {/* Heading Section */}
            <div className="heading-section-studio">
                <p className="heading-text-studio">
                    Dashtoon Studio makes comic creation feel like a breeze with AI magic!
                </p>
                <button className={"create-dashtoon-button"} onClick={() => (window.open('https://studio.dashtoon.ai/'))}> Create a Dashtoon</button>
                <img
                    className="heading-image"
                    src={studioImage} // Replace with your actual image path
                    alt="Dashtoon Studio Image"
                />
            </div>

            {/* Features Section */}
            <div className="features-section">
                <h2 className="features-heading">Features</h2>
                <div className="features-content">
                    {/* Text Section */}
                    <div className="text-section">

                        <p className="features-content-heading">CONSISTENT CHARACTERS</p>
                        <p className={"features-content-description"}>Choose characters from Dashtoon's character
                            library or create your own </p>
                    </div>

                    {/* Image Section */}
                    <div className="image-section">
                        <img
                            src={consistentImage}// Replace with your actual image path
                            alt="Feature Image"
                            style={{
                                width: "487px",
                                height: "351px"
                            }}
                        />
                    </div>
                </div>
                <div className="features-content">
                    {/* Text Section */}

                    {/* Image Section */}
                    <div className="image-section">
                        <img
                            src={soManyStylesImage} // Replace with your actual image path
                            alt="Feature Image"
                            style={{
                                width: "577px",
                                height: "380px"
                            }}
                        />
                    </div>
                    <div className="text-section" style={{alignItems: "flex-end"}}>
                        <p className="features-content-heading">SO MANY STYLES</p>
                        <p className={"features-content-description"} style={{textAlign: "right"}}>
                            Pick a unique style to match your story
                        </p>
                    </div>
                </div>

                <div className="features-content">
                    {/* Text Section */}
                    <div className="text-section">
                        <p className="features-content-heading">AI NATIVE TOOLS</p>
                        <p className={"features-content-description"}>
                            Convert storyboards into comics, remove backgrounds, fix faces & upscale images
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="image-section">
                        <img
                            src={aiNativeImage} // Replace with your actual image path
                            alt="Feature Image"
                            style={{
                                width: "406px",
                                height: "287px"
                            }}
                        />
                    </div>
                </div>

                <div className="features-content">
                    {/* Text Section */}

                    {/* Image Section */}
                    <div className="image-section">
                        <img
                            src={publishImage} // Replace with your actual image path
                            alt="Feature Image"
                            style={{
                                width: "602px",
                                height: "408px"
                            }}
                        />
                    </div>
                    <div className="text-section" style={{alignItems: "flex-end"}}>
                        <p className="features-content-heading">PUBLISH & MONETIZE</p>
                        <p className={"features-content-description"} style={{textAlign: "right"}}>
                            Publish comics & monetize through the Dashtoon Reader app
                        </p>
                    </div>
                </div>

            </div>

            <div className="comic-section-container">
                <div className="comic-content">
                    <h1 className="comic-title">Make your first comic in minutes!</h1>
                    <p className="comic-subtitle">
                        <strong>So, what are you waiting for?</strong>
                    </p>
                    <button className={"comic-btn-container"}
                            onClick={() => (window.open('https://studio.dashtoon.ai/'))}>
                        Get Started
                    </button>
                </div>
                <div className="youtube-video-container">
                    <iframe
                        className="youtube-video"
                        src="https://www.youtube.com/embed/3KPMuRVufjM?si=ClmfUtSdYV1c7oLg?rel=0&amp;amp;mute=1&amp;showinfo=0&amp;autoplay=1&amp;loop=0"
                        width='calc(100% - 150px)'
                        height="631"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>


            <div className={"discord-container-web"}>
                <img
                    src={discordImage}
                    alt="Your Image"
                    className={"joinDiscordImage"}
                />
                <div className={"discordInfoWeb"}>
                    <div className={"joinTitle"}>Join the Community</div>
                    <div className={"joinDescription"}>
                        Dashtoon Studio is currently in closed Beta. We are providing access
                        on a monthly basis!
                    </div>
                    <button className={"joinButton"} onClick={()=> {window.open('https://discord.com/invite/DwBuquQABM')}}>Join Discord</button>
                </div>
            </div>
        </div>
            <FooterWeb></FooterWeb>
            </div>
    );
};

export default WebPage;
