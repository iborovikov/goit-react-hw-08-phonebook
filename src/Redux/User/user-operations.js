import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
};

const registration = createAsyncThunk('users/registration', async (credantials) => {
    const { data } = await axios.post('/users/signup', credantials);
    token.set(data.token);
    return data
});

const logedIn = createAsyncThunk('users/logedIn', async (credantials) => {
    const { data } = await axios.post('/users/login', credantials);
    token.set(data.token);
    return data;
});

const logOut = createAsyncThunk('users/logOut', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        return error
    }
});
const getCurrentUserData = createAsyncThunk('user/getCurrentUserData', async (_, { getState }) => {
    const persistedToken = getState().user.token
    if (persistedToken === null) {
        return ({
            name: '',
            email: '',
            isLogedIn: false
        })
    }
    token.set(persistedToken)
    try {
        const { data } = await axios.get('/users/current')
        return ({
            name: data.name,
            email: data.email,
            isLogedIn: true
        })
    } catch (error) {
        return error
    }
});



export {
    registration,
    logedIn,
    logOut,
    getCurrentUserData
};