// HomePageWeb.tsx

import React, {useEffect, useRef, useState} from 'react';
import FooterWeb from '../Components/FooterWeb';
import '../styles/homeWebStyles.css';
import NavbarWeb from "../Components/NavbarWeb";
import {ShowWithViewsAndEpisodeCount} from "../types/Show";
import {getPopularShows} from "../services/showService";
import {signInAnonymouslyAndGetToken} from "../firebaseConfig";
import { Box, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';
import {getCDNImageUrl} from "../services/cdnImage";
import {useNavigate} from "react-router-dom";
import Lottie from "lottie-react";
import LoaderAnimation from '../assets/animations/logoanimation.json';
import LoginModal from "../Components/LoginModal/LoginModal";

const HomePageWeb: React.FC = () => {
    const [shows, setShows] = useState<ShowWithViewsAndEpisodeCount[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            const response = await getPopularShows(20);
            setShows(response);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Scroll handler functions
    const scrollLeft = () => {
        scrollContainerRef.current?.scrollBy({
            left: -1000, // Or the width of a single item
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current?.scrollBy({
            left: 1000, // Or the width of a single item
            behavior: 'smooth',
        });
    };

    const openLink = (url : string) => {
        window.open(url, '_blank'); // Open the link in a new tab
    };
    const navigate = useNavigate();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoaderAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <div className="home-page-web">
            <div className="home-page-web-content">
                {isLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'black' }}>
                    <Lottie animationData={LoaderAnimation} style={{ width: '500px', height: '500px' }} />
                </div>}
                {/* 1. NavBar web */}
                    {/* Your NavBar content goes here */}
                    <NavbarWeb currentPage={''}></NavbarWeb>


                {/* 2. Heading section */}
                <div className="heading-section">
                    <p className="dashtoon-heading">Dashtoon</p>
                    <p className="heading-text">Dive into the Ultimate Comic Universe 🚀</p>
                </div>

                <div className={`popular-shows ${!isLoading && 'shows-loaded'}`}>

                    <div className={"arrow-left-button"} onClick={scrollLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                             fill="none">
                            <path
                                d="M15.3396 17L22.3521 24.0125L20.349 26.0157L11.3333 17L20.349 7.98432L22.3521 9.98749L15.3396 17Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <Box ref={scrollContainerRef}
                         sx={{
                             padding: '80px 0 20px', transition: 'height 0.5s ease-in-out',
                             display: 'flex',
                             gap: 2, // Adjust the gap between items
                             py: 1,
                             overflowX: 'auto', // Enable horizontal scrolling
                            scrollSnapType: 'x mandatory',
                            '&::-webkit-scrollbar': {display: 'none'},
                            width: 'calc(100vw - 250px)',
                        }}
                    >
                        {shows.map((item) => {
                            const imageUrl = item.metadata.find(s => s.type === 'WIDGET_THUMBNAIL_V2')?.value;
                            return imageUrl && (
                                <Card
                                    key={item.id}
                                    sx={{
                                        // Removed fixed width and height to allow content-based sizing// use your desired width
                                        flexShrink: 0,
                                        backgroundColor: 'transparent',
                                        borderColor: 'transparent',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => navigate(`/show/${item.id}`)}
                                >
                                    <CardActionArea sx={{borderRadius: '12px'}}>
                                        <CardMedia
                                            component="img"
                                            image={getCDNImageUrl(imageUrl, '227', '358')}
                                            alt={item.creator}
                                            sx={{
                                                borderRadius: '12px',
                                                objectFit: 'contain',
                                                transition: 'transform 0.3s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scale(1.03)',
                                                },
                                            }}
                                        />
                                        <Box sx={{whiteSpace: 'nowrap', mx: 1, marginTop: 1}}>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    color: '#C9C9C9',
                                                    fontFamily: 'Geologica',
                                                    fontSize: '20px',
                                                    fontWeight: 400,
                                                    lineHeight: '30px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {item.genre}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#999',
                                                    fontFamily: 'Outfit',
                                                    fontSize: '20px',
                                                    fontWeight: 400,
                                                    lineHeight: '30px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {item.creator}
                                            </Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            );
                        })}
                    </Box>

                    <div className={"arrow-right-button"} onClick={scrollRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path
                                d="M18.6604 17L11.6479 24.0125L13.651 26.0157L22.6667 17L13.651 7.98432L11.6479 9.98749L18.6604 17Z"
                                fill="white"/>
                        </svg>
                    </div>
                </div>

                <div className="review-container">
                    {/* a. Heading: What readers say */}
                    <h3 className="readers-say-heading">What readers say</h3>

                    {/* b. Review container below the heading */}
                    <div className="review-content-web">
                        <div className={"review-1"}>
                            <div className={"stars"}>
                                ⭐ ⭐ ⭐ ⭐ ⭐
                            </div>
                            <div className="review">
                                Good and useful entertainment application. Thanks to the team for
                                bringing this to us. Seamless excellent stories make us to be related.
                                Keeps me so excited to unlock the next episode. The expression and body
                                languages are excellently exhibited with pictures which makes me to
                                understand and hinders an eagerness to read.
                            </div>
                            <div className="reviewer">Christen Paulraj</div>
                        </div>

                        <div className={"review-2"}>
                            <div className={"stars"}>
                                ⭐ ⭐ ⭐ ⭐
                            </div>
                            <div className="review">
                                I love that they have so many choices to read on here. It’s a good
                                app, but I feel like you should get coins for logging in daily, have
                                about 5 episodes to unlock. I absolutely love the secret billionaire
                                series so hooked up on the series. A must read!
                            </div>
                            <div className="reviewer">Keona Vann</div>
                        </div>
                    </div>
                </div>

                {/* 5. Get App component */}
                <div className={"app-download-prompt"}>
                    <div className="get-app">
                        <div className="get-app-container">
                            <h3 className="get-app-heading">Get Dashtoon App</h3>
                            <p className="download-text">Download App From</p>
                            <div className="install-icons">
                                <div className={"icon-card"}
                                     onClick={() => openLink('https://play.google.com/store/apps/details?id=com.dashtoon.app')}>
                                    <svg className={'app-icons'} xmlns="http://www.w3.org/2000/svg" width="40" height="42"
                                     viewBox="0 0 40 42"
                                     fill="none">
                                    <path
                                        d="M0.552002 38.8392V2.54116C0.55225 2.46241 0.57617 2.38548 0.620763 2.32002C0.665357 2.25457 0.728638 2.2035 0.802672 2.17321C0.876706 2.14293 0.958198 2.13478 1.03693 2.1498C1.11566 2.16481 1.18812 2.20232 1.24523 2.25761L20.4929 20.6892L1.24523 39.1227C1.18812 39.178 1.11566 39.2155 1.03693 39.2305C0.958198 39.2456 0.876706 39.2374 0.802672 39.2071C0.728638 39.1768 0.665357 39.1258 0.620763 39.0603C0.57617 38.9949 0.55225 38.9179 0.552002 38.8392ZM28.5633 28.2629L4.42919 41.3191L4.41414 41.3274C3.99839 41.5491 3.60334 40.9968 3.94384 40.6753L22.8623 22.9124L28.5633 28.2629ZM3.94572 0.703163C3.60334 0.381744 3.99839 -0.170578 4.41602 0.0510902L4.43107 0.0594063L28.5633 13.1156L22.8623 18.468L3.94572 0.703163ZM38.3062 22.9983L31.5667 26.6429L25.2298 20.6892L31.5667 14.7384L38.3062 18.3802C40.1394 19.3749 40.1394 22.0036 38.3062 22.9983Z"
                                        fill="white"/>
                                </svg>
                                {/*<PlayStoreIcon className={"app-icons"}></PlayStoreIcon>*/}
                                <div className="install-prompt">
                                    <div className="install-header">Get it on</div>
                                    <div className="install-text">Google Play</div>
                                </div>
                            </div>
                            <div className={"icon-card"} onClick={() => openLink('https://apps.apple.com/us/app/dashtoon-comics-manga/id1661508865')}>
                                <svg className={"app-icons"} xmlns="http://www.w3.org/2000/svg" width="37" height="43" viewBox="0 0 37 43"
                                     fill="none">
                                    <path
                                        d="M36.8972 31.1556C36.2183 33.2925 35.1476 35.4294 33.6852 37.5662C31.4393 40.9169 29.2022 42.5922 26.9738 42.5922C26.1207 42.5922 24.9021 42.3187 23.3178 41.7716C21.8206 41.2246 20.5062 40.9511 19.3745 40.9511C18.3125 40.9511 17.0765 41.2331 15.6663 41.7973C14.2561 42.3785 13.1071 42.6691 12.2192 42.6691C9.57295 42.6691 6.95282 40.4553 4.35879 36.0277C1.79959 31.5659 0.519989 27.2665 0.519989 23.1295C0.519989 19.2319 1.50363 16.0351 3.47091 13.5392C5.43819 11.0776 7.91034 9.84672 10.8874 9.84672C12.1409 9.84672 13.6816 10.1031 15.5096 10.616C17.3202 11.1288 18.5215 11.3853 19.1134 11.3853C19.8968 11.3853 21.1416 11.0947 22.8477 10.5134C24.6235 9.93219 26.1294 9.64158 27.3655 9.64158C29.4372 9.64158 31.2914 10.1972 32.9279 11.3083C33.8332 11.9238 34.7385 12.7785 35.6438 13.8726C34.2684 15.018 33.2761 16.0266 32.6667 16.8984C31.5351 18.5053 30.9693 20.2747 30.9693 22.2064C30.9693 24.3262 31.5699 26.2323 32.7712 27.9247C33.9724 29.6171 35.3478 30.6941 36.8972 31.1556ZM27.0783 1.07698C27.0783 2.11978 26.8258 3.28224 26.3209 4.56436C25.7987 5.84649 24.9891 7.02604 23.8923 8.10303C22.9522 9.02616 22.0121 9.64158 21.072 9.94929C20.4278 10.1373 19.5225 10.2826 18.3561 10.3852C18.4083 7.83805 19.0873 5.64135 20.393 3.79509C21.6813 1.96592 23.8575 0.700895 26.9216 0C26.939 0.051285 26.9607 0.145307 26.9869 0.282067C27.013 0.418827 27.0347 0.51285 27.0521 0.564135C27.0521 0.632515 27.0565 0.71799 27.0652 0.82056C27.0739 0.92313 27.0783 1.0086 27.0783 1.07698Z"
                                        fill="#DDDDDD"/>
                                </svg>
                                {/*<PlayStoreIcon className={"app-icons"}></PlayStoreIcon>*/}
                                <div className="install-prompt">
                                    <div className="install-header">Download on the</div>
                                    <div className="install-text">Apple Store</div>
                                </div>
                            </div>
                        </div>
                        {/*<PlayStoreIcon className={"icon"}></PlayStoreIcon>*/}
                        {/*<AppStoreIcon className={"icon"}></AppStoreIcon>*/}
                    </div>
                    <div className="app-image-container">
                        {/* Content inside AppImageContainer */}
                        {/*<div className="phone-container">*/}
                            <img
                                src={require('../assets/images/iphone-with-episode.png')}
                                className="phone-image"
                                alt={"Episode"}
                            />
                        </div>

                </div>
                    </div>

            </div>
            {/* FooterWeb component */}
            <FooterWeb/>
        </div>
    );
};

export default HomePageWeb;
