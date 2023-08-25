import { IoIosArrowBack } from 'react-icons/io'

function UserDetails({ user, onBack }) {
    return (
      <div className='userDetails'>
        <button className='btn btn-sm btn-danger' onClick={onBack}><IoIosArrowBack /> Retour</button>
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Rôle: {user.role}</p>
      </div>
    );
  }
  
  export default UserDetails;
  