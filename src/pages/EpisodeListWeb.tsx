import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/episodeListWebStyle.css';
import {Episode, EpisodeResponse} from "../types/episodeData";
import {getCDNImageUrl} from "../services/cdnImage";
import {trackEvent} from "../Utils/Analytics";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {auth} from "../firebaseConfig";
import {TrackingProperties} from "../Constants/TrackingProperties";
import {Show} from "../types/Show";

type EpisodeListProps = {
    showId: string;
    numberOfEpisode: string;
    episodeInfo: EpisodeResponse[];
    showInformation: Show;
};

const EpisodeListWeb: React.FC<EpisodeListProps> = ({showId, numberOfEpisode, episodeInfo, showInformation}) => {
    const navigate = useNavigate();

    // State to manage sorting order
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

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
        return `${date.toLocaleString('default', {month: 'short'})} ${date.getDate()}, ${date.getFullYear()}`;
    };

    const goToEpisode = (episodeId: string) => {
        if (showInformation && showId) {

            const episodeDetails = episodes?.find(
                (episode) => episode.id === episodeId
            );
            trackEvent(
                {
                    event: TrackingEvents.buttonClicked,
                    properties: {
                        name: 'Episode-Card-Clicked',
                        userId: auth.currentUser?.uid,
                        showId: showId,
                        showName: showInformation?.name,
                        episodeId: episodeId,
                        episodeName: episodeDetails?.name,
                    } as TrackingProperties,
                },
                'CONSUMER'
            );
        }
        navigate(`/show/${showId}/episodes/${episodeId}`);
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
                            <img src={getCDNImageUrl(episode.thumbNailUrl, '')} alt={`Thumbnail for ${episode.name}`}/>
                        </div>
                        <div className="episode-info-web">
                            <h3 className="episode-title-web">{episode.name}</h3>
                            <p className="episode-date-web">{formatDate(episode.createdAt)}</p>
                            <div className="episode-free-tag-web">Free</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodeListWeb;