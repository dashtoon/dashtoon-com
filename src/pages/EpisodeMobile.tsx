import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import '../styles/episodeMobileStyles.css';
import {FaArrowLeft, FaStepBackward, FaStepForward} from 'react-icons/fa';
import {getEpisodesList, getPanelsByEpisodeId, getShowByIdReq} from "../services/showService";
import {Panel} from "../types/Panel";
import {Show} from "../types/Show";
import {Episode, EpisodeResponse} from "../types/episodeData";
import {getCDNImageUrl} from '../services/cdnImage';
import useScrollVisibility from "../Hooks/useScroll";
import {trackEvent} from "../Utils/Analytics";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
import {TrackingProperties} from "../Constants/TrackingProperties";

type RouteParams = {
    showId: string;
    episodeId: string;
};


const EpisodeMobile: React.FC = () => {
    const {showId, episodeId} = useParams<RouteParams>();
    const navigate = useNavigate();

    const [episodesInfo, setEpisodesInfo] = useState<EpisodeResponse[]>();
    const [panels, setPanels] = useState<Panel[]>([]);
    const [panelErrors, setPanelErrors] = useState<{ [key: string]: boolean }>({});

    const [loading, setLoading] = useState(true);
    const [showInformation, setShowInformation] = useState<Show>();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const fetchPanels = async () => {
            try {
                await signInAnonymouslyAndGetToken();

                const metaData: string[] = ['DETAIL_PAGE_THUMBNAIL_V2'];
                // const show = await getShowByIdReq('SHOJjHch75Ecbqc6e8V', metaData);
                const show = await getShowByIdReq(showId ? showId : '', metaData);
                setShowInformation(show[0]);

                const panelData = await getPanelsByEpisodeId(episodeId ? episodeId : '');
                setPanels(panelData);

                const episodeList = await getEpisodesList(showId ? showId : '');

                setEpisodesInfo(episodeList);
                setLoading(false);

            } catch (error) {
                console.error('Error fetching panels:', error);
            }
        };
        fetchPanels();

    }, [episodeId, showId])


    const handleImageError = (src: string) => {
        setPanelErrors(prevErrors => ({
            ...prevErrors,
            [src]: true,
        }));
    };

    const episodes: Episode[] = episodesInfo?.map((episodeResponse: EpisodeResponse) => episodeResponse.episode) || [];

    const currentEpisode: Episode | undefined = episodes?.find((episode) => episode.id === episodeId);

    useEffect(() => {
        if (showInformation && showId && currentEpisode && episodeId) {
            // console.log("entering show screen" + auth.currentUser?.uid);
            trackEvent(
                {
                    event: TrackingEvents.episodeOpened,
                    properties: {
                        userId: auth.currentUser?.uid,
                        showId: showId,
                        showName: showInformation?.name,
                        episodeId: episodeId,
                        episodeName: currentEpisode?.name,
                    } as TrackingProperties,
                },
                'CONSUMER'
            );
        }
    }, [showInformation, showId, currentEpisode, episodeId]);

    const getPreviousEpisodeId = () => {
        if (!currentEpisode || currentEpisode.sequence <= 1) return '';

        const previousEpisodeSequence = currentEpisode.sequence - 1;
        const previousEpisode = episodes?.find(
            (episode) => episode.sequence === previousEpisodeSequence
        );

        return previousEpisode?.id || '';
    };

    const previousEpisodeId = getPreviousEpisodeId();

    const goToPrevious = () => {
        if (currentEpisode && currentEpisode?.sequence >= 1) {
            trackEvent(
                {
                    event: TrackingEvents.buttonClicked,
                    properties: {
                        name: 'Prev. Episode',
                        userId: auth.currentUser?.uid,
                        showId: showId,
                        showName: showInformation?.name,
                        episodeId: currentEpisode?.id,
                        episodeName: currentEpisode?.name,
                    } as TrackingProperties,
                },
                'CONSUMER'
            );
            navigate(`/show/${showId}/episodes/${previousEpisodeId}`);
        }
    };

    const getNextEpisodeId = () => {
        if (!currentEpisode || currentEpisode.sequence >= 10) return '';

        const nextEpisodeSequence = currentEpisode.sequence + 1;
        const nextEpisode = episodes?.find(
            (episode) => episode.sequence === nextEpisodeSequence
        );

        return nextEpisode?.id || '';
    };

    const nextEpisodeId = getNextEpisodeId();

    const goToNext = () => {
        if (currentEpisode && currentEpisode?.sequence < 10) {
            trackEvent(
                {
                    event: TrackingEvents.buttonClicked,
                    properties: {
                        name: 'Next. Episode',
                        userId: auth.currentUser?.uid,
                        showId: showId,
                        showName: showInformation?.name,
                        episodeId: currentEpisode?.id,
                        episodeName: currentEpisode?.name,
                    } as TrackingProperties,
                },
                'CONSUMER'
            );
            navigate(`/show/${showId}/episodes/${nextEpisodeId}`);
        }
    };

    const goToShowMobile = () => {
        trackEvent(
            {
                event: TrackingEvents.buttonClicked,
                properties: {
                    name: 'Back-To-ShowScreen',
                    userId: auth.currentUser?.uid,
                    showId: showId,
                    showName: showInformation?.name,
                    episodeId: episodeId,
                    sequence: currentEpisode?.name,
                } as TrackingProperties,
            },
            'CONSUMER'
        );
        navigate(`/show/${showId}`); // Replace with specific navigation if needed
    };

    const isVisible = useScrollVisibility();

    const isFirstEp = !currentEpisode || currentEpisode.sequence <= 1;
    const isLastEp = !currentEpisode || currentEpisode.sequence >= Math.min(10, episodes.length);

    return (
        <div className="episode-container">
            {loading && <div className="loading-screen">
                <img src="/logo192.png" alt="Loading Logo" className="loading-logo"/>
            </div>}
            <div className="episode-navigation-bar top-bar" style={{top: `${isVisible ? '0' : '-100'}px`}}>
                <button onClick={goToShowMobile} className="back-button">
                    <FaArrowLeft/>
                </button>
                <div className="nav-text">
                    <div>{showInformation?.name}</div>
                    <div>{currentEpisode?.name}</div>
                </div>
            </div>
            <div className="episode-images">
                <div className="black-background">
                    <div className="black-background-text">{currentEpisode?.name}</div>
                </div>
                {panels.map((panel) => (
                    <img
                        key={panel.id}
                        src={getCDNImageUrl(panel.imageUrl, '')}
                        alt={`Panel ${panel.sequence}`}
                        onError={() => handleImageError(panel.imageUrl)}
                        className="episode-panel"
                    />
                ))}
            </div>
            <div className="episode-navigation-bar bottom-bar" style={{bottom: `${isVisible ? '0' : '-100'}px`}}>
                <div>
                    <button onClick={goToPrevious} className="nav-button"
                            style={{color: `${isFirstEp ? '#898989' : '#fff'}`}}
                            disabled={isFirstEp}><FaStepBackward/> Prev. Ep.
                    </button>
                </div>
                <div>
                    <button onClick={goToNext} className="nav-button"
                            style={{color: `${isLastEp ? '#898989' : '#fff'}`}}
                            disabled={isLastEp}>
                        Next Ep. <FaStepForward/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EpisodeMobile;