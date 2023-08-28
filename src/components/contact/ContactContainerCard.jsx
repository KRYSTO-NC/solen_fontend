import React, { useState } from 'react';
import Tag from '../shared/Tag/Tag';
import ContactDetails from './ContactDetails';
import './contact.css';
import SearchBar from '../shared/SearchBar/SearchBar';

function ContactContainerCard({ contacts }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // Nouvel état local pour la requête de recherche

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase()); // Mettre à jour la requête de recherche
  };

  // Filtrer les contacts en fonction de la requête de recherche
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.firstname.toLowerCase().includes(searchQuery) ||
      contact.lastname.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div>
      {selectedContact ? (
        <ContactDetails contact={selectedContact} onBack={() => setSelectedContact(null)} />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} placeholder="Rechercher un contact..." />
        <div className="cardContainer">
          {filteredContacts.map((contact) => (
            <div className='contact-card' key={contact.id} onClick={() => setSelectedContact(contact)}>
              <div className="cardHeader">
                <p className='boldTxt'>{contact.firstname} {contact.lastname}</p>
              </div>
              <p>{contact.email}</p>
            </div>
          ))}
        </div>
          </>
      )}
    </div>
  );
}

export default ContactContainerCard;
