import React, {useContext, useState} from 'react';
import { ReactComponent as LogoIcon } from '../assets/icons/Frame 4.svg'; // Import your logo icon
import '../styles/navbarWebStyles.css'
import useScrollVisibility from "../Hooks/useScroll";
import {useNavigate} from "react-router-dom";
import LoginModal from "./LoginModal/LoginModal";
import {AuthContext} from "../Provider/AuthProvider";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {resetTracking, trackEvent} from "../Utils/Analytics";
import {auth} from "../firebaseConfig";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {TrackingProperties} from "../Constants/TrackingProperties";

interface NavbarWebProps {
    currentPage: string;
}

const NavbarWeb : React.FC<NavbarWebProps> = ({ currentPage }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const authCurrent = useContext(AuthContext);
    const isVisible = useScrollVisibility();
    const navigate = useNavigate();

    // Function to navigate to a specific route
    const navigateTo = (route : string) => {

        const navLocation = route === '' ? 'Home' : route;
        trackEvent(
            {
                event: TrackingEvents.navigationClick,
                properties: {
                    name: navLocation,
                } as TrackingProperties,
            },
            'CONSUMER'
        );
        navigate(`/${route}`);
    };

    const [showModal, setShowModal] = useState(false);

    // Step 3: Function to show the modal
    const handleLoginClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleUserMenuToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        auth.signOut().then(() => {
            auth.updateCurrentUser(null);
            resetTracking();
            handleCloseUserMenu();

            // Refresh the page
            window.location.reload();
        });
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

                {authCurrent.currentUser &&  !authCurrent.currentUser?.isAnonymous ? (<>
                        <button className="nav-button-web-home login-web-home" onClick={handleUserMenuToggle}>
                            {authCurrent.currentUser.displayName || authCurrent.currentUser.email} <ArrowDropDownIcon />
                        </button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseUserMenu}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        sx={{
                            '& .MuiPaper-root': {
                                marginTop: '15px',
                                borderRadius: '20px',
                                padding: '2px 2px',
                            },

                        }}
                    >
                        <MenuItem onClick={() => handleLogout()} sx={{':hover': {
                                backgroundColor: 'transparent',
                            }, }} >Logout</MenuItem>
                    </Menu>
                        </>
                ) : (
                    <>
                        <button className="nav-button-web-home login-web-home" onClick={handleLoginClick}>
                            Login
                        </button>
                        {showModal && <LoginModal open={true} onClose={handleCloseModal} />}
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavbarWeb;
