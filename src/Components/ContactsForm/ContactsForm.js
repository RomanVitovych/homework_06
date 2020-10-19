import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/Contacts/contactsActions';
import styles from './ContactsForm.module.css';

const ContactsForm = ({
    contactsBook,
    name,
    number,
    onAddContact, 
    alertStatus, 
    onHandleChangeName,
    onHandleChangeNumber}) => {

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (contactsBook.find(contactOne => contactOne.name === name)) {
            alertStatus()
            setTimeout(() => {alertStatus()}, 5000) 
        } else {
            onAddContact(name, number);
        }
        // this.setState({name: '', number: ''});
        onHandleChangeName('')
        onHandleChangeNumber('')
    };

     return (
        <form 
         className={styles.phoneBookForm}
         onSubmit={handlerSubmit} >
              <label>
                   <p 
                   className={styles.phoneBookName} >
                        Name</p>
                   <input
                   className={styles.inputName}
                   placeholder='First name, Last name'
                   type='text'
                   value={name}
                   onChange={e => onHandleChangeName(e.target.value)}
                   // name='name'
                   required />
                   <p 
                   className={styles.phoneBookNumber} >
                        Number</p>
                   <input
                   className={styles.inputNumber}
                   placeholder='000-00-00'
                   type='tel'
                   value={number}
                   onChange={e => onHandleChangeNumber(e.target.value)}
                   // name='number'
                   pattern='[0-9]{3}-[0-9]{2}-[0-9]{2}' 
                   required />
            </label>
             <br />
            <button 
            className={styles.button}
            type='submit' >
                Add contact
            </button>
        </form>
    );
};

const mapStateToProps = (state) => ({
    contactsBook: state.contacts.contactsBook,
    name: state.contacts.nextName,
    number: state.contacts.nextNumber,
});

const mapDispatchToProps = {
    onAddContact: contactsActions.addContact,
    alertStatus: contactsActions.alertStatus,
    onHandleChangeName: contactsActions.changeName,
    onHandleChangeNumber: contactsActions.changeNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);




    // static propTypes = {};
    // static defaultProps = {};

    // state = {
    //     name: '',
    //     number: '',
    // }

    // handlerChange = (e) => {
    //     const {name, value} = e.target;
    //     this.setState({
    //         [name]: value,
    //     });
    // }