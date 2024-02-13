import { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { User } from 'firebase/auth';

export interface AuthState {
    currentUser: User | null;
    loading: boolean;
    email: string;
    anonymous: boolean;
}

const useAuth = (): AuthState => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const email = currentUser?.email || '';
    const anonymous = currentUser?.isAnonymous || false;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);

    useEffect(() => {
        if (currentUser && !email && !anonymous) {
            auth.signOut();
        }
    }, [currentUser]);

    return { currentUser, loading, email, anonymous };
};

export default useAuth;
