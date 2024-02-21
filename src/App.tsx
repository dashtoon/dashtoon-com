import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';
import {configureTracking, initTracking, trackEvent} from "./Utils/Analytics";
import {TrackingEvents} from "./Constants/TrackingEvents";
import {auth, signInAnonymouslyAndGetToken} from "./firebaseConfig";
import {TrackingProperties} from "./Constants/TrackingProperties";
import { createTheme, CssBaseline, ThemeOptions, ThemeProvider } from '@mui/material';
import { color } from './Constants/Colors';
import { useTranslation } from 'react-i18next';
import {User} from "firebase/auth";

declare module '@mui/material/styles' {
    interface Palette {
        review: {
            in_review: string;
            passed_review: string;
            failed_review: string;
        };
        surface: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
        object: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
        constant: {
            white: string;
            black: string;
            grey: string;
            blue: string;
            red: string;
            green: string;
            yellow: string;
            chip: string;
        };
    }
    interface PaletteOptions {
        review?: {
            in_review?: string;
            passed_review?: string;
            failed_review?: string;
        };
        surface?: {
            primary?: string;
            secondary?: string;
            tertiary?: string;
        };
        object?: {
            primary?: string;
            secondary?: string;
            tertiary?: string;
        };
        constant?: {
            white?: string;
            black?: string;
            grey?: string;
            blue?: string;
            red?: string;
            green?: string;
            yellow?: string;
            chip?: string;
        };
    }
}



function App() {

    const [user, setUser] = useState<User | null>(null);


    const { i18n } = useTranslation();
    useEffect(() => {
        const lang = localStorage.getItem('i18nextLng');
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, [i18n]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( (user) => {
            if (user !== null) {
                if (user.emailVerified) {
                    trackEvent(
                        {
                            event: TrackingEvents.userLogin,
                            properties: {
                                userName: auth.currentUser?.displayName,
                                userEmail: auth.currentUser?.email,
                                userId: auth.currentUser?.uid,
                                loginType: user.providerData[0].providerId === 'password' ? 'email' : 'google',
                            } as TrackingProperties,
                        },
                        'CONSUMER'
                    );
                }
                configureTracking(user);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        initTracking();
    }, []);

    const getDesignTokens = {
        // palette values for dark mode
        primary: {
            main: '#4D9CF8',
        },
        review: {
            in_review: '#B09431',
            failed_review: '#EE2A28',
            passed_review: '#39B031',
        },
        divider: 'rgba(48, 48, 48, 1)', // Light gray color
        background: {
            default: '#030303', // Dark gray color
            paper: '#181818', // Darker gray color
        },
        input: {
            background: '#030303', // Dark gray color
        },
        text: {
            primary: '#EBEBEB',
            secondary: '#808080',
        },
        banner: {
            text: '#363636',
        },
        appbar: {
            background: 'transparent !important',
            color: 'transparent !important',
        },
        action: {
            hover: '#565656',
            active: '#808080',
            selected: '#FCFCFC',
            focus: '#303030',
        },
        surface: {
            primary: color[0],
            secondary: color[10],
            tertiary: color[20],
        },
        object: {
            primary: color[100],
            secondary: color[90],
            tertiary: color[80],
        },
        constant: {
            white: color[100],
            blac: color[0],
            grey: color[50],
            blue: color['blue'],
            red: color['red'],
            green: color['green'],
            yellow: color['yellow'],
            chip: 'rgba(48, 48, 48, 1)',
        },
    };


    const customThemeOptions = (theme: ThemeOptions) =>
        createTheme({
            ...theme,
            palette: getDesignTokens,
            components: {
                MuiAppBar: {
                    styleOverrides: {
                        root: {
                            color: 'transparent !important',
                            backgroundColor: 'transparent !important',
                            backgroundImage: 'none',
                        },
                    },
                },
                MuiTabs: {
                    styleOverrides: {
                        indicator: {
                            backgroundColor: 'transparent',
                        },
                    },
                },
                MuiTab: {
                    defaultProps: {
                        disableRipple: true,
                    },
                    styleOverrides: {
                        root: ({ _, theme }) => ({
                            '&.Mui-selected': {
                                color: theme.palette.text.primary,
                            },
                            padding: '0px 16px 0px 0px',
                        }),
                    },
                },
            },
        });

    const defaultTheme = createTheme();

    const customisedTheme = customThemeOptions(defaultTheme);

    return (
        <ThemeProvider theme={customisedTheme}>
        <Router>
            <div className="App">
                <AppRoutes/>
            </div>
        </Router>
        </ThemeProvider>
    );
}

export default App;
