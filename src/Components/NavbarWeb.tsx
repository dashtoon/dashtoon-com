import React, {useContext, useState} from 'react';
import { ReactComponent as LogoIcon } from '../assets/icons/Frame 4.svg'; // Import your logo icon
import '../styles/navbarWebStyles.css'
import useScrollVisibility from "../Hooks/useScroll";
import {useNavigate} from "react-router-dom";
import LoginModal from "./LoginModal/LoginModal";
import {AuthContext} from "../Provider/AuthProvider";


interface NavbarWebProps {
    currentPage: string;
}

const NavbarWeb : React.FC<NavbarWebProps> = ({ currentPage }) => {

    const auth = useContext(AuthContext);

    const isVisible = useScrollVisibility();
    const navigate = useNavigate();

    // Function to navigate to a specific route
    const navigateTo = (route : string) => {
        navigate(`/${route}`);
    };

    const [showModal, setShowModal] = useState(false);

    // Step 3: Function to show the modal
    const handleLoginClick = () => {
        console.log('hiii');
        setShowModal(true);
    };


    return (
        <nav className="navbar-web-home" style={{top: `${isVisible ? '0' : '-100'}px`}}>
            <button className={`nav-button-web-home logo-web-home ${currentPage === '' ? 'active' : ''}`} onClick={() => navigateTo('')}>
                <LogoIcon className="logo-icon-web-home" />
            </button>

            <div className="nav-buttons-web-home">

                <button
                    className={`nav-button-web-home dash-studio-web-home ${currentPage === '' ? 'active' : ''}`}
                    onClick={() => navigateTo('')}>Read
                </button>

                <button
                    className={`nav-button-web-home dash-studio-web-home ${currentPage === 'create' ? 'active' : ''}`}
                    onClick={() => navigateTo('create')}>Create
                </button>

                <button
                    className={`nav-button-web-home company-web-home ${currentPage === 'company' ? 'active' : ''}`}
                    onClick={() => navigateTo('company')}
                >Company
                </button>
                <button className={`nav-button-web-home careers-web-home ${currentPage === 'careers' ? 'active' : ''}`}
                        onClick={() => navigateTo('careers')}>Careers
                </button>

                {auth.currentUser ? (
                    <button className="nav-button-web-home logout-web-home">
                        {auth.currentUser.displayName || 'No Name'} {/* Fallback in case there is no displayName */}
                    </button>
                ) : (
                    <>
                        <button className="nav-button-web-home login-web-home" onClick={handleLoginClick}>
                            Login
                        </button>
                        {showModal && <LoginModal open={true} />}
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavbarWeb;
