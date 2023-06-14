import { createSlice } from "@reduxjs/toolkit";
import { AUTH_SLICE_NAME, AUTH_STORAGE_KEY } from "../../constants/store";
import { IAuth } from "../../types/auth";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const initialState: IAuth = {
    user: null
}

const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload.user;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const {
    login,
    logout
} = authSlice.actions;

const persistConfig = {
    key: AUTH_STORAGE_KEY,
    storage
}

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export default persistedReducer;