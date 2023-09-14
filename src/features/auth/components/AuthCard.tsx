import { Box, Button, Container, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { toggleLogin } from "../redux/isLoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from  "../../../store/index"

type AuthCardProps = {
    children: ReactNode;
};

export const AuthCard: FC<AuthCardProps> = ({ children }) => {
    const isLogin = useSelector((state: RootState) => state.isLogin.value);
    const dispatch = useDispatch();

    return (
        <Container
            maxWidth="md"
            sx={{ backgroundColor: "background.paper", borderRadius: '10px', margin: '0 auto',p: '10%'}}
        >
            <Box sx={{ display: 'grid', placeItems: 'center' }}>

                <Typography pb={2} fontWeight='700' variant="h1">
                    {isLogin ? "Sign In" : "Sign Up"} to SuperPage
                </Typography>

                <Typography sx={{ color: 'text.secondary', justifyContent: 'center' }} fontWeight='500' variant="body1">

                    {isLogin
                        ? (
                        <Button onClick={() => dispatch(toggleLogin())}>
                            <Typography color="secondary" variant="body2">
                                Already have an account?
                            </Typography>
                        </Button>)

                        : (
                        <Button onClick={() => dispatch(toggleLogin())}>
                            <Typography color="secondary" variant="body2">
                                Don't have an account?
                            </Typography>
                        </Button>
                    )}

                </Typography>
            </Box>
            {children}
        </Container>
    );
};
