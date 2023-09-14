import { Input, Stack } from "@mui/material";
import { FC } from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import {inputField} from "../types/inputField";
import {ErrorAlert} from "../../../shared/ErrorAlert/ErrorAlert";


type AuthInputsProps = {
    register: any
    inputFields: inputField[],
    errors: any
};

export const AuthInputs: FC<AuthInputsProps> = ({ register, inputFields, errors }) => {
    const isLogin = useSelector((state: RootState) => state.isLogin.value);

    return (
        <Stack mt={5} spacing={5}>

            {isLogin
                ? inputFields.slice(1).map((field) => (
                    <>
                    <Input
                        placeholder={field.placeholder}
                        {...register(field.name, {
                            required: field.required,
                            pattern: {
                                value: field.patternValue,
                                message: field.patternMsg,
                            },
                        })}
                    />
                    {errors[field.name] && <ErrorAlert message={errors[field.name].message}/>}
                    </>
                ))
                : inputFields.map((field) => (
                    <>
                    <Input
                        placeholder={field.placeholder}
                        {...register(field.name, {
                            required: field.required,
                            pattern: {
                                value: field.patternValue,
                                message: field.patternMsg,
                            },
                        })}
                    />
                        {errors[field.name] && <ErrorAlert message={errors[field.name].message}/>}
                    </>
                ))}

        </Stack>
    );
};
