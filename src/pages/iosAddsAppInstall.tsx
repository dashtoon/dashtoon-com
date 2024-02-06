// src/App.tsx
import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import '../styles/installAppStyles.css';
import {auth, signInAnonymouslyAndGetToken} from "../firebaseConfig";
import {getEpisodesList, getShowByIdReq} from "../services/showService";
import {Show} from "../types/Show";
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
                        af_ad: 'yellow_bananas',
                        af_adset: 'my_adset',
                        af_android_url: 'https://feedme.ca/buybananas',
                        af_channel: 'my_channel',
                        af_dp: 'afbasicapp://mainactivity',
                        af_ios_url: 'https://feedme.ca/buybananas',
                        c: 'my_campaign',
                        deep_link_value: 'bananas',
                        deep_link_sub1: 10,
                        is_retargeting: true,
                        pid: 'my_media_source_SMS'
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
    }, []);

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
            <div className="description-deeplink" style={{marginTop: '20px'}}>
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
