import {Episode} from "./episodeData";

export interface Show {
    id: string;
    name: string;
    creator: string;
    createdAt: number;
    description: string;
    genre: string;
    trope: string;
    rating: number;
    state: string;
    updatedAt: number;
    thumbNailUrl: string;
    category: string;
    editorScore: number;
    createdBy: string;
    episodes: Episode[]; // Define the Episode interface as needed
    type: string;
    metadata: Metadata[];
}

export interface Metadata {
    id: string;
    showId: string;
    type: string;
    value: string;
    createdAt: number;
    updatedAt: number;
}
