import {FC, MouseEventHandler} from "react";
import {Avatar as MUIAvatar} from "@mui/material";

type CustomAvatarProps = {
    letter: string,
    onClick: MouseEventHandler
}

export const Avatar:FC<CustomAvatarProps > = ({letter,onClick}) => {
    return (
        <MUIAvatar sx={{cursor: 'pointer'}} onClick={onClick}>{letter}</MUIAvatar>
    );
};

