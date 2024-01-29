import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';
import {configureTracking, initTracking, trackEvent} from "./Utils/Analytics";
import {TrackingEvents} from "./Constants/TrackingEvents";
import {auth} from "./firebaseConfig";
import {TrackingProperties} from "./Constants/TrackingProperties";


function App() {
    useEffect(() => {
        // const initializeApp = async () => {
        //     try {
        //         // Use await here
        //         // await signInAnonymously(auth);
        //
        //         console.log('init tracking');
        //
        //         // Additional logic after signing in if needed
        //     } catch (error) {
        //         console.error('Error during initialization:', error);
        //     }
        // };
        //
        // initializeApp();

        initTracking();
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (auth.currentUser !== null) {
                // console.log(auth.currentUser);
                trackEvent(
                    {
                        event: TrackingEvents.userLogin,
                        properties: {
                            userId: auth.currentUser?.uid,
                        } as TrackingProperties,
                    },
                    'CONSUMER'
                );
                configureTracking(auth.currentUser);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, [auth.currentUser]);

    return (
        <Router>
            <div className="App">
                <AppRoutes/>
            </div>
        </Router>
    );
}

export default App;
