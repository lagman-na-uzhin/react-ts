import {Alert, Typography} from "@mui/material";
import {FC} from "react";



type ErrorAlertProps = {
    message: string,
}

export const ErrorAlert:FC<ErrorAlertProps> = ({message}) => {
    return (
        <Alert sx={{backgroundColor: 'transparent', border: '1px solid', borderColor: 'error.main'}} severity="error">
            <Typography  sx={{color: 'error.main'}} variant="body1">
                {message}
            </Typography>
        </Alert>
    );
};

