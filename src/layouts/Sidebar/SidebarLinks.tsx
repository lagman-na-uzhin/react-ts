import {List, ListItem, ListItemButton, ListItemIcon} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import { FC} from "react";
import {useStyles} from "./Sidebar.styles";
import {Link} from "react-router-dom";



export const SidebarLinks:FC= () => {
    const classes = useStyles()
    const links = [
        {key: 1, name: "Home", path: '/home', icon: <HomeIcon sx={{color: 'white'}} />},
        {key: 2, name: "Dashboard", path: '/dashboard', icon: <DashboardIcon sx={{color: 'white'}} /> },
        {key: 3, name: "Teams", path: '/teams', icon: <GroupIcon sx={{color: 'white'}}/> },
        {key: 4, name: "Bards", path: '/boards', icon: <ContentPasteIcon sx={{color: 'white'}}/>},
        {key: 5, name: "Inbox", path: '/inbox', icon: <AllInboxIcon sx={{color: 'white'}}/>},
        {key: 6, name: "Timeline", path: "/timeline", icon: <ViewTimelineIcon sx={{color: 'white'}}/>}

    ]

    return (
        <List >
            {links.map((link ) => (
                    <Link to={link.path}>
                        <ListItem alignItems='center'  key={link.key} disablePadding>
                            <ListItemButton >
                                <ListItemIcon className={classes.classNameIcon}>
                                    {link.icon }
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Link>
            ))}
        </List>
    );
};
