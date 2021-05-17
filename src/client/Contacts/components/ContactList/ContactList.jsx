import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../../../redux/contacts/contacts-operations'
import { getVisibleContacts} from '../../../../redux/contacts/selectors'
import PropTypes from 'prop-types'
import ContactsListItem from '../ContactListItem'



function ContactList({contacts, onDeleteContact}) {
  const contactElements = contacts.map(({ id, ...props }) => (
      <ContactsListItem key={id}  {...props} onClick={()=> onDeleteContact(id)}
      />
    ))
        
    return (
        <ul>
            {contactElements}
        </ul>
    )
};


const mapStateToProps = (state) => ({
    contacts: getVisibleContacts(state)
})



const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(deleteContact(id))
}) 


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };
  
