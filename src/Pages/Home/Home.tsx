import React from 'react';
import './Home.css'
import Logo from '../../Assets/Images/logotext.png'
import CustomizedButton from '../../Components/Button/Button';

const Home = () => {

    const handleMailButton = () => {
        window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=contact@dashtoon.com', '_blank')
    }

    const handleComingSoonButton = () => {
        
    }
    return(
        <>
            <div className='home'>
                <div style={{paddingTop: '5%'}}>
                    <img className='main-logo' src={Logo} alt="logo"/>
                </div>
                <div className='content'>
                    Lightning Fast Comics, Like Never 
                    Before
                </div>
                <div className='sub-content'>
                    Dashtoon aims to revolutionise webcomics and introduce you to storytelling like never before! 
                </div>
                <div className='actions'>
                   <div>
                   <CustomizedButton onClick={handleComingSoonButton}title='Coming Soon!' color='white' backgroundColor='#9f0521' hoverBackgroundColor='#ca0227' type='none'/>
                    </div>
                    <div style={{paddingTop: '10px'}}>
                    <CustomizedButton onClick={handleMailButton} title='contact@dashtoon.com' color='white' backgroundColor='#9f0521' hoverBackgroundColor='#ca0227' type='mail'/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home