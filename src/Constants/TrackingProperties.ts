export enum TrackingProperty {
    SHOW_NAME = 'SHOW_NAME',
    EPISODE_NAME = 'EPISODE_NAME',
    SHOW_ID = 'SHOW_ID',
    EPISODE_ID = 'EPISODE_ID',
}

export interface TrackingProperties {
    [key: string]: string;
}