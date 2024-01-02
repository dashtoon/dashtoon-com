import React from 'react';
import {CssBaseline} from "@mui/material";
import PageRoutes from "./Components/PageRoutes/PageRoutes";

const App = () => {
    return (
        <div className='App'>
            <CssBaseline/>
            <PageRoutes/>
        </div>
    );
};

export default App;
