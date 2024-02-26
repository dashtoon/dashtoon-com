import React, {useContext, useEffect, useState} from 'react';
import './CreatorsProgramWeb.css';
import NavbarWeb from "../../Components/NavbarWeb";
import discordImage from "../../assets/images/discordImage.png"
import FooterWeb from "../../Components/FooterWeb";
import {useLocation, useNavigate} from "react-router-dom";
import {auth, signInAnonymouslyAndGetToken} from "../../firebaseConfig";
import {getCDNImageUrl} from "../../services/cdnImage";
import {trackEvent} from "../../Utils/Analytics";
import {TrackingEvents} from "../../Constants/TrackingEvents";
import {AuthContext} from "../../Provider/AuthProvider";
import GlobalPromotionImage from "../../assets/images/Das (10).webp";
import PersonalSuccessImage from "../../assets/images/Dashtoon Studio (11).webp";
import PublishAndEarnImage from "../../assets/images/Dashtoon Studio (10).webp";
import CommunityImage from "../../assets/images/Dashtoon (1).webp";
import FooterWebStudio from "../../Components/FooterWebStudio";


const CreatorsProgramWeb = () => {
    const location = useLocation();
    const authCurrent = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const checkAuthAndTrackEvent = async () => {
            await auth.authStateReady();
            if (!auth.currentUser) {
                await signInAnonymouslyAndGetToken();
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
    }, []);


    const handleButtonClick = (buttonName: string) => {
        trackEvent(
            {
                event: TrackingEvents.buttonClickedStudioPage,
                properties: {
                    name: buttonName,
                },
            },
            'CONSUMER'
        );

        const formElement = document.getElementById('creatorForm');
        formElement!.scrollIntoView({ behavior: 'smooth' });

    };


    return (
        <div>

            <div className="CreatorsContainer">
                <NavbarWeb currentPage={'create'}></NavbarWeb>
                {/* Heading Section */}
                <div className="heading-section-creators">

                    <h2 className="heading-text-creators">
                        Create, Publish, Earn
                    </h2>
                    <p>
                        <strong>With the Dashtoon Studio Creator’s Program, monetize your content and reach a global
                            audience!</strong>
                    </p>
                    <button className={"create-dashtoon-button"}
                            onClick={() => handleButtonClick('Apply Now')}> Apply Now
                    </button>

                    <img
                        className="heading-image"
                        src={getCDNImageUrl('https://content.dashtoon.ai/assets/image.png', '1920')}
                        alt="Creators Image"
                    />
                </div>

                {/* Features Section */}
                <div className="perksSection" id={'perks'}>
                    <h2 className="perksHeading" style={{marginBottom: '-40px'}}>Perks and benefits</h2>
                    <div className={"perksContainer"}>
                        <div className="photo-frame">
                            <img className="image-holder" alt="Rectangle"
                                 src={PublishAndEarnImage}/>
                            <p className="caption-container">Publish and earn with Dashtoons</p>
                            <p className="join-our-creators">
                                Join our creator's program today. Publish your webcomic on the Dashtoon mobile to 2000
                                USD per month.
                            </p>
                        </div>
                        <div className="photo-frame">
                            <img className="image-holder" alt="Rectangle"
                                 src={GlobalPromotionImage}/>
                            <p className="caption-container">Global Promotion and Marketing Support</p>
                            <p className="join-our-creators">
                                As part of our creators program, Dashtoon invests and promotes promising creators across
                                various platforms globally.
                            </p>
                        </div>
                    </div>
                    <div className={"perksContainer"}>
                        <div className="photo-frame">
                            <img className="image-holder" alt="Rectangle"
                                 src={PersonalSuccessImage}/>
                            <p className="caption-container">Personal Success Manager</p>
                            <p className="join-our-creators">
                                Get a dedicated success manager to help you navigate Dashtoon Studio, troubleshoot
                                problems, and advise on strategies for growth, engagement, and monetisation.
                            </p>
                        </div>
                        <div className="photo-frame">
                            <img className="image-holder" alt="Rectangle"
                                 src={CommunityImage}/>
                            <p className="caption-container">Exclusive Community and Networking events</p>
                            <p className="join-our-creators">
                                Gain access to our exclusive creator's lounge on Discord and access to invite-only
                                workshops for ideas, collaboration, feedback from other top creators and the Dashtoon
                                content team.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 208px',
                    marginBottom: '150px',
                    marginTop: '150px'
                }}>
                    <h2 className={"perksHeading"}> Get Started in 3 Steps</h2>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '64px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left'}}>
                            <div className={"stepNumber"}> 1</div>
                            <div className={"stepHeading"}> Apply Now</div>
                            <div className={"stepText"}>Fill up the short form expressing your interest in joining
                                the creator program
                            </div>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left'}}>
                            <div className={"stepNumber"}> 2</div>
                            <div className={"stepHeading"}> Selection</div>
                            <div className={"stepText"}>An invitation to join the Creator’s Program shall be extended
                                after review
                            </div>
                        </div>


                        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left'}}>
                            <div className={"stepNumber"}> 3</div>
                            <div className={"stepHeading"}> Getting started</div>
                            <div className={"stepText"}>Your personal success manager will get you started on your
                                Dashtoon journey
                            </div>
                        </div>

                    </div>
                </div>
                <div className={"signUpSection"} id={'creatorForm'}>
                    <div className={"perksHeading"}> Apply now for the Creator’s Program</div>
                    <div style={{padding: '0', overflow: 'scroll', justifySelf: 'center', alignSelf: 'center'}}>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSd1pVnYbeptNDgV_DHLkFKDBc-_pjyvwD78CwjTCvNTuftjQA/viewform?embedded=true"
                            width="800px"
                            height="800px"
                            frameBorder="0"
                            title="Google Form"
                        />
                    </div>
                </div>

            </div>
            <FooterWebStudio></FooterWebStudio>
        </div>
);
};

export default CreatorsProgramWeb;
