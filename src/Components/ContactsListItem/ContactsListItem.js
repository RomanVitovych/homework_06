import React from 'react';
import styles from './ContactsListItem.module.css';
import PropTypes from 'prop-types';

const ContactsListItem = ({name, number, onRemove}) => {
    return (
        <li className={styles.listItem} >
            <p className={styles.listItemText} >{name}</p>
            <p className={styles.listItemText} >{number}</p>
            <button
            className={styles.removeBtn}
            type='button'
            onClick={onRemove}>
            &#10006;</button>
        </li>
    );
};

ContactsListItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}

export default ContactsListItem;