import{FC,useState,MouseEvent} from 'react';
import {Dropdown} from "../../shared/Dropdown/Dropdown";
import {Avatar} from "../../shared/Avatar/Avatar";
import {Link} from "react-router-dom";
import {Typography} from '@mui/material'

const HeaderAvatar:FC = () => {
    const menuItems = [
        (<Link to="/profile"><Typography variant="body1">Profile</Typography></Link>),
        (<Link to="/test"><Typography variant="body1">Test</Typography></Link>),
    ]
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Dropdown  menuItems={menuItems} handleClose={handleClose} anchorEl={anchorEl} open={!!anchorEl}>

                <Avatar onClick={handleClick} letter='H'/>

        </Dropdown>
    );
};

export default HeaderAvatar;