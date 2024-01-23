import React, { useState } from 'react';
import '../styles/showInfoWebStyles.css';
import {Show} from "../types/Show";
import {Episode, EpisodeResponse} from "../types/episodeData";
import {useNavigate} from "react-router-dom";
import { getCDNImageUrl } from '../services/cdnImage';

type ShowInfoProps = {
    showId : string;
    showInformation : Show;
    episodeInfo: EpisodeResponse[];
};

const ShowInfoWeb: React.FC<ShowInfoProps> = ({showId, showInformation, episodeInfo}) => {

    const navigate = useNavigate();

    const thumbnailMetaData = showInformation?.metadata?.find((metadata: {
        type: string;
    }) => metadata.type === 'DETAIL_PAGE_THUMBNAIL_V2');

    const showThumbnailUrl = thumbnailMetaData?.value;

    const clippedDescription = showInformation && showInformation.description.length > 160
        ? `${showInformation.description.slice(0, 150)}...`
        : showInformation?.description;

    const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

    const toggleDescription = () => {
        setDescriptionExpanded(!isDescriptionExpanded);
    };

    const goToEpisode = (episodeId: string) => {
        navigate(`/show/${showId}/episodes/${episodeId}`);
    };


    const episodes: Episode[] = episodeInfo?.map((episodeResponse: EpisodeResponse) => episodeResponse.episode) || [];


    const firstEpisode = episodes.find((episode) => episode.sequence === 1);


    const firstEpisodeId = firstEpisode?.id;

    // if (!firstEpisodeId) {
    //     navigate(`/show/${showId}`); // Replace with specific navigation if needed
    // }

    const genres : string | undefined = showInformation?.genre;
    return (
        <div className="show-details-web">
            {showThumbnailUrl && <img className="show-image-web" src={getCDNImageUrl(showThumbnailUrl, '')}
                                      alt={showInformation?.name}/>}
            <p className="show-title-web">{showInformation?.name}</p>
            <div className="show-genres-web">
                {genres?.split(', ').map(genre => (
                    <span key={genre} className="genre-tag-web">{genre}</span>
                ))}
            </div>
            <div className="description-container-web">
                <p className="show-description-web">
                    {showInformation?.description}
                    {/*{isDescriptionExpanded ? showInformation?.description : clippedDescription}*/}
                    {/*{showInformation && showInformation.description.length > 160 && (*/}
                    {/*    <button className="read-more-button-web" onClick={toggleDescription}>*/}
                    {/*        {isDescriptionExpanded ? '...Read Less' : 'Read More'}*/}
                    {/*    </button>*/}
                    {/*)}*/}
                </p>
            </div>
            <button className="read-episode-button-web" onClick={() => goToEpisode(firstEpisodeId!)}>Read Free Episode</button>
        </div>
    );
};

export default ShowInfoWeb;