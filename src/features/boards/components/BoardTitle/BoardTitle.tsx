import {Icon, Box, Typography, IconButton} from "@mui/material";
import {FC} from "react";
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


type BoardHeaderProps = {
    icon: string,
    name: string
}

const BoardHeader:FC<BoardHeaderProps> = ({icon, name}) => {

    return (
        <Box
            sx={{bgcolor: 'background.paper', height: '45px', borderRadius: '10px'}}
            width='15%'
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

export default BoardHeader;