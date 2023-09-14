import PageHeader from "../../../../layouts/PageHeader/PageHeader";
import {Button, Typography} from "@mui/material";


export const BoardHeader = () => {
    return (
        <PageHeader
            title="Tasks Board"
            description="Create and complete tasks using boards"
        actions= {
            <Button variant="contained" sx={{backgroundColor: "action.active"}} >
                <Typography fontWeight="300" variant='body1' color="text.primary">Create Board
                </Typography>
            </Button>
        }
        >
        </PageHeader>
    );
};

