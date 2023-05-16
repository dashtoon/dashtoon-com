import React from 'react';
import './Home.css';
import Logo from '../../Assets/Images/image1.png';

import CustomizedButton from '../../Components/Button/Button';
import { Button, Divider } from '@mui/material';
import HorizontalImageList from '../../Components/HorizontalImageList/HorizontalImageList';
import RomanceImage from '../../Assets/Images/Romance.png';
import ThrillerImage from '../../Assets/Images/Thriller.png';
import FantasyImage from '../../Assets/Images/Fantasy.png';
import ActionImage from '../../Assets/Images/Action.png';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  const images = [
    { imageSrc: RomanceImage, name: 'Romance' },
    { imageSrc: ThrillerImage, name: 'Thriller' },
    { imageSrc: ActionImage, name: 'Action' },
    { imageSrc: FantasyImage, name: 'Comedy, Fantasy & Much More' },
  ];

  const GooglePlayButton: React.FC = () => {
    return (
      <a href='https://play.google.com/store'>
        <img
          src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
          alt='Get it on Google Play'
          className='google-play-button'
        />
      </a>
    );
  };

  const AppStoreButton: React.FC = () => {
    return (
      <a href='https://www.apple.com/app-store/'>
        <img
          src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png'
          alt='Download on the App Store'
          className='app-store-button'
        />
      </a>
    );
  };

  return (
    <>
      <div className='home'>
        <div style={{ paddingTop: '5%' }}></div>
        <div className='main-content'>
          <div className='content'>
            <div>The World's Best Comics Have a New Home</div>
            <div className='sub-content'>
              No more waiting for weeks, daily new episodes
            </div>
            <div className='buttons-container'>
              <GooglePlayButton />
              <AppStoreButton />
            </div>
          </div>
          <div>
            <img className='main-logo' src={Logo} alt='logo' />
          </div>
        </div>
        <div className='genre'>
          <h1>All the Genres you love</h1>
          <HorizontalImageList images={images} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
