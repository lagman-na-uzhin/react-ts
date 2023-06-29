import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "../../../store";

export interface isLoginState {
    value: boolean
}

const initialState: isLoginState = {
    value: false,
}

export const isLoginSlice = createSlice({
    name: 'isLogin',
    initialState,
    reducers: {
        toggleLogin: (state) => {
            state.isLogin = !state.isLogin;
        },
    },
})

export const { toggleLogin} = isLoginSlice.actions

export default isLoginSlice.reducer