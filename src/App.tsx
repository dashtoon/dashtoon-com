import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
      <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
