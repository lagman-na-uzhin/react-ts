import { FC, MouseEventHandler, ReactNode} from "react";
import {BackdropProps, Backdrop} from "@mui/material";

const backdropStyle = {
    color: "#fff"
}
type BlurryBackgroundProps = {
    children: ReactNode,
    handleClose: MouseEventHandler<HTMLElement>
}
export const BlurryBackground:FC<BackdropProps & BlurryBackgroundProps> = ({handleClose, open, children}) => {
    return (
        <Backdrop
            sx={backdropStyle}
            open={open}
            onClick={handleClose}
        >
            {children}
        </Backdrop>
    );
};
