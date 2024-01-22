const hostname = window.location.hostname;
const isProduction = hostname === 'studio.dashtoon.ai';
const isLocal = hostname === 'localhost';

export const config = {
    baseUrl: isProduction
        ? process.env.REACT_APP_API_BASE_URL
        : isLocal
            ? process.env.REACT_APP_LOCAL_API_BASE_URL
            : process.env.REACT_APP_DEV_API_BASE_URL
};