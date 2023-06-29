import React, {FC} from 'react';

const InputField:FC = () => {
    return (
            <Input
                placeholder="Username…"
                {...register("username", {
                    required: "username is required",
                    pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Invalid user"
                    }
                })}
            />
    );
};

export default :;