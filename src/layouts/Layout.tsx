import {Box} from '@mui/material';
import {Sidebar} from "./Sidebar/";
import {Header} from "./Header/";
import { FC, ReactNode } from 'react';
import {useStyles} from "./Layout.styles";


interface LayoutProps {
    children: ReactNode
}


export const Layout: FC<LayoutProps> = ({children}) => {
    const classes = useStyles();

    return (
            <Box className={classes.container}>
                <Sidebar />
                <Box className={classes.content}>
                    <Header />
                    {children}
                </Box>
            </Box>
    );
};




