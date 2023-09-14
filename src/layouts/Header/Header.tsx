import {Box, Divider, Toolbar, Typography} from "@mui/material";
import {appbar,search} from "./Header.styles";
import {SearchInput} from "../../shared/SearchInput/SearchInput";
import {FC} from "react";
import HeaderAvatar from "./HeaderAvatar";


export const Header:FC = () => {

    return (
        <Box sx={appbar}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="h3" component="h3" color="white"  fontWeight="300">Page 2</Typography>

                <SearchInput placeholder='Search...' variant="filled" sx={search} width={200}/>

                <HeaderAvatar/>
            </Toolbar>
            <Divider/>
        </Box>
    );
};

