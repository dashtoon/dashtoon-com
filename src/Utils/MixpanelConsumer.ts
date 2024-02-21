import mixpanel from 'mixpanel-browser';
import { User } from 'firebase/auth';
import { config } from '../Config/Config';
import { TrackingEvents } from '../Constants/TrackingEvents';
import { TrackingProperties } from '../Constants/TrackingProperties';

export const initMixpanelConsumer = () => {
    mixpanel.init(config.mixpanelConsumerToken ?? '', { debug: true, ignore_dnt: true }, 'consumer');
};

const registerSuperProperties = (user: User) => {
    console.log(user);
    // @ts-ignore
    mixpanel.consumer.register_once({
        userId: user.uid,
        userName: user.displayName,
        userEmail: user.email,
    });
};

const registerUserProfile = (user: User) => {
    // @ts-ignore
    const distinctId = mixpanel.consumer.get_distinct_id();
    // @ts-ignore
    mixpanel.consumer.identify(distinctId);
    // @ts-ignore
    mixpanel.consumer.people.set({
        name: user.displayName,
        email: user.email,
    });
};

export const configureMixpanelConsumerUser = (user: User) => {
    registerSuperProperties(user);
    registerUserProfile(user);
};

export const deRegisterMixpanelConsumerUser = () => {
    // @ts-ignore
    mixpanel.consumer.reset();
};

export const trackMixpanelConsumerEvent = (
    event: TrackingEvents,
    properties: TrackingProperties
) => {
    // @ts-ignore
    mixpanel.consumer.track(event, properties);
};