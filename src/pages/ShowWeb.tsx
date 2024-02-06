import React, {useEffect, useState} from 'react';
import ShowInfoWeb from './ShowInfoWeb'; // Adjust path as needed
import EpisodeListWeb from './EpisodeListWeb'; // Adjust path as needed
import '../styles/webStyles.css';
import {useParams} from "react-router-dom";
import {Episode, EpisodeResponse} from "../types/episodeData";
import {Show} from "../types/Show";
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
import {getEpisodesList, getShowByIdReq} from "../services/showService";
import {trackEvent} from "../Utils/Analytics";
import crossIcon from "../assets/icons/crossIcon.png";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {TrackingProperties} from "../Constants/TrackingProperties";
import FooterWeb from "../Components/FooterWeb";
import {useNavigate} from 'react-router-dom';

const ShowWeb: React.FC = () => {

    const navigate = useNavigate();
    let {showId} = useParams<{ showId?: string }>();

    const [episodesInfo, setEpisodesInfo] = useState<EpisodeResponse[]>();
    const [showInformation, setShowInformation] = useState<Show>();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const fetchShow = async () => {
            try {
                await signInAnonymouslyAndGetToken();  // ensure Firebase anonymous auth

                const metaData: string[] = ['BANNER_THUMBNAIL_V2']; // Specify the metadata you need
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


    useEffect(() => {
        if (showInformation) {
            trackEvent(
                {
                    event: TrackingEvents.showOpened,
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

    const episodeCountMetaData = showInformation?.metadata?.find((metadata: {
        type: string;
    }) => metadata.type === 'EPISODE_COUNT');

    const episodeCount = episodeCountMetaData?.value;

    const thumbnailMetaData = showInformation?.metadata?.find((metadata: {
        type: string;
    }) => metadata.type === 'BANNER_THUMBNAIL_V2');

    const showThumbnailUrl = thumbnailMetaData?.value;

    const backgroundStyle = {
        backgroundImage: `url(${showThumbnailUrl})`,
    };

    const clippedDescription = showInformation && showInformation.description.length > 100
        ? `${showInformation.description.slice(0, 100)}...`
        : showInformation?.description;

    return (
        <div className="show-screen">
            <div className="content-comp">

                {/*<div className="cross-icon" onClick={() => {*/}
                {/*    navigate('/');*/}
                {/*}}>*/}
                {/*    <img*/}
                {/*        src={crossIcon} // Replace with the actual path*/}
                {/*        alt="Cross Icon"*/}
                {/*        style={{width: '42px', height: '42px'}}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="show-web-container">
                    {loading && <div className="loading-screen-web">
                        <img src="/logo192.png" alt="Loading Logo" className="loading-logo-web"/>
                </div>}
                <div className="show-background" style={backgroundStyle}></div>
                <div className="overlay"></div>
                <div className="black-card show-info-web-container">
                    <ShowInfoWeb showId={showId!} showInformation={showInformation!} episodeInfo={episodesInfo!}/>
                </div>
                <div className="black-card episode-list-web-container">
                    <EpisodeListWeb showId={showId!} numberOfEpisode={episodeCount!} episodeInfo={episodesInfo!}
                                    showInformation={showInformation!}/>
                </div>
            </div>
            </div>
            <FooterWeb></FooterWeb>
        </div>
    );
};

export default ShowWeb;