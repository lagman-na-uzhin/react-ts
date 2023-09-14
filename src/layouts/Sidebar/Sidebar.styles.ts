import { makeStyles, createStyles } from '@mui/styles';
import {theme} from "../../styles/theme";

export const useStyles = makeStyles(() => createStyles ({
    sidebar: {
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.background.paper,
    },
    logo: {
        display: 'grid',
        placeContent: 'center',
        height: '60px',

    },
    classNameIcon: {
        padding: '0 0 20px 0',
        display: 'grid',
        placeContent: 'center',
    }
}))

