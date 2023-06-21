import {List,ListItem,ListItemButton,ListItemIcon, ListItemText} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';

export const SidebarLinks = () => {
    const links = [
        {key: 1, name: "Home", path: '/home', icon: <HomeIcon/>},
        {key: 2, name: "Dashboard", path: '/dashboard', icon: <DashboardIcon/> },
        {key: 3, name: "Teams", path: '/teams', icon: <GroupIcon/> },
        {key: 4, name: "Boards", path: '/boards', icon: <ContentPasteIcon/>},
        {key: 5, name: "Inbox", path: '/inbox', icon: <AllInboxIcon/>},
        {key: 6, name: "Timeline", path: "/timeline", icon: <ViewTimelineIcon/>}

    ]
    return (
        <List>
            {links.map((link ) => (
                    <ListItem key={link.key} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.name} />
                        </ListItemButton>
                    </ListItem>

            ))}
        </List>
    );
};
