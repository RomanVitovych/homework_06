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