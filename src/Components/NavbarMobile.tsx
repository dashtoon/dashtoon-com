import React, {useContext, useState} from 'react';
import '../styles/navbarMobileStyles.css'; // Import your stylesheet
import {ReactComponent as HomeButton} from "../assets/icons/Frame 4.svg";
import {ReactComponent as MenuButton} from "../assets/icons/fi_9121524.svg";
import {useNavigate} from "react-router-dom";
import LoginModal from "./LoginModal/LoginModal";
import {AuthContext} from "../Provider/AuthProvider";
import {resetTracking} from "../Utils/Analytics";
import {auth} from "../firebaseConfig";

const MobileNavbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const authCurrent = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false);

    const handleLoginClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        console.log("close");
        setShowModal(false);
    };


    const handleLogout = () => {
        auth.signOut().then(() => {
            auth.updateCurrentUser(null);
            resetTracking();
            // Refresh the page
            window.location.reload();
        });
    };

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
                {showModal && <LoginModal open={true} onClose={handleCloseModal} />}

                {isDropdownVisible && (
                    <div className="dropdown">
                        <button onClick={() => navigateTo('')}>Read</button>
                        <button onClick={() => navigateTo('create')}>Create</button>
                        <button onClick={() => navigateTo('company')}>Company</button>
                        <button onClick={() => navigateTo('careers')}>Careers</button>
                        {authCurrent.currentUser &&  !authCurrent.currentUser?.isAnonymous ? (
                                <button  onClick={handleLogout}>
                                    Logout
                                </button>
                        ) : (
                            <>
                                <button onClick={handleLoginClick}>
                                    Login
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileNavbar;
