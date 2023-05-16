import { Outlet, Link, useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../../Assets/Images/dashtoon-logo.png';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };

  return (
    <>
      <nav>
        {toggleMenu || screenWidth > 500 ? (
          <div className='navbar'>
            <div className='logo-with-text' onClick={() => navigate('/')}>
              <img className='logo' src={Logo} alt='logo' />
              <span className='logo-text'>DASHTOON</span>
            </div>
            <div className='links'>
              <div
                className='link'
                onClick={() => {
                  navigate('/');
                }}
              >
                home
              </div>
              <div
                className='link'
                onClick={() => {
                  navigate('/about-us');
                }}
              >
                about us
              </div>
              <div
                className='link'
                onClick={() => {
                  window.open(
                    'https://dashtoon.notion.site/Work-Dashtoon-bb502d8112114e89b75573614c7ded36',
                    '_blank'
                  );
                }}
              >
                careers
              </div>
            </div>
            <div style={{ width: '10%' }}></div>
            {/* <div>
              <button className='read-button'>Read Now</button>
            </div> */}
          </div>
        ) : (
          <div className='toggledNavbar'>
            <div className='linksToggled'>
              <div
                className='linkToggled'
                onClick={() => {
                  toggleNav();
                  navigate('/');
                }}
              >
                Home
              </div>
              <div
                className='linkToggled'
                onClick={() => {
                  toggleNav();
                  window.open(
                    'https://dashtoon.notion.site/Work-Dashtoon-bb502d8112114e89b75573614c7ded36',
                    '_blank'
                  );
                }}
              >
                Careers
              </div>
              <div
                className='linkToggled'
                onClick={() => {
                  toggleNav();
                  navigate('/about-us');
                }}
              >
                About Us
              </div>
            </div>
          </div>
        )}

        {toggleMenu ? (
          <IconButton
            className='btn'
            onClick={() => toggleNav()}
            aria-label='delete'
            size='large'
          >
            <MenuIcon sx={{ color: 'white' }} fontSize='inherit' />
          </IconButton>
        ) : (
          <IconButton
            className='btn'
            onClick={() => toggleNav()}
            aria-label='delete'
            size='large'
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        )}
      </nav>
    </>
  );
};

export default Header;
