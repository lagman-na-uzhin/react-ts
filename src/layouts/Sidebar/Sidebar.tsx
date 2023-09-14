import {FC} from "react";
import { Box} from '@mui/material';
import { useStyles} from "./Sidebar.styles";
import {SidebarLinks} from "./SidebarLinks";
import {Link} from 'react-router-dom'

export const Sidebar:FC=()=>{
    const classes = useStyles()
    return (
            <Box
                className={classes.sidebar}
            >

                <Link className={classes.logo} to="/">
                    <svg  width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.9855V25.5071C0 26.2288 0.388793 26.8945 1.01736 27.249L7.82203 31.0876V27.8785H10.8305V23.6667H15.0424V17.6497H9.02542V11.4322H15.0424V7.01977H19.8559V4.0113H22.4633L16.9319 0.850524C16.0096 0.323496 14.8774 0.323498 13.9551 0.850526L1.00772 8.24902C0.384572 8.6051 0 9.26779 0 9.9855Z" fill="#5051F9"/>
                        <path d="M29.7221 8.44171L23.0651 4.41243V7.4209H19.856V11.8333H15.4436V17.6497H21.4606V23.6667H15.4436V28.2797H11.0312V31.4887H8.42383L13.9284 34.6342C14.865 35.1694 16.017 35.1605 16.9453 34.6109L29.7055 27.0554C30.3136 26.6954 30.6865 26.0412 30.6865 25.3345V10.1527C30.6865 9.45294 30.3208 8.80406 29.7221 8.44171Z" fill="#1DA7FF"/>
                    </svg>
                </Link>


                <SidebarLinks/>

            </Box>
    );
}