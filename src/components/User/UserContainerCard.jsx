import React, { useState } from 'react'
import Tag from '../shared/Tag/Tag'
import UserDetails from './UserDetails'
import './UserContainerCard.css'

function UserContainerCard({ users }) {
  const [selectedUser, setSelectedUser] = useState(null)

  const getBackgroundColorByRole = (role) => {
    switch (role) {
      case 'user':
        return '#AEDFF7';
      case 'admin':
        return '#FFF3A3';
      case 'technique':
        return '#98FFC9';
      case 'Commercial':
        return '#FFCCE5';
      default:
        return '#E0E0E0';
    }
  }

  return (
    <div className="userCardContainer">
      {selectedUser ? (
        <UserDetails user={selectedUser} onBack={() => setSelectedUser(null)} />
      ) : (
        users.map((user) => (
          <div className='userCard' key={user.id} onClick={() => setSelectedUser(user)}>
            <div className="userCardHeader">
              <p className='boldTxt'>{user.username}</p>
              <Tag txt={user.role} backgroundColor={getBackgroundColorByRole(user.role)} />
            </div>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default UserContainerCard;
