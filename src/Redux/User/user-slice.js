import { createSlice } from "@reduxjs/toolkit";
import { registration, logedIn, logOut, getCurrentUserData } from './user-operations'


const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLogedIn: false,
    isRefreshing: false,
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registration.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogedIn = true
        },
        [logedIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogedIn = true
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
        [getCurrentUserData.rejected](state, action) {
            state.isRefreshing = false
        },
        [getCurrentUserData.pending](state, action) {
            state.isRefreshing = true
        }

    }
})

export default userSlice.reducer
