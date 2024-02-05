import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import ShowMobile from '../pages/ShowMobile';
import ShowWeb from '../pages/ShowWeb';
import EpisodeMobile from '../pages/EpisodeMobile';
import EpisodeWeb from '../pages/EpisodeWeb';
import InvalidUrlPage from '../pages/InvalidUrlPage';
import CareersWeb from "../pages/CareersWeb";
import CareersMobile from "../pages/CareersMobile";
import CompanyWeb from "../pages/CompanyWeb";
import CompanyMobile from "../pages/CompanyMobile";
import HomePageWeb from "../pages/HomePageWeb";
import HomePageMobile from "../pages/HomePageMobile";
import InstallApp from "../pages/iosAddsAppInstall";

const DesktopRoutes: React.FC = () => (
    <Routes>
        <Route path='/*' element={<InvalidUrlPage/>}/>
        <Route path='/company' element={<CompanyWeb/>}/>
        <Route path='/mobile/show/:showId' element={<InstallApp/>}/>
        <Route path='/home' element={<HomePageWeb/>} />
        <Route path='/careers' element={<CareersWeb/>}/>
        <Route path='/show/:showId' element={<ShowWeb/>}/>
        <Route path='/show/:showId/episodes/:episodeId' element={<EpisodeWeb/>}/>
    </Routes>
);

const MobileRoutes: React.FC = () => (
    <Routes>
        <Route path='/*' element={<InvalidUrlPage />} />
        <Route path='/home' element={<HomePageMobile/>} />
        <Route path='/company' element={<CompanyMobile/>}/>
        <Route path='/mobile/show/:showId' element={<InstallApp/>}/>
        <Route path='/careers' element={<CareersMobile/>} />
        <Route path='/show/:showId' element={<ShowMobile/>}/>
        <Route path='/show/:showId/episodes/:episodeId' element={<EpisodeMobile/>}/>
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