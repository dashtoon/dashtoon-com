export interface Panel {
    id: string;
    imageUrl: string;
    episodeId: string;
    sequence: number;
    metadata: {
        height: number;
        width: number;
    };
    createdAt: number;
    updatedAt: number;
}

