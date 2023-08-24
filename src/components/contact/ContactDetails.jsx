import { IoIosArrowBack } from 'react-icons/io'

function ContactDetails({ contact, onBack }) {
    console.log(contact);
  
    return (
      <div>
        <button className='btn btn-sm btn-danger' onClick={onBack}><IoIosArrowBack /> Retour</button>
        <h2>{contact.firstname} {contact.lastname}</h2>
        <h2>{contact.email}</h2>
        <h2>{contact.phone}</h2>
        <h2>{contact.phone2}</h2>
      </div>
    );
  }
  
  export default ContactDetails;
  