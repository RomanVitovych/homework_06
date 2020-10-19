import React from 'react';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import AlertMessage from '../AlertMessage/AlertMessage';

const Book = () => {
    return (
        <>
            <AlertMessage />
            <ContactsForm />
            <Filter />
            <ContactsList />
            {/* <AlertMessage alert={alert} /> */}
            {/* <ContactsForm onAddName={this.addName} /> */}
            {/* <Filter value={filter} onChangeFilter={this.changeFilter} /> */}
            {/* <ContactsList contacts={visibleContacts} onRemoveName={this.removeName} /> */}
        </>
    );
};

export default Book;







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