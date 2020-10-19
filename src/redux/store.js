// import {createStore, combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contactsReducer';

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// });

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});

export default store;