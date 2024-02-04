import React, { useState } from 'react';
import '../styles/navbarMobileStyles.css'; // Import your stylesheet
import {ReactComponent as HomeButton} from "../assets/icons/Frame 4.svg";
import {ReactComponent as MenuButton} from "../assets/icons/fi_9121524.svg";

const MobileNavbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="mobile-navbar">
            <div className="home-button">
                <div className="home-icon"> <HomeButton></HomeButton> </div>
            </div>

            <div className="menu-button" onClick={toggleDropdown}>
                <div className="menu-icon"><MenuButton/></div>
                <span>Menu</span>

                {isDropdownVisible && (
                    <div className="dropdown">
                        <button>Home</button>
                        <button>Company</button>
                        <button>DashStudio</button>
                        <button>Careers</button>
                        <button>Login</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileNavbar;
