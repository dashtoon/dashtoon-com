import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/episodeMobileStyles.css';
import { FaArrowLeft } from 'react-icons/fa';
import {getEpisodesList, getPanelsByEpisodeId, getShowByIdReq} from "../services/showService";
import {Panel} from "../types/Panel";
import {Show} from "../types/Show";
import {Episode, EpisodeResponse} from "../types/episodeData";
import {signInAnonymouslyAndGetToken} from "../firebaseConfig";
import useAnonymousSignIn from "../Hooks/useAnonymousSignIn";
import { getCDNImageUrl } from '../services/cdnImage';
type RouteParams = {
  showId: string;
  episodeId: string;
};


const EpisodeMobile: React.FC = () => {
  const { currentUser, signInAnonymouslyIfNeeded } = useAnonymousSignIn();
  const { showId, episodeId } = useParams<RouteParams>();
  const navigate = useNavigate();

  const [episodesInfo, setEpisodesInfo] = useState<EpisodeResponse[]>();
  const [panels, setPanels] = useState<Panel[]>([]);
  const [panelErrors, setPanelErrors] = useState<{ [key: string]: boolean }>({});

  const [loading, setLoading] = useState(true);
  const [showInformation, setShowInformation] = useState<Show>();
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPanels = async () => {
      try {
        await signInAnonymouslyIfNeeded();

        const metaData: string[] = ['DETAIL_PAGE_THUMBNAIL_V2'];
        // const show = await getShowByIdReq('SHOJjHch75Ecbqc6e8V', metaData);
        const show = await getShowByIdReq(showId ? showId : '', metaData);
        setShowInformation(show[0]);

        const panelData = await getPanelsByEpisodeId(episodeId? episodeId : '');
        setPanels(panelData);

        const episodeList = await getEpisodesList(showId ? showId : '');

        setEpisodesInfo(episodeList);
        setLoading(false);

        // console.log(panelData);

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

  const currentEpisode :Episode | undefined = episodes?.find((episode) => episode.id === episodeId);
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
      navigate(`/show/${showId}/episodes/${nextEpisodeId}`);
    }
  };

  const goToShowMobile = () => {
    navigate(`/show/${showId}`); // Replace with specific navigation if needed
  };



  return (
    <div className="episode-container">
      {loading && <div className="loading-screen">
        <img src="/logo192.png" alt="Loading Logo" className="loading-logo"/>
      </div>}
      <div className="episode-navigation-bar top-bar">
        <button onClick={goToShowMobile} className="back-button">
          <FaArrowLeft/>
        </button>
        <div className="nav-text">
          <div>{showInformation?.name}</div>
          <div>{currentEpisode?.name}</div>
        </div>
      </div>
      <div className="episode-images">
        {panels.map((panel) => (
            <img
                src={ getCDNImageUrl(panel.imageUrl, '')}
                alt={`Panel ${panel.sequence}`}
                onError={() => handleImageError(panel.imageUrl)}
                className="episode-panel"
            />
        ))}
      </div>
      <div className="episode-navigation-bar bottom-bar">
        <button onClick={goToPrevious} className="nav-button"
                disabled={!currentEpisode || currentEpisode.sequence <= 1}>Prev. Ep.
        </button>
        <button onClick={goToNext} className="nav-button" disabled={!currentEpisode || currentEpisode.sequence >= 10}>Next Ep.</button>
      </div>
    </div>
  );
};

export default EpisodeMobile;