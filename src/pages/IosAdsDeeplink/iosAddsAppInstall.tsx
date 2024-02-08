// src/App.tsx
import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import './installAppStyles.css';
import {signInAnonymouslyAndGetToken} from "../../firebaseConfig";
import {getShowByIdReq} from "../../services/showService";
import {Show} from "../../types/Show";
import {getCDNImageUrl} from "../../services/cdnImage";
import { ShowAdsIos } from '../../types/ShowAdsIos';

const showAdsRepository: ShowAdsIos[] = [
    {
        showId: 'SHOkwXQp4RYAbmsKFc1',
        showThumbnailUrl: 'https://content.dashtoon.ai/show-thumbnails/SHOkwXQp4RYAbmsKFc1P1Y22P2rS2KP2zsF.png',
        showGenres: 'Revenge, Romance',
        showDescription: 'Betrayed by her fiancé and step-sister three years ago, Madison Blake became a powerful, sexy woman to make them all pay. But she also has a secret husband of two years, whose face she has never seen. Is he a billionaire or a gangster? Or both?\n'
    }
];

const InstallApp: React.FC = () => {

    const [loading, setLoading] = useState(true);

    const {showId} = useParams<{ showId: string }>();
    const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);
    const toggleDescription = () => {
        setDescriptionExpanded(!isDescriptionExpanded);
    };

    const [showInformation, setShowInformation] = useState<Show>();
    const [genres, setGenres] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [showThumbnailUrl , setShowThumbnailUrl] = useState<string>();

    const location = useLocation();
    const [deepLinkUrl, setDeepLinkUrl] = useState<string | null>(null);
    const clippedDescription = description && description.length > 90
        ? `${description.slice(0, 70)}...`
        : description;

    useEffect(() => {

        const staticAdData = showAdsRepository.find(ad => ad.showId === showId);

        if(staticAdData) {
            setShowThumbnailUrl(staticAdData.showThumbnailUrl);
            setGenres(staticAdData.showGenres);
            setDescription(staticAdData.showDescription);
            setLoading(false);
        } else {
            const fetchShow = async () => {
                try {
                    await signInAnonymouslyAndGetToken();  // ensure Firebase anonymous auth
                    const metaData: string[] = ['WIDGET_THUMBNAIL_V2']; // Needed Metadata
                    const show = await getShowByIdReq(showId ? showId : '', metaData);
                    setShowInformation(show[0]);
                    setDescription(showInformation?.description);
                    setGenres(showInformation?.genre);
                    const thumbnailMetaData = showInformation?.metadata?.find((metadata: {
                        type: string;
                    }) => metadata.type === 'WIDGET_THUMBNAIL_V2');
                    setShowThumbnailUrl(thumbnailMetaData?.value);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching show data:', error);
                }
            };

            if (showId) {
                fetchShow();
            } else {
                console.error('showId is undefined');
            }
        }
    }, [showId, showInformation]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const onelinkId = queryParams.get('dlink');
        if (onelinkId) {
            setDeepLinkUrl(`https://dashtoon.onelink.me/ifIy/${onelinkId}`);
        }
    }, []);


    const handleContinueClick = () => {
        // If deepLinkUrl is set, navigate to that URL in the same tab
        if (deepLinkUrl) {
            window.location.href = deepLinkUrl;
        } else {
            // Handle the case where deepLinkUrl is not set
            console.error('Deep link URL is not available.');
        }
    };


    return (
        <div className="install-app">
            {loading && <div className="loading-screen">
                <img src="/logo192.png" alt="Loading Logo" className="loading-logo"/>
            </div>}
             Image Container
            <div className="image-container">
                {showThumbnailUrl && <img src={getCDNImageUrl(showThumbnailUrl, '262', '390')} alt="Show"
                                          style={{borderRadius: '12px', objectFit: 'contain'}} loading={'lazy'}/>}
            </div>

            {/* Genres */}
            <div className="genre-container-install">
                {genres?.split(', ').map(genre => (
                    <span key={genre} className="genres">{genre}</span>
                ))}
            </div>

            {/* Description */}
            <div className="description-deeplink" style={{marginTop: '20px'}}>
                {isDescriptionExpanded ? description : clippedDescription}
                {description && description.length > 100 && (
                    <button className="read-more-button" style={{fontSize: '12px' }} onClick={toggleDescription}>
                        {isDescriptionExpanded ? '...Read Less' : 'Read More'}
                    </button>
                )}
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
