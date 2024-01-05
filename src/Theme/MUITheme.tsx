import {createTheme, ThemeOptions} from "@mui/material/styles";
import typography from "./Typography";

const materialTheme = (theme: ThemeOptions) => createTheme({
        ...theme,
        typography: typography
    }
);

export default materialTheme;