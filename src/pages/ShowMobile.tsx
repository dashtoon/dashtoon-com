import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import '../styles/mobileStyles.css';
import EpisodeListMobile from './EpisodeListMobile';

import {getEpisodesList, getPanelsByEpisodeId, getShowByIdReq} from '../services/showService';
import {Episode, EpisodeResponse} from "../types/episodeData";
import {Show} from '../types/Show';
import useAnonymousSignIn from '../Hooks/useAnonymousSignIn';

import {getCDNImageUrl} from "../services/cdnImage";


const ShowMobile = () => {
    const {currentUser, signInAnonymouslyIfNeeded} = useAnonymousSignIn();
    let {showId} = useParams<{ showId?: string }>();
    const navigate = useNavigate();

    const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

    const toggleDescription = () => {
        setDescriptionExpanded(!isDescriptionExpanded);
    };

    const [loading, setLoading] = useState(true);
    const [episodesInfo, setEpisodesInfo] = useState<EpisodeResponse[]>();
    const [showInformation, setShowInformation] = useState<Show>();

    useEffect(() => {
        const fetchShow = async () => {

            try {

                await signInAnonymouslyIfNeeded();  // ensure Firebase anonymous auth
                const metaData: string[] = ['BANNER_THUMBNAIL_V2']; // Specify the metadata you need
                // const show = await getShowByIdReq('SHOJjHch75Ecbqc6e8V', metaData);
                const show = await getShowByIdReq(showId ? showId : '', metaData);
                setShowInformation(show[0]);
                const episodeList = await getEpisodesList(showId ? showId : '');


                setEpisodesInfo(episodeList);

                setLoading(false);

                // console.log(episodeList);

            } catch (error) {
                console.error('Error fetching show data:', error);
                setLoading(false);
            }
        };

        // Check if showId is not null or undefined before making API call
        if (showId) {
            fetchShow();
        } else {
            console.error('showId is undefined');
        }
    }, [showId]);

    const thumbnailMetaData = showInformation?.metadata?.find((metadata: {
        type: string;
    }) => metadata.type === 'BANNER_THUMBNAIL_V2');

    const showThumbnailUrl = thumbnailMetaData?.value;

    const episodeCountMetaData = showInformation?.metadata?.find((metadata: {
        type: string;
    }) => metadata.type === 'EPISODE_COUNT');

    const episodeCount = episodeCountMetaData?.value;

    const genres: string | undefined = showInformation?.genre;

    const clippedDescription = showInformation && showInformation.description.length > 90
        ? `${showInformation.description.slice(0, 70)}...`
        : showInformation?.description;

    const episodes: Episode[] = episodesInfo?.map((episodeResponse: EpisodeResponse) => episodeResponse.episode) || [];


    const firstEpisode = episodes.find((episode) => episode.sequence === 1);


    const firstEpisodeId = firstEpisode?.id;
    // if (!firstEpisodeId) {
    //     navigate(`/show/${showId}`); // Replace with specific navigation if needed
    // }

    return (
            <div className="show-container">
                {loading && <div className="loading-screen">
                    <img src="/logo192.png" alt="Loading Logo" className="loading-logo"/>
                </div>}
                <div className="show-image-container">
                    {showThumbnailUrl &&
                        <img
                            src={getCDNImageUrl(showThumbnailUrl, '')}
                            alt="Blurred Background"
                            className="show-image-background"
                            aria-hidden="true" // Marks element as hidden for screen readers
                        />
                    }
                    {showThumbnailUrl &&
                        <img
                            src={getCDNImageUrl(showThumbnailUrl, '')}
                            alt={showInformation?.name || 'Show cover image'}
                            className="show-image"
                        />
                    }
                </div>
                <div className="show-details">
                    <h1 className="show-title">{showInformation?.name}</h1>
                    <div className="show-genres">
                        {genres?.split(', ').map(genre => (
                            <span key={genre} className="genre-tag">{genre}</span>
                        ))}
                    </div>
                    <div className="description-container">
                        <p className="show-description">
                            {isDescriptionExpanded ? showInformation?.description : clippedDescription}
                            {showInformation && showInformation.description.length > 100 && (
                                <button className="read-more-button" onClick={toggleDescription}>
                                    {isDescriptionExpanded ? '...Read Less' : 'Read More'}
                                </button>
                            )}
                        </p>
                    </div>
                    <button className="read-episode-button" onClick={() => {
                        navigate(`/show/${showId}/episodes/${firstEpisodeId}`)
                    }}>Read Free Episode
                    </button>
                    <EpisodeListMobile showId={showId!} numberOfEpisode={episodeCount!} episodeInfo={episodesInfo!}/>
                </div>

            </div>
    );
};

export default ShowMobile;