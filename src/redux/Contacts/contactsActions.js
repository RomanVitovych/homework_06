import { createAction } from '@reduxjs/toolkit';
import { number } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
// import actionTypes from './contactsActionTypes';

// const addContact = (name, number) => ({
//     type: actionTypes.ADD,
//     payload: {
//         contact: {
//             id: uuidv4(),
//             name,
//             number,
//         },
//     },
// });
const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        contact: {
            id: uuidv4(),
            name,
            number,
        },
    },
}));

// const alertStatus = () => ({
//     type: actionTypes.ALERT,
// });
const alertStatus = createAction('contacts/alert');

// const removeContact = (contactId) => ({
//     type: actionTypes.REMOVE,
//     payload: {contactId},
// });
const removeContact = createAction('contacts/remove', contactId => ({
    payload: {contactId},
}));

// const changeFilter = (filter) => ({
//     type:actionTypes.CHANGE_FILTER,
//     payload: {filter}, 
// });
const changeFilter = createAction('contacts/changeFilter', filter => ({
    payload: {filter},
}));

// const changeName = (name) => ({
//     type: actionTypes.CHANGE_NAME,
//     payload: {name},
// });
const changeName = createAction('contacts/changeName', name => ({
    payload: {name},
}));

// const changeNumber = (number) => ({
//     type: actionTypes.CHANGE_NUMBER,
//     payload: {number},
// });
const changeNumber = createAction('contacts/changeNumber', number => ({
    payload: {number},
}));


export default {
    addContact,
    alertStatus,
    removeContact,
    changeFilter,
    changeName,
    changeNumber,
};