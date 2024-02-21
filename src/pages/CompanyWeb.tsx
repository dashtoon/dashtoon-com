import React, {useEffect, useRef, useState} from 'react';
import NavbarWeb from '../Components/NavbarWeb'; // Import your Navbar component
import FooterWeb from '../Components/FooterWeb'; // Import your Footer component
import '../styles/companyWebStyles.css';
import {Person, peopleData} from "../types/peopleData";
import DashtoonInTheNews from "../Components/DashtoonInTheNews";
import {useLocation} from "react-router-dom";
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
import {trackEvent} from "../Utils/Analytics";
import {TrackingEvents} from "../Constants/TrackingEvents";


const CompanyContentWeb = () => {
    const location = useLocation();
    const [showFullList, setShowFullList] = useState(false);

    // Function to toggle the full list
    const toggleFullList = () => {
        setShowFullList(!showFullList);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        switch (window.location.hash) {
            case '#about':
                window.scrollTo({
                    top:document.getElementById('about')!.offsetTop,
                    behavior:"smooth"
                });
                break;
            case '#people':
                window.scrollTo({
                    top:document.getElementById('people')!.offsetTop,
                    behavior:"smooth"
                });
                break;
            case '#awards':
                window.scrollTo({
                    top:document.getElementById('awards')!.offsetTop,
                    behavior:"smooth"
                });
                break;
            case '#inTheNews':
                window.scrollTo({
                    top:document.getElementById('inTheNews')!.offsetTop,
                    behavior:"smooth"
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
            }

            trackEvent(
                {
                    event: TrackingEvents.companyScreenOpened,
                    properties: {},
                },
                'CONSUMER'
            );
        };

        checkAuthAndTrackEvent();
    }, []);

    return (
        <div className="company-content-web">
            <NavbarWeb currentPage={'company'}/>
            <div className="about" id={"about"}>
                <div className="heading-about-web">
                    Pioneering the Comic Revolution
                </div>
                <p>
                    Dashtoon was founded in December 2022. Our mission is simple yet bold: to blend cutting-edge AI with
                    creative storytelling. Based in San Francisco and London, we're setting new standards in digital
                    comics, turning storytellers into artists with groundbreaking technology.
                </p>
            </div>

            <div className="people-web" id={'people'}>
                <h2>Meet the Minds</h2>
                <div className={`people-web-container ${showFullList ? 'expanded' : ''}`}>
                    {peopleData.map((person, index) => (
                        <div key={person.id} className={`person-card ${index >= 3 && !showFullList ? 'hidden' : ''}`}>
                            <img className="person-image" src={person.imageSrc} alt={person.name}/>
                            <div className={'person-details'}>
                            <div className="person-name">{person.name}</div>
                            <div className="person-position">{person.position}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={toggleFullList} className="view-more-button">
                    {showFullList ? 'View Less' : 'View More'}
                </button>
            </div>

            <div className="play-store-award" id={"awards"}>
                <div className="play-store-info">
                    <p>Dashtoon was awarded</p>
                    <p>“Best for Fun App”</p>
                </div>
                <div className="play-store-image"></div>
            </div>
            <div id={"inTheNews"}>
                <DashtoonInTheNews></DashtoonInTheNews>
            </div>
            <FooterWeb/>
        </div>
    );
};

export default CompanyContentWeb;
