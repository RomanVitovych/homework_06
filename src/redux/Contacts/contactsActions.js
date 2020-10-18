import { v4 as uuidv4 } from 'uuid';
import actionTypes from './contactsActionTypes';

const addContact = (name, number) => ({
    type: actionTypes.ADD,
    payload: {
        contact: {
            id: uuidv4(),
            name,
            number,
        },
    },
});

const alertStatus = () => ({
    type: actionTypes.ALERT,
});

const removeContact = (contactId) => ({
    type: actionTypes.REMOVE,
    payload: {contactId},
});

const changeFilter = (filter) => ({
    type:actionTypes.CHANGE_FILTER,
    payload: {filter}, 
});

export default {
    addContact,
    alertStatus,
    removeContact,
    changeFilter,
};