import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contacts/contact-slice";
import userReduser from './User/user-slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//     contacts: contactsSlice,
//     user: userReduser
//   })
  
const contactsPersistConfig = {
  key: 'user',
  storage,
  whitelist: 'token',
};

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    user: persistReducer(contactsPersistConfig, userReduser)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development'
});
const persistor = persistStore(store);

export {persistor, store}