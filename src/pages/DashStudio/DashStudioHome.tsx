import React, {useContext, useEffect, useState} from 'react';
import './DashStudioHome.css';
import NavbarWeb from "../../Components/NavbarWeb";
import discordImage from "../../assets/images/discordImage.png"
import FooterWeb from "../../Components/FooterWeb";
import {useLocation, useNavigate} from "react-router-dom";
import LoginModal from "../../Components/LoginModal/LoginModal";
import {auth, signInAnonymouslyAndGetToken} from "../../firebaseConfig";
import {getCDNImageUrl} from "../../services/cdnImage";
import {trackEvent} from "../../Utils/Analytics";
import {TrackingEvents} from "../../Constants/TrackingEvents";
import {getMyShows} from "../../services/showService";
import {Show} from "../../types/Show";
import {AuthContext} from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import LoaderAnimation from "../../assets/animations/logoanimation.json";

const StudioPageWeb = () => {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [hasShows, setHasShows] = useState(false);
    const [buttonText, setButtonText] = useState("Create a Dashtoon");
    const authCurrent = useContext(AuthContext);

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

    useEffect(() => {
        const checkAuthAndTrackEvent = async () => {
            await auth.authStateReady();
            if (!auth.currentUser) {
                await signInAnonymouslyAndGetToken();
                setHasShows(false);
                setButtonText("Create a Dashtoon");
            }
            if(auth.currentUser && !auth.currentUser?.isAnonymous) {
                const shows = await getMyShows(auth.currentUser?.uid);
                if (shows && shows.length > 0) {
                    setHasShows(true);
                    setButtonText("Go to Studio");
                }
            }
            trackEvent(
                {
                    event: TrackingEvents.createScreenOpened,
                    properties: {},
                },
                'CONSUMER'
            );
        };

        checkAuthAndTrackEvent();
    }, [authCurrent]);



    const handleButtonClick = (path :string, buttonName: string) => {
        trackEvent(
            {
                event: TrackingEvents.buttonClickedStudioPage,
                properties: {
                    name : buttonName,
                },
            },
            'CONSUMER'
        );

        if (auth.currentUser && !auth.currentUser.isAnonymous) {
            trackEvent(
                {
                    event: TrackingEvents.redirectUserToStudio,
                    properties: {
                        name : buttonName,
                    },
                },
                'CONSUMER'
            );
            const redirectPath = hasShows ? '/studio' : path;
            window.location.href = redirectPath;
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
            {/*{isLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'black' }}>*/}
            {/*    <Lottie animationData={LoaderAnimation} style={{ width: '500px', height: '500px' }} />*/}
            {/*</div>}*/}
        <div className="web-page-container">

                <NavbarWeb currentPage={'create'}></NavbarWeb>


            {/* Heading Section */}
            <div className="heading-section-studio">

                <h2 className="heading-text-studio">
                    Create, Publish, Earn
                </h2>

                <p className="comic-subtitle">
                    <strong>Dashtoon Studio makes comic creation feel like a breeze with AI magic!</strong>
                </p>
                <button className={"create-dashtoon-button"}
                        onClick={() => handleButtonClick('/studio/new-dashtoon', 'createButton')}> {buttonText}
                </button>

                {showModal && <LoginModal open={true} onClose={handleCloseModal}/>}
                <img
                    className="heading-image"
                    src={getCDNImageUrl('https://content.dashtoon.ai/assets/Group%20823createDashtoon.png', '1920')} // Replace with your actual image path
                    alt="Dashtoon Studio Image"
                />
            </div>

            {/* Features Section */}
            <div className="features-section" id={'features'}>
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
                            src={getCDNImageUrl('https://content.dashtoon.ai/assets/group-764-1036x747.png', '487', '351')}// Replace with your actual image path
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
                            src={getCDNImageUrl('https://content.dashtoon.ai/assets/group-763-1256x829.png', '577', '380')} // Replace with your actual image path
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
                            src={getCDNImageUrl('https://content.dashtoon.ai/assets/group-770-1024x724.png', '406', '287')} // Replace with your actual image path
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
                            src={getCDNImageUrl('https://content.dashtoon.ai/assets/publish.png', '602', '408')}
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
                    {/*<h1 className="comic-title">Make your first Dashtoon in minutes!</h1>*/}
                    <p className="comic-subtitle">
                        <strong>Make your first Dashtoon in minutes!</strong>
                    </p>
                    <button className={"comic-btn-container"}
                            onClick={() => handleButtonClick('/studio/new-dashtoon', 'getStarted')}>
                        Get Started
                    </button>
                </div>
                <div className="youtube-video-container">
                    <iframe
                        className="youtube-video"
                        src="https://www.youtube.com/embed/3KPMuRVufjM?si=ClmfUtSdYV1c7oLg?rel=0&amp;amp;mute=1&amp;showinfo=0&amp;autoplay=1&amp;loop=0"
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
                    <button className={"joinButton"} onClick={()=> {

                        window.open('https://discord.com/invite/DwBuquQABM');}}>Join Discord</button>
                </div>
            </div>
        </div>
            <FooterWeb></FooterWeb>
        </div>
    );
};

export default StudioPageWeb;
