import React, { useState } from 'react';
import '../styles/navbarMobileStyles.css'; // Import your stylesheet
import {ReactComponent as HomeButton} from "../assets/icons/Frame 4.svg";
import {ReactComponent as MenuButton} from "../assets/icons/fi_9121524.svg";
import {useNavigate} from "react-router-dom";

const MobileNavbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const navigate = useNavigate();
    const navigateTo = (route : string) => {
        navigate(`/${route}`);
    };

    return (
        <div className="mobile-navbar">
            <div className="home-button">
                <div className="home-icon" onClick={() => navigateTo('')}> <HomeButton></HomeButton> </div>
            </div>

            <div className="menu-button" onClick={toggleDropdown}>
                <div className="menu-icon"><MenuButton/></div>
                <span>Menu</span>

                {isDropdownVisible && (
                    <div className="dropdown">
                        <button onClick={() => navigateTo('')}>Home </button>
                        <button onClick={() => navigateTo('company')}>Company</button>
                        <button onClick={() => navigateTo('studio')}>DashStudio</button>
                        <button onClick={() => navigateTo('careers')}>Careers</button>
                        <button>Login</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileNavbar;
