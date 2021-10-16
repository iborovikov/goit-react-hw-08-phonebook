import React from 'react';
import ReactDOM from 'react-dom';
import { persistor, store } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
        
    , document.getElementById('root'));


