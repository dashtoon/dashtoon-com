import React from 'react';
import {FaArrowLeft} from 'react-icons/fa';
import {Episode} from "../types/episodeData";
import {Show} from "../types/Show";
import '../styles/episodeWebStyles.css'
import {FaStepForward, FaStepBackward} from "react-icons/fa";
import useScrollVisibility from "../Hooks/useScroll";

type NavbarProps = {
    goToShowMobile: () => void;
    goToPrevious: () => void;
    goToNext: () => void;
    currentEpisode?: Episode;
    showInformation?: Show;
    episodes: Episode[];
};

const EpisodeNavbarWeb: React.FC<NavbarProps> = ({
                                                     goToShowMobile,
                                                     goToPrevious,
                                                     goToNext,
                                                     currentEpisode,
                                                     showInformation,
                                                     episodes,
                                                 }) => {

    const isVisible = useScrollVisibility();

    const isFirstEp = !currentEpisode || currentEpisode.sequence <= 1;
    const isLastEp = !currentEpisode || currentEpisode.sequence >= Math.min(10, episodes.length);

    return (
        <div className={`episode-navigation-bar-web top-bar-web`} style={{top: `${isVisible ? '0' : '-100'}px`}}>
            <button onClick={goToShowMobile} className="back-button-web">
                <FaArrowLeft/>
            </button>
            <div className="nav-text-web">
                <div>{showInformation?.name}</div>
                <div>{currentEpisode?.name}</div>
            </div>
            <div className="navigation-button-container-web">
                <button onClick={goToPrevious} className="nav-button-web" style={{color: `${isFirstEp ? '#898989' : '#fff'}`}}
                        disabled={isFirstEp}>
                    <span><FaStepBackward/> Prev. Ep.</span>
                </button>
                <button onClick={goToNext} className="nav-button-web" style={{color: `${isLastEp ? '#898989' : '#fff'}`}}
                        disabled={isLastEp}>
                    <span> Next Ep. <FaStepForward/> </span>
                </button>
            </div>
        </div>
    );
};

export default EpisodeNavbarWeb;
