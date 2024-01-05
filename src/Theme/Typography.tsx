import {Typography} from "@mui/material";
import React from "react";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        xs: React.CSSProperties;
        sm: React.CSSProperties;
        md: React.CSSProperties;
        lg: React.CSSProperties;
        xl: React.CSSProperties;
        '2xl': React.CSSProperties;
        '3xl': React.CSSProperties;
        '4xl': React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        xs?: React.CSSProperties;
        sm: React.CSSProperties;
        md: React.CSSProperties;
        lg: React.CSSProperties;
        xl: React.CSSProperties;
        '2xl': React.CSSProperties;
        '3xl': React.CSSProperties;
        '4xl': React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        '2xl': true;
        '3xl': true;
        '4xl': true;
        h1: true;
        h2: true;
        h3: true;
        h4: false;
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        body1: false;
        body2: false;
        button: false;
        caption: false;
        overline: false;

    }
}

const typography = {
    fontFamily: 'Geologica',
    xs: {
        fontFamily: 'Geologica',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    sm: {
        fontFamily: 'Geologica',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    md: {
        fontFamily: 'Geologica',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    lg: {
        fontFamily: 'Geologica',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    xl: {
        fontFamily: 'Geologica',
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    '2xl': {
        fontFamily: 'Geologica',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    '3xl': {
        fontFamily: 'Geologica',
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    '4xl': {
        fontFamily: 'Geologica',
        fontSize: '60px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    h1: {
        fontFamily: 'Geologica',
        fontSize: '50px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    h2: {
        fontFamily: 'Geologica',
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    h3: {
        fontFamily: 'Geologica',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '125%',
    },
    h4: undefined,
    h5: undefined,
    h6: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    body1: undefined,
    body2: undefined,
    button: undefined,
    caption: undefined,
    overline: undefined,

}

export default typography;