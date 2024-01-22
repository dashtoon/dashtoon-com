import { useEffect, useState } from 'react';
import { signInAnonymouslyAndGetToken, auth } from '../firebaseConfig'; // Update the path

const useAnonymousSignIn = () => {
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        const signIn = async () => {
            try {
                await signInAnonymouslyAndGetToken();
                setCurrentUser(auth.currentUser);
            } catch (error) {
                console.error('Error signing in anonymously:', error);
            }
        };

        if (!currentUser) {
            signIn();
        }
    }, [currentUser]);

    const signInAnonymouslyIfNeeded = async () => {
        if (!currentUser) {
            await signInAnonymouslyAndGetToken();
            setCurrentUser(auth.currentUser);
        }
    };

    return { currentUser, signInAnonymouslyIfNeeded };
};

export default useAnonymousSignIn;