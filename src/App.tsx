import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <AppRoutes/>
            </div>
        </Router>
    );
}

export default App;
