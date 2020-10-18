import {combineReducers} from 'redux';
import actionTypes from './contactsActionTypes';

const contactsBook = (state = [], {type, payload}) => {
    switch (type) {
        case actionTypes.ADD:
            return [...state, payload.contact];

        case actionTypes.REMOVE:
            return state.filter(contact => contact.id !== payload.contactId);
                
        default:
            return state;
    }
};

const alert = (state = false, {type}) => {
    switch (type) {
        case actionTypes.ALERT:
            return !state;
        
        default:
            return state;    
    }
};

const filters = (state = '', {type, payload}) => {
    switch (type) {
        case actionTypes.CHANGE_FILTER:
        // case contactsActions.changeFilter.type:
            return payload.filter;

        default:
            return state;
    }
};

export default combineReducers({
    contactsBook,
    alert,
    filters,
});


// state = {
//     contacts: [
//         { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
//         { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
//         { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
//         { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
//     ],
//     filter: '',
//     alert: false,
// }

// addName = (name, number) => {
//     const contact = {
//         id: uuidv4(),
//         name,
//         number,
//     };
//     const chekContact = this.state.contacts.find(
//         contact => contact.name === name
//     );
//     if (!chekContact) {
//         this.setState(prevState => {
//             return {
//                 contacts: [...prevState.contacts, contact]
//             }
//         })
//     }   else {
//         // alert(`Contact already exists!`)
//         this.setState({alert: true})
//         setTimeout(() => {this.setState({alert: false})}, 5000) 
//     };
// };

// removeName = (contactId) => {
//     this.setState(prevState => {
//         return {
//             contacts: prevState.contacts.filter(({id}) => id !== contactId)
//         }
//     });   
// };

// changeFilter = (filter) => {
//     this.setState({filter})
// }