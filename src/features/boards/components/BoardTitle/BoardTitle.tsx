import {Icon, Box, Typography, IconButton} from "@mui/material";
import {FC} from "react";
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


type BoardTitleProps = {
    icon: string,
    name: string
}

export const BoardTitle:FC<BoardTitleProps> = ({icon, name}) => {

    return (
        <Box
            sx={{backgroundColor: 'background.paper', height: '45px', borderRadius: '10px', padding: '10px'}}
            width='20%'
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >

            <Icon>{icon}</Icon>
            <Typography>{name}</Typography>

            <Box>
                <IconButton>
                    <AddIcon/>
                </IconButton>

                <IconButton>
                    <MoreHorizIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};
