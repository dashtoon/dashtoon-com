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

export interface ShowWithViewsAndEpisodeCount{
    id: string,
    name: string,
    creator: string,
    description: string,
    genre: string,
    trope: string,
    thumbNailUrl?: string,
    views: number,
    episodeCount: number,
    metadata: Metadata[];
}

export enum ShowCategory {
    UGC = "UGC",
    PUGC = "PUGC",
    PGC = "PGC",
}

export enum ShowMetaDataType {
    DAILY_CHALLENGE,
    BANNER_COMIC,
    STAFF_PICKS,
    COMIC_STYLE = 'COMIC_STYLE',
    BANNER_THUMBNAIL_V2 = 'BANNER_THUMBNAIL_V2',
    WIDGET_THUMBNAIL_V2 = 'WIDGET_THUMBNAIL_V2',
    DETAIL_PAGE_THUMBNAIL_V2 = 'DETAIL_PAGE_THUMBNAIL_V2',
    CONTINUE_READING_THUMBNAIL_V2 = 'CONTINUE_READING_THUMBNAIL_V2',
    ENABLE_STYLE_WEIGHTS = 'ENABLE_STYLE_WEIGHTS',
    DEFAULT_STYLE_WEIGHT = 'DEFAULT_STYLE_WEIGHT',
    STYLE_NAME = 'STYLE_NAME',
    DEFAULT_CFG = 'DEFAULT_CFG',
    DEFAULT_WIDTH = 'DEFAULT_WIDTH',
    DEFAULT_HEIGHT = 'DEFAULT_HEIGHT',
    CONTENT_TYPE = 'CONTENT_TYPE',
    MAX_GENERATION_DIMENSION = 'MAX_GENERATION_DIMENSION',
    DEFAULT_GENERATION_STEPS = 'DEFAULT_GENERATION_STEPS',
    DEFAULT_CHARACTER_WEIGHT = 'DEFAULT_CHARACTER_WEIGHT',
}