import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
