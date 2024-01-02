import React from 'react';
import {Box, createTheme, CssBaseline} from "@mui/material";
import PageRoutes from "./Components/PageRoutes/PageRoutes";

const materialTheme = createTheme();

const App = () => {
    return (
        <Box>
            <CssBaseline/>
            <PageRoutes/>
        </Box>
    );
};

export default App;
