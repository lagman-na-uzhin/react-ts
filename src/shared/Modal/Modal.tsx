import {Modal as MUIModal, ModalProps, Typography, Box} from '@mui/material';
import {FC, Dispatch, SetStateAction} from "react";
import {styles} from './MUIModal.styles'



type PopupProps = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    title?: string
}

export const Modal:FC<ModalProps&PopupProps> = ({open,setOpen, children, title}) => {
    const handleClose = () => {
        setOpen(false)
    }
    return (
                <MUIModal open={open} onClose={handleClose}>
                    <Box sx={styles}>
                        <Typography variant="body1" component="h1">
                            {title}
                        </Typography>
                            {children}
                    </Box>
                </MUIModal>
    )
}