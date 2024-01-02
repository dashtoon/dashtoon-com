import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import PrivacyPolicy from "../../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import BugBounty from "../../Pages/BugBounty/BugBounty";

const PageRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/about-us' element={<About/>}/>
                <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
                <Route
                    path='/terms-and-conditions'
                    element={<TermsAndConditions/>}
                />
                <Route path='/bug-bounty' element={<BugBounty/>}/>
            </Route>
        </Routes>
    );
};

export default PageRoutes;