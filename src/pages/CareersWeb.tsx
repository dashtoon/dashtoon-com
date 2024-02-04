import React from 'react';
// import Navbar from './Navbar'; // Import your Navbar component
import FooterWeb from '../Components/FooterWeb'; // Import your Footer component
import '../styles/careersWebStyles.css'; // Import your stylesheet
import NavbarWeb from "../Components/NavbarWeb";
const CareerPage = () => {
    const openLink = (url : string) => {
        window.open(url, '_blank'); // Open the link in a new tab
    };

    return (
        <div className="career-page-web-container">
            <NavbarWeb/>
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
