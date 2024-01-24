import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';
import Helmet, { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
      <HelmetProvider>
          <Router>
              <div className="App">
                  <AppRoutes />
              </div>
          </Router>
      </HelmetProvider>
  );
}

export default App;
