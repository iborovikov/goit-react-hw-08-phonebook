import { createSlice } from "@reduxjs/toolkit";
import { registration, logedIn, logOut, getCurrentUserData } from './user-operations'


const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLogedIn: false,
    isRefreshing: false,
    isPasswordCorrect: true,
    isUserAlradyRegister: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registration.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogedIn = true;
            state.isUserAlradyRegister = false
        },
        [registration.rejected](state) {
            state.isUserAlradyRegister = true
        },
        [logedIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogedIn = true;
            state.isPasswordCorrect = true
        },
        [logedIn.rejected](state) {
            state.isPasswordCorrect = false
        },
        [logOut.fulfilled](state) {
            state.user = { name: '', email: '' };
            state.token = null;
            state.isLogedIn = false;
        },
        [getCurrentUserData.fulfilled](state, action) {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isLogedIn = action.payload.isLogedIn;
            state.isRefreshing = false
        },
        [getCurrentUserData.rejected](state) {
            state.isRefreshing = false
        },
        [getCurrentUserData.pending](state) {
            state.isRefreshing = true
        }
    }
})

export default userSlice.reducer
