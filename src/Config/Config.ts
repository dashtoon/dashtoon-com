const hostname = window.location.hostname;
const isProduction = hostname === 'web.dashtoon.com';
const isLocal = hostname === 'localhost';

export const config = {
    baseUrl: isProduction
        ? process.env.REACT_APP_API_BASE_URL
        :
        process.env.REACT_APP_DEV_API_BASE_URL
};