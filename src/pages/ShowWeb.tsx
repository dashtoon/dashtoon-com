import React, {useEffect, useState} from 'react';
import ShowInfoWeb from './ShowInfoWeb'; // Adjust path as needed
import EpisodeListWeb from './EpisodeListWeb'; // Adjust path as needed
import '../styles/webStyles.css';
import {useNavigate, useParams} from "react-router-dom";
import {EpisodeResponse} from "../types/episodeData";
import {Show} from "../types/Show";
import {signInAnonymouslyAndGetToken} from "../firebaseConfig";
import useAnonymousSignIn from '../Hooks/useAnonymousSignIn';
import {getEpisodesList, getShowByIdReq} from "../services/showService"; // Adjust path as needed

const ShowWeb: React.FC = () => {

    const { currentUser, signInAnonymouslyIfNeeded } = useAnonymousSignIn();
    let {showId} = useParams<{ showId?: string }>();

    const [episodesInfo, setEpisodesInfo] = useState<EpisodeResponse[]>();
    const [showInformation, setShowInformation] = useState<Show>();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShow = async () => {
            try {
                await signInAnonymouslyIfNeeded();  // ensure Firebase anonymous auth
                const metaData: string[] = ['DETAIL_PAGE_THUMBNAIL_V2']; // Specify the metadata you need
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

    const episodeCountMetaData = showInformation?.metadata?.find((metadata: {
        type: string;
    }) => metadata.type === 'EPISODE_COUNT');

    const episodeCount = episodeCountMetaData?.value;

    const thumbnailMetaData = showInformation?.metadata?.find((metadata: {
        type: string;
    }) => metadata.type === 'DETAIL_PAGE_THUMBNAIL_V2');

    const showThumbnailUrl = thumbnailMetaData?.value;

    //This would get replaced by a backdrop of the original homescreen:
    const backgroundStyle = {
        backgroundImage: `url(${showThumbnailUrl})`,
    };

    return (
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
                <EpisodeListWeb showId={showId!} numberOfEpisode={episodeCount!} episodeInfo={episodesInfo!}/>
            </div>
        </div>
    );
};

export default ShowWeb;