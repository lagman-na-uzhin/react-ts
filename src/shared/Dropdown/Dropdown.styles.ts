import { makeStyles, createStyles } from '@mui/styles';
import {theme} from "../../styles/theme";

export const useStyles = makeStyles(( ) =>
    createStyles({
        root: {
            '& .MuiPaper-root': {
                backgroundColor: theme.palette.background.paper
            },
        },
    })
);