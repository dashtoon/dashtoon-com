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
import InstallApp from "../pages/IosAdsDeeplink/iosAddsAppInstall";
import StudioPage from "../pages/DashStudio/DashStudioHome";
import StudioPageMobile from "../pages/DashStudio/DashStudioMobile";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import BugBounty from "../pages/BugBounty/BugBounty";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditionsMobile from "../pages/TermsAndConditions/TermsAndConditionsMobile";
import PrivacyPolicyMobile from "../pages/PrivacyPolicy/PrivacyPolicyMobile";
import BugBountyMobile from "../pages/BugBounty/BugBountyMobile";
import VerifyEmail from "../pages/Auth/Verify/VerifyEmail";
import CreatorsProgramWeb from "../pages/CreatorProgram/CreatorsProgramWeb";
import CreatorsProgramMobile from "../pages/CreatorProgram/CreatorsProgramMobile";

const DesktopRoutes: React.FC = () => (
    <Routes>
        <Route path='/*' element={<InvalidUrlPage/>}/>
        <Route path='/company' element={<CompanyWeb/>}/>
        <Route path='/mobile/show/:showId' element={<InstallApp/>}/>
        <Route path={'/create'} element={<StudioPage/>} />
        <Route path={'/creators'} element={<CreatorsProgramWeb/>} />
        <Route path='/' element={<HomePageWeb/>} />
        <Route path='/careers' element={<CareersWeb/>} />
        <Route path='/show/:showId' element={<ShowWeb/>}/>
        <Route path='/show/:showId/episodes/:episodeId' element={<EpisodeWeb/>}/>
        <Route path={'/terms-and-conditions'} element={<TermsAndConditions/>} />
        <Route path={'/privacy-policy'} element={<PrivacyPolicy/>} />
        <Route path={'/bug-bounty'} element={<BugBounty/>} />
        <Route path="/verify-email" element={<VerifyEmail />} />
    </Routes>
);

const MobileRoutes: React.FC = () => (
    <Routes>
        <Route path='/*' element={<InvalidUrlPage />} />
        <Route path='/' element={<HomePageMobile/>} />
        <Route path='/company' element={<CompanyMobile/>}/>
        <Route path='/mobile/show/:showId' element={<InstallApp/>}/>
        <Route path={'/create'} element={<StudioPageMobile/>} />
        <Route path='/careers' element={<CareersMobile/>} />
        <Route path={'/creators'} element={<CreatorsProgramMobile/>} />
        <Route path='/show/:showId' element={<ShowMobile/>}/>
        <Route path='/show/:showId/episodes/:episodeId' element={<EpisodeMobile/>}/>
        <Route path={'/terms-and-conditions'} element={<TermsAndConditionsMobile/>} />
        <Route path={'/privacy-policy'} element={<PrivacyPolicyMobile/>} />
        <Route path={'/bug-bounty'} element={<BugBountyMobile/>} />
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