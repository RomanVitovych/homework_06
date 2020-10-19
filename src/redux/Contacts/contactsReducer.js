import {combineReducers} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from './contactsActionTypes';
import contactsActions from './contactsActions'

const handleAddContact = (state, action) => {
    return [...state, action.payload.contact]
};
const handleRemoveContact = (state, action) => {
    return state.filter(contact => contact.id !== action.payload.contactId)
};

const contactsBook = createReducer([], {
    [contactsActions.addContact]: handleAddContact,
    [contactsActions.removeContact]: handleRemoveContact,
});
// const contactsBook = (state = [], {type, payload}) => {
//     switch (type) {
//         // case actionTypes.ADD:
//         case contactsActions.addContact.type:
//             return [...state, payload.contact];

//         // case actionTypes.REMOVE:
//         case contactsActions.removeContact.type:
//             return state.filter(contact => contact.id !== payload.contactId);
                
//         default:
//             return state;
//     }
// };

const alert = createReducer(false, {
    [contactsActions.alertStatus]: (state, action) => !state,
});
// const alert = (state = false, {type}) => {
//     switch (type) {
//         // case actionTypes.ALERT:
//         case contactsActions.alertStatus.type:
//             return !state;
        
//         default:
//             return state;    
//     }
// };

const filters = createReducer('', {
    [contactsActions.changeFilter]: (state, action) => action.payload.filter,
});
// const filters = (state = '', {type, payload}) => {
//     switch (type) {
//         // case actionTypes.CHANGE_FILTER:
//         case contactsActions.changeFilter.type:
//             return payload.filter;

//         default:
//             return state;
//     }
// };

const nextName = createReducer('', {
    [contactsActions.changeName]: (state, action) => action.payload.name,
});
// const nextName = (state = '', {type, payload}) => {
//     switch (type) {
//         // case actionTypes.CHANGE_NAME:
//         case contactsActions.changeName.type:
//             return payload.name;

//         default:
//             return state; 
//     }
// };

const nextNumber = createReducer('', {
    [contactsActions.changeNumber]: (state, action) => action.payload.number,
});
// const nextNumber = (state = '', {type, payload}) => {
//     switch (type) {
//         // case actionTypes.CHANGE_NUMBER:
//         case contactsActions.changeNumber.type:
//             return payload.number;

//         default:
//             return state; 
//     }
// };


export default combineReducers({
    contactsBook,
    alert,
    filters,
    nextName,
    nextNumber,
});










