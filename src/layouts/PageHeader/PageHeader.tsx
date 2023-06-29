import  { ReactNode , FC} from 'react';
import { Box, Typography, Divider } from '@mui/material';

interface PageHeaderProps {
    title: string;
    description: string;
    actions: ReactNode;
    children: ReactNode;
}

const PageHeader:FC<PageHeaderProps> = (
    {title, description, actions, children,}) => {

    return (
        <Box>
            <Box padding="15px" display="flex" justifyContent="space-between" marginBottom="10px">
                <div>
                    <Typography variant="h2">{title}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ pt: 2, pb: 2 }}>
                        {description}
                    </Typography>
                </div>
                <div>{actions}</div>
            </Box>
            <Divider />
            <Box padding="15px"  width="100%">{children}</Box>
        </Box>
    );
};

export default PageHeader;
