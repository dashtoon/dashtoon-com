import React from 'react';
// import Navbar from './Navbar'; // Import your Navbar component
import FooterMobile from '../Components/FooterMobile'; // Import your Footer component
import '../styles/careersMobileStyles.css'; // Import your stylesheet
import NavbarWeb from "../Components/NavbarWeb";
import NavbarMobile from "../Components/NavbarMobile";
const CareerPage = () => {
    return (
        <div className="career-page-mobile-container">
            <div className="career-page-mobile">
                <NavbarMobile/>
                {/* Heading Section */}
                <div className="heading-section-mobile">
                    <h1>Build the Future of Comics with us</h1>
                    <div className="explore-button-mobile">
                        <button>EXPLORE OPPORTUNITIES</button>
                    </div>
                </div>
            </div>
            <FooterMobile/>
        </div>
    );
};

export default CareerPage;
