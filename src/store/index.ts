import { configureStore } from '@reduxjs/toolkit'
import isLoginReducer from "../features/auth/redux/isLoginSlice";

export const store = configureStore({
    reducer: {
        isLogin: isLoginReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch