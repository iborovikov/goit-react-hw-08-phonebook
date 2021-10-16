import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async () => {
        try {
            const { data } = await axios.get('/contacts');
            return data
        } catch (error) {
          
        }
    }
);
const postContact = createAsyncThunk('contacts/postContact',
    async (contactData) => {
        try {
            const { data } = await axios.post('/contacts', contactData)
            return data
        } catch (error) {
           
        }
    }
);
const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id) => {
        try {
            await axios.delete(`/contacts/${id}`)
            return id
        } catch (error) {
            
        }
    }
);
const correctContact = createAsyncThunk('contacts/correctContact',
    async ({id, name, number}) => {
        try {
            const body = {
                name,
                number
            }
            await axios.patch(`/contacts/${id}`, body)
        } catch (error) {
            
        }
    }
)

export { fetchContacts, postContact, deleteContact, correctContact };
