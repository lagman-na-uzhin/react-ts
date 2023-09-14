
import {AuthCard} from "../../components/AuthCard";
import {AuthForm, FormValues} from "../../components/AuthForm";
import {SubmitHandler} from "react-hook-form";
import {useSelector} from "react-redux";
import {fetchSignIn, fetchSignUp} from "../../api/auth-api";
import {useMutation} from "react-query"
import {RootState} from "../../../../store";
import {useNavigate} from 'react-router-dom'


export const Auth = () => {
    const navigate = useNavigate()
    const isLogin = useSelector((state: RootState) => state.isLogin.value);

    const fetchEndPoint = isLogin?fetchSignIn:fetchSignUp
    const { mutate } = useMutation(fetchEndPoint, {
        onSuccess: () => navigate('/'),
    });

    const onSubmit: SubmitHandler<FormValues> = data => {mutate(data)};

    return (
        <AuthCard  >
            <AuthForm isLogin={isLogin} onSubmit={onSubmit}/>
        </AuthCard>
    );
};

