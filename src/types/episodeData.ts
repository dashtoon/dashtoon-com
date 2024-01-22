export interface Episode {
    id: string;
    name: string;
    showId: string;
    releaseDate: number;
    state: string;
    panels: any[]; // You may need to replace 'any' with the appropriate type
    thumbNailUrl: string;
    sequence: number;
    createdAt: number;
    updatedAt: number;
    lockData: LockData | null;
}

export interface LockData {
    isLocked: boolean;
    unlockTimestamp: number | null;
    pricing: number | null;
    probableUnlockTimestamp: number | null;
    durationForNextUnlock: number | null;
    unlockMethod: string | null;
    unlockMethodType: string | null;
}

export interface UserHistory {
    // Define UserHistory properties if needed
}

 export interface EpisodeResponse {
    episode: Episode;
    lockData: LockData;
    userHistory: UserHistory | null;
    nextEpisodeReleaseEpoch: number | null;
}
