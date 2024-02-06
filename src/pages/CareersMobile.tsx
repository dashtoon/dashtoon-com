import React, {useEffect} from 'react';
// import Navbar from './Navbar'; // Import your Navbar component
import FooterMobile from '../Components/FooterMobile'; // Import your Footer component
import '../styles/careersMobileStyles.css'; // Import your stylesheet
import NavbarWeb from "../Components/NavbarWeb";
import NavbarMobile from "../Components/NavbarMobile";
const CareerPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
