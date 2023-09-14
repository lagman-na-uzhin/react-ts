import { FC } from 'react';
import { Input } from "@mui/material";

type InputFieldProps = {
    register: any;
    name: string;

};

export const InputField: FC<InputFieldProps> =
    ({
         register,
         name,
     }) => {
    return (
        <Input
            {...register(name, {
                required: `${name}+' ' + is required`,
            })}
        />
    );
};
