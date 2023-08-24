import React, { useState } from 'react'
import Tag from '../shared/Tag/Tag'
import ContactDetails from './ContactDetails'
// import './UserContainerCard.css'

function ContactContainerCard({ contacts }) {
 const [selectedContact, setSelectedContact] = useState(null)

//   const getBackgroundColorByRole = (role) => {
//     switch (role) {
//       case 'user':
//         return '#AEDFF7';
//       case 'admin':
//         return '#FFF3A3';
//       case 'technique':
//         return '#98FFC9';
//       case 'Commercial':
//         return '#FFCCE5';
//       default:
//         return '#E0E0E0';
//     }
//   }



  return (
    <div className="userCardContainer">
      {selectedContact ? (
        <ContactDetails contact={selectedContact} onBack={() => setSelectedContact(null)} />
      ) : (
        contacts.map((contact) => (
          <div className='userCard' key={contact.id} onClick={() => setSelectedContact(contact)}>
            <div className="userCardHeader">
              <p className='boldTxt'>{contact.firstname} {contact.lastname}</p>
              {/* <Tag txt={user.role} backgroundColor={getBackgroundColorByRole(user.role)} /> */}
            </div>
            <p>{contact.email}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default ContactContainerCard;
