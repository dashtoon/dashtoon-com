import { initializeApp } from 'firebase/app';
import { getAuth , signInAnonymously} from 'firebase/auth';

const hostname = window.location.hostname;
const isProduction = hostname === "www.dashtoon.com" || hostname === "dashtoon.com";

const FIREBASE_CONFIG = {
    apiKey: isProduction
        ? process.env.REACT_APP_FIREBASE_API_KEY
        : process.env.REACT_APP_FIREBASE_DEV_API_KEY,
    appId: isProduction
        ? process.env.REACT_APP_FIREBASE_APP_ID
        : process.env.REACT_APP_FIREBASE_DEV_APP_ID,
    authDomain: isProduction
        ? process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
        : process.env.REACT_APP_FIREBASE_DEV_AUTH_DOMAIN,
    messagingSenderId: isProduction
        ? process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
        : process.env.REACT_APP_FIREBASE_DEV_MESSAGING_SENDER_ID,
    projectId: isProduction
        ? process.env.REACT_APP_FIREBASE_PROJECT_ID
        : process.env.REACT_APP_FIREBASE_DEV_PROJECT_ID,
    storageBucket: isProduction
        ? process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
        : process.env.REACT_APP_FIREBASE_DEV_STORAGE_BUCKET,
};

const firebaseApp = initializeApp(FIREBASE_CONFIG);

const signInAnonymouslyAndGetToken = async (): Promise<string> => {
    await signInAnonymously(auth);
    const user = auth.currentUser;
    if (!user) {
        throw new Error('Failed to sign in anonymously');
    }
    return user.getIdToken();
};
export const auth = getAuth(firebaseApp);

export {signInAnonymouslyAndGetToken}