import React from 'react';

import TCIcon from '../assets/icons/image 357.png';
import ForbesIcon from '../assets/icons/forbes.png';
import BackButton from "../assets/icons/carbon_arrow-up.png";
import '../styles/inTheNewsStyles.css';

const DashtoonInTheNews = () => {
    const openLink = (url : string) => {
        window.open(url, '_blank'); // Open the link in a new tab
    };

    return (
        <div className="in-the-news-container">
            <h2 className="news-heading">Dashtoon In the News</h2>

            <div className="news-component">
                <div className="news-item">
                    <div className="news-details"></div>
                    <img className={"news-icon"} src={TCIcon} alt={'TC'}></img>
                    <div className="news-content">
                        <div className='news-title'>
                            Tech Crunch | 2 Nov, 2023
                        </div>
                        <div className="news-text">
                            Dashtoon uses AI to turn storytellers into comics artists
                        </div>
                    </div>
                </div>
                <div>
                    <button className="goto-button" onClick={() => openLink('https://tcrn.ch/3FG2o9h')}><img className={'back-arrow'} src={BackButton}/></button>
                </div>
            </div>

            <div style={{width: '80%', height: '1px', margin:'3px', background: '#404040'}}/>

            <div className="news-component">
                <div className="news-item">
                    <div className="news-details"></div>
                    <img className={"news-icon"} src={ForbesIcon} alt={'TC'}></img>
                    <div className="news-content">
                        <div className='news-title'>
                            Forbes | 4 Nov, 2023
                        </div>
                        <div className="news-text">
                            Meet Dashtoon, The Start-up Helping Comic Creators To Tell...
                        </div>
                    </div>
                </div>
                <div>
                    <button className="goto-button" onClick={() => openLink('https://www.forbes.com/sites/davidprosser/2023/11/02/meet-dashtoon-the-start-up-helping-comic-creators-to-tell-their-stories/?sh=2bcec62c38e8')}><img className={"back-arrow"} src={BackButton}/></button>
                </div>
            </div>
        </div>
    );
};

export default DashtoonInTheNews;
