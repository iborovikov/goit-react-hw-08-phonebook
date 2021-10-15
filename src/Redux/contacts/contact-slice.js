import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, postContact, deleteContact } from './contacts-operations'
import { setFilter } from './contact-actions';
import {logOut} from '../User/user-operations'


const initialState = {
    items: [],
    filter: '',
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.fulfilled](state, action) {
            state.items = action.payload;

        },
        [setFilter](state, action) {
            state.filter = action.payload
        },
        [postContact.fulfilled](state, action) {
            state.items.push(action.payload)
        },
        [deleteContact.fulfilled](state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
      
        [logOut.fulfilled](state) {
            state.items= [];
            state.filter= '';
        }
    }
})

export default contactsSlice.reducer