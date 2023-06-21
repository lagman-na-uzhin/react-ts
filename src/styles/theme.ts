import { createTheme } from '@mui/material/styles';
import { red, grey, deepPurple} from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[700],
        },
        secondary: {
            main: deepPurple[900]
        },
        background: {
            default: grey[50],
            paper: grey[300],
        },
        error: {
            main: red[500],
        },
        text: {
            primary: grey[900], // Цвет основного текста
            secondary: grey[500], // Цвет вторичного текста
        },
    },
    typography: {
        h1: {
            fontSize: '35px',
            fontWeight: 400,
        },
        h2: {
            fontSize: '25px',
            fontWeight: 400,
        },
        h3: {
            fontSize: '20px',
            fontWeight: 400,
        },
        body1: {
            fontSize: '15px',
            fontWeight: 400,
        },
        body2: {
            fontSize: '12px',
            fontWeight: 400,
        },
    },
});
