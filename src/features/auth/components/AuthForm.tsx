import {SubmitHandler, useForm} from "react-hook-form"
import {AuthInputs} from "./AuthInputs";
import {Input} from "@mui/material";
import {FC} from "react";
import {inputField} from "../types/inputField";
import {LoginDto} from "../dto/login.dto";
import {RegistrationDto} from "../dto/registration.dto";

const inputFields:inputField[] = [
    {
        placeholder: "Username...",
        name: "username",
        required: "Username is required",
        patternValue: /^[A-Za-z]+$/i,
        patternMsg: "Invalid username",
    },
    {
        placeholder: "Email...",
        name: "email",
        required: "Email is required",
        patternValue: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        patternMsg: "Invalid email address",
    },
    {
        placeholder: "Password...",
        name: "password",
        required: "Password is required",
        patternValue: /^[A-Za-z]+$/i,
        patternMsg: "Invalid password",
    },
];

type AuthFormProps = {
    onSubmit: SubmitHandler<FormValues>,
    isLogin: boolean
}

export type FormValues = LoginDto & RegistrationDto

export const  AuthForm:FC<AuthFormProps> = ({onSubmit, isLogin}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        mode: 'onSubmit',
        defaultValues: isLogin ? ({} as LoginDto) : ({} as RegistrationDto) // Начальные значения формы
    });


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <AuthInputs errors={errors} inputFields={inputFields} register={register}/>

            <Input sx={{width: '100%', mt: 5, height: 50, backgroundColor: 'action.active'}} type="submit"/>
        </form>
    )
}
