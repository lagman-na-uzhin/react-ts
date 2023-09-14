import { createSlice } from '@reduxjs/toolkit'

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
            state.value = !state.value;
        },
    },
})

export const { toggleLogin} = isLoginSlice.actions

export default isLoginSlice.reducer