import {
    configureMixpanelConsumerUser,
    deRegisterMixpanelConsumerUser,
    initMixpanelConsumer,
    trackMixpanelConsumerEvent,
} from './MixpanelConsumer';
import { TrackingProperties } from '../Constants/TrackingProperties';
import { TrackingEvents } from '../Constants/TrackingEvents';
import { User } from 'firebase/auth';
import {auth} from '../firebaseConfig';

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
    if (auth.currentUser) {
        request.properties.userId = auth.currentUser.uid || '';
        request.properties.userName = auth.currentUser.displayName || '';
        request.properties.userEmail = auth.currentUser.email || '';
    }
    trackMixpanelConsumerEvent(request.event, request.properties);
    return;
};
