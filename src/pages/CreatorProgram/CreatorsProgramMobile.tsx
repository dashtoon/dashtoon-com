import React, {useContext, useEffect, useState} from 'react';
import './CreatorsProgramMobile.css';
import FooterWeb from "../../Components/FooterWeb";
import {useLocation, useNavigate} from "react-router-dom";
import {auth, signInAnonymouslyAndGetToken} from "../../firebaseConfig";
import {getCDNImageUrl} from "../../services/cdnImage";
import {trackEvent} from "../../Utils/Analytics";
import {TrackingEvents} from "../../Constants/TrackingEvents";
import {AuthContext} from "../../Provider/AuthProvider";
import GlobalPromotionImage from "../../assets/images/Das (14).png";
import PersonalSuccessImage from "../../assets/images/Das (13).png";
import PublishAndEarnImage from "../../assets/images/Dashtoon Studio (10).webp";
import CommunityImage from "../../assets/images/Dashtoon Studio (15) 1.png";
import NavbarMobile from "../../Components/NavbarMobile";
import FooterMobile from "../../Components/FooterMobile";
import FooterMobileStudio from "../../Components/FooterWebStudioMobile";


const CreatorsProgramMobile = () => {
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
    }, [authCurrent]);


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

        const formElement = document.getElementById('creatorForm-mobile');
        formElement!.scrollIntoView({ behavior: 'smooth' });

    };

    return (
        <div>

            <div className="CreatorsContainerMobile">
                <NavbarMobile></NavbarMobile>
                {/* Heading Section */}
                <div className="heading-section-creators-mobile">

                    <h2 className="heading-text-creators-mobile">
                        Create, Publish & Earn
                    </h2>
                    <p>
                        <strong>With the Dashtoon Studio Creator’s Program, monetize your content and reach a global
                            audience</strong>
                    </p>
                    <button className={"create-dashtoon-button-mobile"}
                            onClick={() => handleButtonClick('Apply Now')}> Apply Now
                    </button>

                    <img
                        className="heading-image-mobile"
                        src={getCDNImageUrl('https://content.dashtoon.ai/assets/image.png', '1920')}
                        alt="Creators Image"
                    />
                </div>

                <div className="perksSection-mobile" id={'perks-mobile'}>
                    <h2 className="perksHeading-mobile" style={{marginBottom: '-40px'}}>Perks and benefits</h2>
                    <div className={"perksContainer-mobile"}>
                        <div className="photo-frame-mobile">
                            <img className="image-holder-mobile" alt="Rectangle"
                                 src={PublishAndEarnImage}/>
                            <p className="caption-container-mobile">Publish and earn with Dashtoon</p>
                            <p className="join-our-creators-mobile">
                                Join our creator's program today. Publish on the Dashtoon mobile app.
                            </p>
                        </div>
                        <div className="photo-frame-mobile">
                            <img className="image-holder-mobile" alt="Rectangle"
                                 src={GlobalPromotionImage}/>
                            <p className="caption-container-mobile">Global Promotion and Marketing Support</p>
                            <p className="join-our-creators-mobile">
                                As part of our creators program, we invest and promote promising dashtoons globally.
                            </p>
                        </div>
                    </div>
                    <div className={"perksContainer-mobile"}>
                        <div className="photo-frame-mobile">
                            <img className="image-holder-mobile" alt="Rectangle"
                                 src={PersonalSuccessImage}/>
                            <p className="caption-container-mobile">Personal Success Manager</p>
                            <p className="join-our-creators-mobile">
                                Get a dedicated success manager to help you navigate Dashtoon Studio, troubleshoot
                                problems, and advise on strategies for growth, engagement, and monetisation.
                            </p>
                        </div>
                        <div className="photo-frame-mobile">
                            <img className="image-holder-mobile" alt="Rectangle"
                                 src={CommunityImage}/>
                            <p className="caption-container-mobile">Exclusive Community and Networking events</p>
                            <p className="join-our-creators-mobile">
                                Gain access to our exclusive creator's lounge on Discord and access to invite-only workshops for ideas, collaboration and feedback from other top creators and the Dashtoon content team.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 20px',
                    marginBottom: '50px',
                    marginTop: '50px'
                }}>
                    <h2 className={"perksHeading-mobile"}> Get Started in 3 Steps</h2>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '64px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'center'}}>
                            <div className={"stepNumber-mobile"}> 1</div>
                            <div className={"stepHeading-mobile"}> Apply Now</div>
                            <div className={"stepText-mobile"}>Fill up the short form expressing your interest in
                                joining
                                the creator program
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'center'}}>
                            <div className={"stepNumber-mobile"}> 2</div>
                            <div className={"stepHeading-mobile"}> Selection</div>
                            <div className={"stepText-mobile"}>An invitation to join the Creator's Program shall be
                                extended
                                after review
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'center'}}>
                            <div className={"stepNumber-mobile"}> 3</div>
                            <div className={"stepHeading-mobile"}> Getting started</div>
                            <div className={"stepText-mobile"}>Your personal success manager will get you started on
                                your
                                Dashtoon journey
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"signUpSection-mobile"} id={'creatorForm-mobile'}>
                    <div className={"perksHeading-mobile"}> Apply now for the Creator's Program</div>
                    <div style={{padding: '0', overflow: 'scroll', justifySelf: 'center', alignSelf: 'center', borderRadius: '8px' , border: '0px transparent'}}>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSd1pVnYbeptNDgV_DHLkFKDBc-_pjyvwD78CwjTCvNTuftjQA/viewform?embedded=true"
                            width="300" height="400" />
                    </div>
                </div>


            </div>
            <FooterMobileStudio></FooterMobileStudio>
        </div>
    );
};

export default CreatorsProgramMobile;
