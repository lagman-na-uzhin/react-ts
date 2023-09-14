import {instanceAxios} from "../../../util/axios";
import {RegistrationDto} from "../dto/registration.dto";
import {LoginDto} from "../dto/login.dto";

export const fetchSignUp =  (data: RegistrationDto) => {
    console.log(data)
    return instanceAxios.post('/auth/registration', data)
    }

export const  fetchSignIn = async (data: LoginDto) => {
            console.log(data)
        return await instanceAxios.post('/auth/login', data)
    }

