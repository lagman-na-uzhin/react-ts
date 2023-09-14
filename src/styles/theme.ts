import { createTheme } from '@mui/material/styles';
import { red} from '@mui/material/colors';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: '#5051F9',
        },
        secondary: {
            main: '#8a8af8'
        },
        background: {
            default: '#131517',
            paper: '#1E1F25',
        },
        error: {
            main: red[500],
        },
        text: {
            primary: '#ffffff', // Цвет основного текста
            secondary: '#898999', // Цвет вторичного текста
        },
        success: {
            main: '#0ACF83',
        },
        warning: {
            main: '#FE7F2E',
        },
        info: {
            main: '#2196f3',
        },
        action: {
            active: '#5051F9',
            hover: '#6264fd',
            selected: '#eeeeee',
            disabled: '#9e9e9e',
            disabledBackground: '#424242',
        },
        divider: '#757575',
    },
    typography: {
        h1: {
            fontSize: '35px',
            color: 'white'
        },
        h2: {
            fontSize: '25px',
            color: 'white'
        },
        h3: {
            fontSize: '20px',
            color: 'white'
        },
        body1: {
            fontSize: '15px',
            color: 'white'
        },
        body2: {
            fontSize: '12px',
            color: 'white'
        },
    },
})
