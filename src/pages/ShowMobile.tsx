import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import '../styles/mobileStyles.css';
import EpisodeListMobile from './EpisodeListMobile';

import {getEpisodesList, getShowByIdReq} from '../services/showService';
import {Episode, EpisodeResponse} from "../types/episodeData";
import {Show} from '../types/Show';
import {FaArrowLeft} from "react-icons/fa";
import {getCDNImageUrl} from "../services/cdnImage";
import {trackEvent} from "../Utils/Analytics";
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {TrackingProperties} from "../Constants/TrackingProperties";
import FooterMobile from "../Components/FooterMobile";


const ShowMobile = () => {
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
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const fetchShow = async () => {
            try {
                await signInAnonymouslyAndGetToken();  // ensure Firebase anonymous auth

                const metaData: string[] = ['BANNER_THUMBNAIL_V2']; // Needed Metadata
                const show = await getShowByIdReq(showId ? showId : '', metaData);
                setShowInformation(show[0]);
                const episodeList = await getEpisodesList(showId ? showId : '');

                setEpisodesInfo(episodeList);

                setLoading(false);

            } catch (error) {
                console.error('Error fetching show data:', error);
                setLoading(false);
            }
        };

        if (showId) {
            fetchShow();
        } else {
            console.error('showId is undefined');
        }
    }, [showId]);

    useEffect(() => {
        if (showInformation && showId) {
            // console.log("entering show screen" + auth.currentUser?.uid);
            trackEvent(
                {
                    event: TrackingEvents.showOpen,
                    properties: {
                        userId: auth.currentUser?.uid,
                        showId: showId,
                        showName: showInformation?.name,
                    } as TrackingProperties,
                },
                'CONSUMER'
            );
        }
    }, [showInformation, showId]);

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
                <button className={"back-button-show-screen-mobile"} onClick={()=> navigate('/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 10.75H6.7875L13.775 3.7625L12 2L2 12L12 22L13.7625 20.2375L6.7875 13.25H22V10.75Z"
                              fill="#FCFCFC"/>
                    </svg>
                </button>
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
                <div className={'show-genres'}>
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
                <EpisodeListMobile showId={showId!} numberOfEpisode={episodeCount!} episodeInfo={episodesInfo!}
                                   showInformation={showInformation!}/>
            </div>
            <FooterMobile></FooterMobile>
        </div>
    );
};

export default ShowMobile;