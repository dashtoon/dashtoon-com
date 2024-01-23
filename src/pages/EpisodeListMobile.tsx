import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/mobileStyles.css';
import { Episode, EpisodeResponse } from '../types/episodeData';
import {getCDNImageUrl} from "../services/cdnImage";
type EpisodeListMobileProps = {
    showId: string;
    numberOfEpisode: string;
    episodeInfo: EpisodeResponse[];
};

const EpisodeListMobile: React.FC<EpisodeListMobileProps> = ({ showId, numberOfEpisode, episodeInfo }) => {
    const navigate = useNavigate();

    // State to manage sorting order
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const goToEpisode = (episodeId: string) => {
        navigate(`/show/${showId}/episodes/${episodeId}`);
    };


    const episodes: Episode[] = episodeInfo?.map((episodeResponse: EpisodeResponse) => episodeResponse.episode) || [];

    const filteredEpisodes: Episode[] = episodes.length > 10
        ? episodes
            .filter((episode) => episode.sequence <= 10)
        : episodes;


    // Sort episodes based on sortOrder
    const sortedEpisodes: Episode[] = [...filteredEpisodes].sort((a, b) => {
        const order = sortOrder === 'asc' ? 1 : -1;
        return order * (a.sequence - b.sequence);
    });

    const formatDate = (epochTime: number) => {
        const date = new Date(epochTime);
        return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;
    };

    return (
        <div className="episode-list">
            <div className="show-info-container">
                <p className="show-info">{numberOfEpisode} Episodes</p>
                <button className="sort-button" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                   Sort   ↑↓
                </button>
            </div>
            <div className="episodes">
                {sortedEpisodes.map((episode, index) => (
                    <div key={index} className="episode-item" onClick={() => goToEpisode(episode.id)}>
                        <div className="episode-thumbnail">
                            <img src={getCDNImageUrl(episode.thumbNailUrl,'')} alt={`Thumbnail for ${episode.name}`} />
                        </div>
                        <div className="episode-info">
                            <h3 className="episode-title">{episode.name}</h3>
                            <p className="episode-date">{formatDate(episode.createdAt)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default EpisodeListMobile;