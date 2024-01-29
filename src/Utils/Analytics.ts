import {
    configureMixpanelConsumerUser,
    deRegisterMixpanelConsumerUser,
    initMixpanelConsumer,
    trackMixpanelConsumerEvent,
} from './MixpanelConsumer';
import { TrackingProperties } from '../Constants/TrackingProperties';
import { TrackingEvents } from '../Constants/TrackingEvents';
import { User } from 'firebase/auth';


export const initTracking = () => {
    initMixpanelConsumer();
};

export const configureTracking = (user: User) => {
    configureMixpanelConsumerUser(user);
};

export const resetTracking = () => {
    deRegisterMixpanelConsumerUser();
};

export interface TrackingRequest {
    event: TrackingEvents;
    properties: TrackingProperties;
}

export const trackEvent = (request: TrackingRequest, type: 'CONSUMER') => {
    trackMixpanelConsumerEvent(request.event, request.properties);
    return;
};
