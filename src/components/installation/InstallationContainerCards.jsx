import React, { useState } from 'react'
import Tag from '../shared/Tag/Tag'
import InstallationDetails from './InstallationDetails'
// import './UserContainerCard.css'

function InstallationContainerCard({ installations }) {
 const [selectedInstallation, setSelectedInstallation] = useState(null)

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
      {selectedInstallation ? (
        <InstallationDetails installation={selectedInstallation} onBack={() => setSelectedInstallation(null)} />
      ) : (
        installations.map((installation) => (
          <div className='userCard' key={installation.id} onClick={() => setSelectedInstallation(installation)}>
            <div className="userCardHeader">
              <p className='boldTxt'>{installation.id} </p>
              {/* <Tag txt={user.role} backgroundColor={getBackgroundColorByRole(user.role)} /> */}
            </div>
            {/* <p>{contact.email}</p> */}
          </div>
        ))
      )}
    </div>
  )
}

export default InstallationContainerCard;
