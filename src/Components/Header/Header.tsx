import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../../Assets/Images/dashtoon-logo.png';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Box} from "@mui/material";

const Header = () => {

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


  return (<Box></Box>
  );
};

export default Header;
