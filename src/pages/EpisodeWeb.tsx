import React, {useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Episode, EpisodeResponse} from "../types/episodeData";
import {Panel} from "../types/Panel";
import {Show} from "../types/Show";
import '../styles/episodeWebStyles.css'
import {getEpisodesList, getPanelsByEpisodeId, getShowByIdReq} from "../services/showService";
import {FaArrowLeft} from "react-icons/fa";
import useAnonymousSignIn from '../Hooks/useAnonymousSignIn';

type RouteParams = {
    showId: string;
    episodeId: string;
};
const EpisodeWeb = () => {
    const { currentUser, signInAnonymouslyIfNeeded } = useAnonymousSignIn();
    const { showId, episodeId } = useParams<RouteParams>();
    const navigate = useNavigate();

    const [episodesInfo, setEpisodesInfo] = useState<EpisodeResponse[]>();
    const [panels, setPanels] = useState<Panel[]>([]);
    const [panelErrors, setPanelErrors] = useState<{ [key: string]: boolean }>({});

    const [showInformation, setShowInformation] = useState<Show>();
    useEffect(() => {
        const fetchPanels = async () => {
            try {
                // Fetch panels by episodeId
                await signInAnonymouslyIfNeeded();

                const metaData: string[] = ['DETAIL_PAGE_THUMBNAIL_V2']; // Specify the metadata you need
                // const show = await getShowByIdReq('SHOJjHch75Ecbqc6e8V', metaData);
                const show = await getShowByIdReq(showId ? showId : '', metaData);
                setShowInformation(show[0]);

                const panelData = await getPanelsByEpisodeId(episodeId? episodeId : '');
                setPanels(panelData);

                const episodeList = await getEpisodesList(showId ? showId : '');

                setEpisodesInfo(episodeList);
                // Process the loaded panels as needed

                console.log(panelData);

            } catch (error) {
                console.error('Error fetching panels:', error);
            }
        };
        fetchPanels();
        window.scrollTo(0, 0);
    }, [episodeId, showId])


    const handleImageError = (src: string) => {
        setPanelErrors(prevErrors => ({
            ...prevErrors,
            [src]: true,
        }));
    };

    const episodes: Episode[] = episodesInfo?.map((episodeResponse: EpisodeResponse) => episodeResponse.episode) || [];

    const currentEpisode :Episode | undefined = episodes?.find((episode) => episode.id === episodeId);
    const episodeName = currentEpisode?.name || 'Episode Name';
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
            navigate(`/show/${showId}/episode/${previousEpisodeId}`);
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
            navigate(`/show/${showId}/episode/${nextEpisodeId}`);
        }
    };

    const goToShowMobile = () => {
        navigate(`/show/${showId}`); // Replace with specific navigation if needed
    };

    return (
        <div className="episode-container-web">
            <div className="episode-navigation-bar-web top-bar-web">
                <button onClick={goToShowMobile} className="back-button-web">
                    <FaArrowLeft/>
                </button>
                <div className="nav-text-web">
                    <div>{showInformation?.name}</div>
                    <div >{currentEpisode?.name}</div>
                </div>
                <button onClick={goToPrevious} className="nav-button-web"
                        disabled={!currentEpisode || currentEpisode.sequence <= 1}>
                    Prev. Ep.
                </button>
                <button onClick={goToNext} className="nav-button-web"
                        disabled={!currentEpisode || currentEpisode.sequence >= 10}>
                    Next Ep.
                </button>
            </div>
            <div className="episode-images-web">
                {panels.map((panel) => (
                    <img
                        src={panel.imageUrl}
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