import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/episodeListWebStyle.css';
import {Episode, EpisodeResponse} from "../types/episodeData";

type EpisodeListProps = {
    showId: string;
    numberOfEpisode: string;
    episodeInfo: EpisodeResponse[];
};

const EpisodeListWeb: React.FC<EpisodeListProps> = ({ showId, numberOfEpisode, episodeInfo }) => {
    const navigate = useNavigate();

    // State to manage sorting order
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const goToEpisode = (episodeId: string) => {
        navigate(`/show/${showId}/episode/${episodeId}`);
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
        <div className="episode-list-web">
            <div className="show-info-container-web">
                <p className="show-info-web">{numberOfEpisode} Episodes</p>
                <button className="sort-button-web" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                    Sort&nbsp; <span className="sort-icon-web">↑↓</span>
                </button>
            </div>
            <div className="episodes-web">
                {sortedEpisodes.map((episode, index) => (
                    <div key={index} className="episode-item-web" onClick={() => goToEpisode(episode.id)}>
                        <div className="episode-thumbnail-web">
                            <img src={episode.thumbNailUrl} alt={`Thumbnail for ${episode.name}`} />
                        </div>
                        <div className="episode-info-web">
                            <h3 className="episode-title-web">{episode.name}</h3>
                            <p className="episode-date-web">{formatDate(episode.createdAt)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodeListWeb;