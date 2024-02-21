import React, {useEffect} from 'react';
// import Navbar from './Navbar'; // Import your Navbar component
import FooterWeb from '../Components/FooterWeb'; // Import your Footer component
import '../styles/careersWebStyles.css'; // Import your stylesheet
import NavbarWeb from "../Components/NavbarWeb";
import {useLocation} from "react-router-dom";
import {trackEvent} from "../Utils/Analytics";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
const CareerPage = () => {

    const location = useLocation();

    const openLink = (url : string) => {
        window.open(url, '_blank'); // Open the link in a new tab
    };

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

    return (
        <div className="career-page-web-container">
            <NavbarWeb currentPage={'careers'}/>
            <div className="career-page-web">
                {/* Heading Section */}
                <div className="heading-section-web">
                    <h1>Build the Future of Comics with us</h1>
                    <div className="explore-button-web">
                        <button onClick={() => {openLink('https://dashtoon.notion.site/Work-Dashtoon-bb502d8112114e89b75573614c7ded36')}}>EXPLORE OPPORTUNITIES</button>
                    </div>
                </div>

            </div>
            {/*<div className="gradient-overlay-web"></div>*/}
            <FooterWeb/>
        </div>
    );
};

export default CareerPage;
