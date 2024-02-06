import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Episode, EpisodeResponse} from "../types/episodeData";
import {Panel} from "../types/Panel";
import {Show} from "../types/Show";
import '../styles/episodeWebStyles.css'
import {getEpisodesList, getPanelsByEpisodeId, getShowByIdReq} from "../services/showService";
import {getCDNImageUrl} from "../services/cdnImage";
import EpisodeNavbarWeb from "../Components/NavbarEpisodeWeb";
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
import {trackEvent} from "../Utils/Analytics";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {TrackingProperties} from "../Constants/TrackingProperties";

type RouteParams = {
    showId: string;
    episodeId: string;
};
const EpisodeWeb = () => {
    const {showId, episodeId} = useParams<RouteParams>();
    const navigate = useNavigate();

    const [episodesInfo, setEpisodesInfo] = useState<EpisodeResponse[]>();
    const [panels, setPanels] = useState<Panel[]>([]);
    const [panelErrors, setPanelErrors] = useState<{ [key: string]: boolean }>({});

    const [showInformation, setShowInformation] = useState<Show>();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const fetchPanels = async () => {
            try {
                // Fetch panels by episodeId
                await signInAnonymouslyAndGetToken();

                const metaData: string[] = ['DETAIL_PAGE_THUMBNAIL_V2']; // Specify the metadata you need
                const show = await getShowByIdReq(showId ? showId : '', metaData);
                setShowInformation(show[0]);

                const panelData = await getPanelsByEpisodeId(episodeId ? episodeId : '');
                setPanels(panelData);

                const episodeList = await getEpisodesList(showId ? showId : '');

                setEpisodesInfo(episodeList);
                // Process the loaded panels as needed
                setLoading(false);
                // console.log(loading);


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
    const episodeName = currentEpisode?.name || 'Episode Name';

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

    // Logic to determine previous and next episode IDs
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
                        episodeName: episodeName,
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
                        episodeName: episodeName,
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
                    episodeName: currentEpisode?.name,
                } as TrackingProperties,
            },
            'CONSUMER'
        );
        navigate(`/show/${showId}`); // Replace with specific navigation if needed
    };


    return (
        <div className="episode-container-web">
            {loading && <div className="loading-screen-web">
                <img src="/logo192.png" alt="Loading Logo" className="loading-logo-web"/>
            </div>}
            <EpisodeNavbarWeb
                goToShowMobile={goToShowMobile}
                goToPrevious={goToPrevious}
                goToNext={goToNext}
                currentEpisode={currentEpisode}
                showInformation={showInformation}
                episodes={episodes}
            />
            <div className="episode-images-web">
                <div className="black-background-web">
                    <div className="black-background-web-text">
                        {currentEpisode?.name}
                    </div>
                </div>
                {panels.map((panel) => (
                    <img
                        key={panel.id}
                        src={getCDNImageUrl(panel.imageUrl, '')}
                        alt={`Panel ${panel.sequence}`}
                        onError={() => handleImageError(panel.imageUrl)}
                        className="episode-panel-web"
                    />
                ))}
            </div>

        </div>
    );
};

export default EpisodeWeb;