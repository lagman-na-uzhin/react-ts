import { ReactNode, FC, MouseEventHandler} from 'react';
import { Menu, MenuItem } from '@mui/material';
import {useStyles} from "./Dropdown.styles";

type DropdownProps = {
    menuItems: ReactNode[];
    children: ReactNode;
    handleClose: MouseEventHandler;
    anchorEl: null | HTMLElement;
    open: boolean;
};

export const Dropdown: FC<DropdownProps> = ({
         menuItems,
         children,
         handleClose,
         anchorEl,
         open,}) => {


    const classes = useStyles( );

    return (
        <>
            {children}

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                classes={{ paper: classes.root }}
            >
                {menuItems.map((menuItem) => (
                    <MenuItem onClick={handleClose}>{menuItem}</MenuItem>
                ))}
            </Menu>
        </>
    );
};
