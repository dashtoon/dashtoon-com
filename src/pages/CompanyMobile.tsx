import React, {useEffect, useState} from 'react';
import '../styles/companyMobileStyles.css';
import {Person, peopleData} from "../types/peopleData";
import FooterMobile from "../Components/FooterMobile";
import NavbarMobile from "../Components/NavbarMobile";
import {useLocation} from "react-router-dom";
import TCIcon from "../assets/icons/image 357.png";
import BackButton from "../assets/icons/carbon_arrow-up.png";
import ForbesIcon from "../assets/icons/forbes.png";
import DashtoonInTheNews from "../Components/DashtoonInTheNews";
import {trackEvent} from "../Utils/Analytics";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
import {getCDNImageUrl} from "../services/cdnImage";

const CompanyContentMobile = () => {

    const location = useLocation();
    const [showFullList, setShowFullList] = useState(false);

    // Function to toggle the full list
    const toggleFullList = () => {
        setShowFullList(!showFullList);
    };

    const openLink = (url : string) => {
        window.open(url, '_blank'); // Open the link in a new tab
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        switch (window.location.hash) {
            case '#about':
                window.scrollTo({
                    top: document.getElementById('about')!.offsetTop,
                    behavior: "smooth"
                });
                break;
            case '#people':
                window.scrollTo({
                    top: document.getElementById('people')!.offsetTop,
                    behavior: "smooth"
                });
                break;
            case '#awards':
                window.scrollTo({
                    top: document.getElementById('awards')!.offsetTop,
                    behavior: "smooth"
                });
                break;
            case '#inTheNews':
                window.scrollTo({
                    top: document.getElementById('inTheNews')!.offsetTop,
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
        <div className="company-content-mobile">

            <div className="about-mobile" id={"about"}>
                <NavbarMobile/>
                <div className="heading-about-mobile">
                    Pioneering the Comic Revolution
                </div>
                <p>
                    Dashtoon was founded in December 2022. Our mission is simple yet bold: to blend cutting-edge AI with
                    creative storytelling. Based in San Francisco and London, we're setting new standards in digital
                    comics, turning storytellers into artists with groundbreaking technology.
                </p>
            </div>

            <div className="people-mobile" id={'people'}>
                <h2>Meet the Minds</h2>
                <div className={`people-web-container-mobile ${showFullList ? 'expanded' : ''}`}>
                    {peopleData.slice(0, showFullList ? peopleData.length : 3).map((person, index) => (
                        <div key={person.id} className={`person-card-mobile ${index >= 3 && !showFullList ? 'hidden' : ''}`}>
                            <img className="person-image-mobile" src={getCDNImageUrl(person.imageSrc, '202', '202')} alt={person.name}/>
                            <div className={'person-details-mobile'}>
                            <div className="person-name-mobile">{person.name}</div>
                            <div className="person-position-mobile">{person.position}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={toggleFullList} className="view-more-button-mobile">
                    {showFullList ? 'View Less' : 'View More'}
                </button>
            </div>

            <div className="play-store-award-mobile">
                <div className="play-store-info-mobile">
                    <p>Dashtoon was awarded</p>
                    <p>“Best for Fun App”</p>
                </div>
                <div className="play-store-image-mobile"></div>
            </div>
            <div id={'inTheNews'}>
                <DashtoonInTheNews></DashtoonInTheNews>
            </div>
            <FooterMobile/>
        </div>
    );
};

export default CompanyContentMobile;
