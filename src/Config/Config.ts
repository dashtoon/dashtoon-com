export const hostname = window.location.hostname;
export const isProduction = hostname === "www.dashtoon.com" || hostname === "dashtoon.com" || hostname === "web.dashtoon.com";
const isLocal = hostname === 'localhost';

export const config = {
    baseUrl: isProduction
        ? process.env.REACT_APP_API_BASE_URL
        : process.env.REACT_APP_DEV_API_BASE_URL,
    mixpanelConsumerToken: isProduction
        ? process.env.REACT_APP_CONSUMER_PROD_MIXPANEL_TOKEN
        : process.env.REACT_APP_CONSUMER_DEV_MIXPANEL_TOKEN,
};
