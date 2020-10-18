import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/Contacts/contactsActions';
import styles from './ContactsForm.module.css';

class ContactsForm extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {
        name: '',
        number: '',
    }

    handlerChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }

    handlerSubmit = (e) => {
        const {name, number} = this.state;
        e.preventDefault();
        if (this.props.contactsBook.find(contactOne => contactOne.name === name)) {
            this.props.alertStatus()
            setTimeout(() => {this.props.alertStatus()}, 5000) 
        } else {
            this.props.onAddContact(name, number);
        }
        this.setState({name: '', number: ''});
    };

    render() {
        const {name, number} = this.state;
        return (
            <form 
            className={styles.phoneBookForm}
            onSubmit={this.handlerSubmit} >
                <label>
                    <p 
                    className={styles.phoneBookName} >
                         Name</p>
                    <input
                    className={styles.inputName}
                    placeholder='First name, Last name'
                    type='text'
                    value={name}
                    onChange={this.handlerChange}
                    name='name'
                    required />
                    <p 
                    className={styles.phoneBookNumber} >
                         Number</p>
                    <input
                    className={styles.inputNumber}
                    placeholder='000-00-00'
                    type='tel'
                    value={number}
                    onChange={this.handlerChange}
                    name='number'
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
    }
}

const mapStateToProps = (state) => ({
    contactsBook: state.contacts.contactsBook,
});

const mapDispatchToProps = {
    onAddContact: contactsActions.addContact,
    alertStatus: contactsActions.alertStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);