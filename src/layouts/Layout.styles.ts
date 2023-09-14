import {theme} from "../styles/theme";
import {makeStyles, createStyles} from '@mui/styles';

export const useStyles = makeStyles(() => createStyles ({
    container: {
        display: 'grid',
        [theme.breakpoints.up('xs')]: {
            gridTemplateColumns: '15% auto',
        },

        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: '10% auto',
        },

        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: '5% auto',
        },


    },
    content: {
        display: 'grid',
        gridTemplateRows: '100px auto',
        padding: '0 25px',
        backgroundColor: theme.palette.background.default
    },

}))