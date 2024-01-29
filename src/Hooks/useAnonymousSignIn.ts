import {useEffect, useState} from 'react';
import {auth, signInAnonymouslyAndGetToken} from '../firebaseConfig'; // Update the path

const useAnonymousSignIn = () => {
    const [currentUser, setCurrentUser] = useState<any>(auth.currentUser);

    return async () => {
        if (!auth.currentUser) {
            await signInAnonymouslyAndGetToken();
            setCurrentUser(auth.currentUser);
        }
        return currentUser;
    };
};

export default useAnonymousSignIn;