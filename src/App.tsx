import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import About from './Pages/About/About';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';
import BugBounty from './Pages/BugBounty/BugBounty';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route
            path='/terms-and-conditions'
            element={<TermsAndConditions />}
          />
          <Route path='/bug-bounty' element={<BugBounty />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
