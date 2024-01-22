import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import ShowMobile from '../pages/ShowMobile';
import ShowWeb from '../pages/ShowWeb';
import EpisodeMobile from '../pages/EpisodeMobile';
import EpisodeWeb from '../pages/EpisodeWeb';
import InvalidUrlPage from '../pages/InvalidUrlPage';

const DesktopRoutes: React.FC = () => (
    <Routes>
        <Route path='/*' element={<InvalidUrlPage/>}/>
        <Route path='/show/:showId' element={<ShowWeb/>}/>
        <Route path='/show/:showId/episode/:episodeId' element={<EpisodeWeb/>}/>
    </Routes>
);

const MobileRoutes: React.FC = () => (
    <Routes>
        <Route path='/*' element={<InvalidUrlPage />} />
        <Route path='/show/:showId' element={<ShowMobile/>}/>
        <Route path='/show/:showId/episode/:episodeId' element={<EpisodeMobile/>}/>
    </Routes>
);

const AppRoutes: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 760);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? <MobileRoutes/> : <DesktopRoutes/>;
};

export default AppRoutes;