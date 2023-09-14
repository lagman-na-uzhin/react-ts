import { FC, MouseEventHandler, ReactNode} from "react";
import {BackdropProps, Backdrop} from "@mui/material";


type BlurryBackgroundProps = {
    children: ReactNode,
    handleClose: MouseEventHandler<HTMLElement>
}
export const BlurryBackground:FC<BackdropProps & BlurryBackgroundProps> = ({handleClose, open, children}) => {
    return (
        <Backdrop open={open} onClick={handleClose}>
            {children}
        </Backdrop>
    );
};
