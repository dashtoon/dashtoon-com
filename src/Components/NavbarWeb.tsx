import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/icons/Frame 4.svg'; // Import your logo icon
import '../styles/navbarWebStyles.css'
import useScrollVisibility from "../Hooks/useScroll";
import {useNavigate} from "react-router-dom";
const NavbarWeb = () => {

    const isVisible = useScrollVisibility();
    const navigate = useNavigate();

    // Function to navigate to a specific route
    const navigateTo = (route : string) => {
        navigate(`/${route}`);
    };


    return (
        <nav className="navbar-web-home" style={{top: `${isVisible ? '0' : '-100'}px`}}>
            <button className="nav-button-web-home logo-web-home" onClick={() => navigateTo('home')}>
                <LogoIcon className="logo-icon-web-home" />
            </button>

            <div className="nav-buttons-web-home">
                <button className="nav-button-web-home company-web-home" onClick={() => navigateTo('company')}>Company</button>
                <button className="nav-button-web-home dash-studio-web-home" onClick={() => window.open('https://www.dashtoon.ai/', '_blank')}>Dash Studio</button>
                <button className="nav-button-web-home careers-web-home" onClick={() => navigateTo('careers')} >Careers</button>
                <button className="nav-button-web-home login-web-home">Login</button>
            </div>
        </nav>
    );
};

export default NavbarWeb;
