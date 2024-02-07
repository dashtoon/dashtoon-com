// src/App.tsx
import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import '../styles/installAppStyles.css';
import {signInAnonymouslyAndGetToken} from "../firebaseConfig";
import {getShowByIdReq} from "../services/showService";
import {Show} from "../types/Show";
import {getCDNImageUrl} from "../services/cdnImage";

interface InstallAppProps {
    // No need to pass showId as a prop anymore
}

const InstallApp: React.FC<InstallAppProps> = () => {
    const {showId} = useParams<{ showId: string }>();


    const [showInformation, setShowInformation] = useState<Show>();
    const location = useLocation();
    const [queryParams, setQueryParams] = useState(new URLSearchParams(location.search));
    const [deepLinkUrl, setDeepLinkUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchShow = async () => {
            try {
                await signInAnonymouslyAndGetToken();  // ensure Firebase anonymous auth

                const metaData: string[] = ['WIDGET_THUMBNAIL_V2']; // Needed Metadata
                const show = await getShowByIdReq(showId ? showId : '', metaData);
                setShowInformation(show[0]);
            } catch (error) {
                console.error('Error fetching show data:', error);
            }
        };

        if (showId) {
            fetchShow();
        } else {
            console.error('showId is undefined');
        }
    }, [showId]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const onelinkId = queryParams.get('dlink');
        if (onelinkId) {
            setDeepLinkUrl(`https://dashtoon.onelink.me/ifIy/${onelinkId}`);
        }
    }, [location.search]);


    const handleContinueClick = () => {
        // If deepLinkUrl is set, navigate to that URL in the same tab
        if (deepLinkUrl) {
            window.location.href = deepLinkUrl;
        } else {
            // Handle the case where deepLinkUrl is not set
            console.error('Deep link URL is not available.');
        }
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
                {showThumbnailUrl && <img src={getCDNImageUrl(showThumbnailUrl, '262', '390')} alt="Show"
                                          style={{borderRadius: '12px', objectFit: 'contain'}}/>}
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
            <button className="install-button" onClick={handleContinueClick}>
                CONTINUE WATCHING
            </button>
        </div>
    );
};

export default InstallApp;
