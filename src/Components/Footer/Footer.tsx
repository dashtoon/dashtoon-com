import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LogoText from '../../Assets/Images/dashtoon-logo.png';

const Footer = () => {
  const navigate = useNavigate();
  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/company/dashtoon/';
  };

  const handleTwitterClick = () => {
    window.location.href = 'https://twitter.com/dashtoon___';
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/dashtoon_/';
  };

  const handleYoutubeButton = () => {
    window.location.href = 'https://www.youtube.com/@dashtoon_/featured';
  };

  const handleMailButton = () => {
    window.open(
      'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=contact@dashtoon.com',
      '_blank'
    );
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '80%',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 'auto',
          marginTop: '5%',
        }}
      >
        <div>
          <div>
            <div className='logo-with-text1'>
              <img className='logo1' src={LogoText} alt='logo' />
              <span className='logo-text1'>DASHTOON</span>
            </div>
          </div>
          <div style={{ marginTop: '1%' }}>
            <b>Email: </b>
            <span className='mail' onClick={handleMailButton}>
              contact@dashtoon.com
            </span>
          </div>
          <div className='icon-buttons'>
            <a
              href='https://www.linkedin.com/company/dashtoon/'
              className='icon-button'
              onClick={handleLinkedInClick}
            >
              <FaLinkedin className='icon' />
            </a>
            <a
              href='https://twitter.com/dashtoon___'
              className='icon-button'
              onClick={handleTwitterClick}
            >
              <FaTwitter className='icon' />
            </a>
            <a
              href='https://www.instagram.com/dashtoon_/'
              className='icon-button'
              onClick={handleInstagramClick}
            >
              <FaInstagram className='icon' />
            </a>
            <a
              href='https://www.youtube.com/@dashtoon_/featured'
              className='icon-button'
              onClick={handleYoutubeButton}
            >
              <FaYoutube className='icon' />
            </a>
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              window.open(
                'https://dashtoon.notion.site/Work-Dashtoon-bb502d8112114e89b75573614c7ded36',
                '_blank'
              );
            }}
            className='mail'
          >
            Careers
          </div>
        </div>
      </div>
      <div
        style={{
          width: '80%',
          height: '1px',
          backgroundColor: 'white',
          margin: '20px auto',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '80%',
          margin: '20px auto',
          justifyContent: 'space-between',
        }}
      >
        <div>© 2022 Dashtoon. All right reserved.</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '30%',
            justifyContent: 'space-between',
          }}
        >
          <div
            className='link'
            onClick={() => {
              navigate('/privacy-policy');
            }}
          >
            privacy policy
          </div>
          <div
            className='link'
            onClick={() => {
              navigate('/terms-and-conditions');
            }}
          >
            terms and conditions
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
