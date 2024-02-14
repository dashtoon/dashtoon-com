import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/mobileStyles.css';
import {Episode, EpisodeResponse} from '../types/episodeData';
import {getCDNImageUrl} from "../services/cdnImage";
import {trackEvent} from "../Utils/Analytics";
import {TrackingEvents} from "../Constants/TrackingEvents";
import {auth} from "../firebaseConfig";
import {TrackingProperties} from "../Constants/TrackingProperties";
import {Show} from "../types/Show";

type EpisodeListMobileProps = {
    showId: string;
    numberOfEpisode: string;
    episodeInfo: EpisodeResponse[];
    showInformation: Show;
};

const EpisodeListMobile: React.FC<EpisodeListMobileProps> = ({
                                                                 showId,
                                                                 numberOfEpisode,
                                                                 episodeInfo,
                                                                 showInformation
                                                             }) => {
    const navigate = useNavigate();

    // State to manage sorting order
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const goToEpisode = (episodeId: string) => {

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
        return `${date.toLocaleString('default', {month: 'short'})} ${date.getDate()}, ${date.getFullYear()}`;
    };

    return (
        <div className="episode-list">
            <div className="show-info-container">
                <p className="show-info">{numberOfEpisode} Episodes</p>
                <button className="sort-button" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                    Sort ↑↓
                </button>
            </div>
            <div className="episodes">
                {sortedEpisodes.map((episode, index) => (
                    <div key={index} className="episode-item" onClick={() => goToEpisode(episode.id)}>
                        <div className="episode-thumbnail">
                            {episode.thumbNailUrl && <img src={getCDNImageUrl(episode.thumbNailUrl, '')}
                                                          alt={`Thumbnail for ${episode.name}`}/>}

                        </div>
                        <div className="episode-info">
                            <h3 className="episode-title">{episode.name}</h3>
                            <p className="episode-date">{formatDate(episode.createdAt)}</p>
                            <div className="episode-free-tag">Free</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default EpisodeListMobile;