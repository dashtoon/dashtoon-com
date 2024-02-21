import React, {useEffect} from 'react';
import FooterMobile from '../Components/FooterMobile';
import '../styles/careersMobileStyles.css';
import NavbarMobile from "../Components/NavbarMobile";
import {trackEvent} from "../Utils/Analytics";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {useLocation} from "react-router-dom";
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
const CareerPage = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const checkAuthAndTrackEvent = async () => {
            await auth.authStateReady();
            if (!auth.currentUser) {
                await signInAnonymouslyAndGetToken();
            }

            trackEvent(
                {
                    event: TrackingEvents.careerScreenOpened,
                    properties: {},
                },
                'CONSUMER'
            );
        };

        checkAuthAndTrackEvent();
    }, []);

    const openLink = (url : string) => {
        window.open(url, '_blank'); // Open the link in a new tab
    };
    return (
        <div className="career-page-mobile-container">
            <div className="career-page-mobile">
                <NavbarMobile/>
                {/* Heading Section */}
                <div className="heading-section-mobile">
                    <h1>Build the Future of Comics with us</h1>
                    <div className="explore-button-mobile">
                        <button onClick={() => {openLink('https://dashtoon.notion.site/Work-Dashtoon-bb502d8112114e89b75573614c7ded36')}}>EXPLORE OPPORTUNITIES</button>
                    </div>
                </div>
            </div>
            <FooterMobile/>
        </div>
    );
};

export default CareerPage;
