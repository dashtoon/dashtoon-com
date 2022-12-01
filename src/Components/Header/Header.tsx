import { Outlet, Link, useNavigate } from "react-router-dom";
import './Header.css'
import Logo from '../../Assets/Images/dashtoon-logo.png'
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
    const navigate = useNavigate();

    const [toggleMenu, setToggleMenu] = useState(true)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
        console.log(toggleMenu)
      }

  return (
    <>
        <nav>
        {(toggleMenu || screenWidth > 500) ? (
        <div className="navbar">
            <div >
                <img className="logo" src={Logo} alt="logo"/>
            </div>
            <div className="links">
                <div className="link" onClick={() => { navigate('/')}}>
                    Home
                </div>
                <div className="link" onClick={() => {navigate('/about-us'); }}> 
                    About Us
                </div>
            </div>
        </div>
        ): 
        (
            
            <div className="toggledNavbar">
           
            <div className="linksToggled">
                <div className="linkToggled" onClick={() => {toggleNav(); navigate('/')}}>
                    Home
                </div>
                <div className="linkToggled" onClick={() => {toggleNav(); navigate('/about-us'); }}> 
                    About Us
                </div>
            </div>
        </div>
        )}




            {toggleMenu ? (   <IconButton className="btn" onClick={() => toggleNav()} aria-label="delete" size="large">
     <MenuIcon fontSize="inherit" />
</IconButton>) : (   <IconButton className="btn" onClick={() => toggleNav()} aria-label="delete" size="large">
     <CloseIcon fontSize="inherit" />
</IconButton>)}
     
        </nav>

    </>
  )
};

export default Header;