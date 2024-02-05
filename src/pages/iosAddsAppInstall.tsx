// src/App.tsx
import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import '../styles/installAppStyles.css';
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
import {getEpisodesList, getShowByIdReq} from "../services/showService";
import {Show} from "../types/Show";
import {trackEvent} from "../Utils/Analytics";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {TrackingProperties} from "../Constants/TrackingProperties";
import {getCDNImageUrl} from "../services/cdnImage";

interface InstallAppProps {
    // No need to pass showId as a prop anymore
}

const InstallApp: React.FC<InstallAppProps> = () => {
    const { showId } = useParams<{ showId: string }>();


    // Replace with actual values or dynamic content based on showId
    const imageUrl = 'your-image-url';
    const description = 'Your Description';
    const [showInformation, setShowInformation] = useState<Show>();
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const [queryParams, setQueryParams] = useState(new URLSearchParams(location.search));

    useEffect(() => {
        const fetchShow = async () => {
            try {
                await signInAnonymouslyAndGetToken();  // ensure Firebase anonymous auth

                const metaData: string[] = ['WIDGET_THUMBNAIL_V2']; // Needed Metadata
                const show = await getShowByIdReq(showId ? showId : '', metaData);
                setShowInformation(show[0]);
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

    const [deepLinkUrl, setDeepLinkUrl] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            const newQueryParams = new URLSearchParams(location.search);

            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: '1b3u1l4h00169000034S4iqAAC1s6h3a2t'
                },
                body: JSON.stringify({
                    data: {
                        af_ad: newQueryParams.get('af_ad'),
                        af_adset: newQueryParams.get('af_adset'),
                        af_channel: newQueryParams.get('af_channel'),
                        af_dp: `app://dashtoon/mobile/show/${showId}}`,
                        c: 'my_campaign',
                        deep_link_value: 'https://dashtoon.onelink.me',
                        deep_link_sub1: 10,
                        is_retargeting: true,
                        pid: newQueryParams.get('pid')
                    }
                })
            };

            try {
                const response = await fetch('https://onelink.appsflyer.com/shortlink/v1/ifIy', options);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                // Assuming the result is an object with a 'shortLink' property, update the state
                setDeepLinkUrl(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [location]);

    useEffect(() => {
        if (showInformation && showId) {
            // console.log("entering show screen" + auth.currentUser?.uid);
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

    const installApp = () => {
        // Add your installation logic here
        alert('App installation logic goes here!');
    };

    const genres: string | undefined = showInformation?.genre;

    const thumbnailMetaData = showInformation?.metadata?.find((metadata: {
        type: string;
    }) => metadata.type === 'WIDGET_THUMBNAIL_V2');

    const showThumbnailUrl = thumbnailMetaData?.value;


    return (
        <div className="install-app">
            {/* Image Container */}
            <div className="image-container">
                { showThumbnailUrl && <img src={getCDNImageUrl(showThumbnailUrl ,'262','390')} alt="Show" style={{borderRadius: '12px', objectFit: 'contain' }} />}
            </div>

            {/* Genres */}
            <div className="genre-container-install">
                {genres?.split(', ').map(genre => (
                    <span key={genre} className="genres">{genre}</span>
                ))}
            </div>

            {/* Description */}
            <div className="description" style={{marginTop: '20px'}}>
                {showInformation?.description}
            </div>

            {/* Install Button */}
            <div className={'install box'}></div>
            <button className="install-button" onClick={() => window.open(deepLinkUrl!)}>
                CONTINUE READING
            </button>
        </div>
    );
};

export default InstallApp;
