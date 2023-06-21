import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Modal, ModalProps} from '@mui/material';
import {FC, Dispatch, SetStateAction} from "react";
import {BlurryBackground} from "../BlurryBackground/BlurryBackground";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



type PopupProps = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    title: string
}

export const Popup:FC<ModalProps&PopupProps> = ({open,setOpen, children, title}) => {
    const handleClose = () => {
        setOpen(false)
    }
    return (
            <BlurryBackground open={open} handleClose={handleClose}>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <Typography variant="body1" component="h1">
                            {title}
                        </Typography>
                        {children}
                    </Box>
                </Modal>
            </BlurryBackground>
    )
}