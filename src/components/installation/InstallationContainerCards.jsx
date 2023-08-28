import React, { useState } from 'react'
import Tag from '../shared/Tag/Tag'
import InstallationDetails from './InstallationDetails'
 import './installation.css'


function InstallationContainerCard({ installations }) {
 const [selectedInstallation, setSelectedInstallation] = useState(null)


  const getBackgroundColorByStatus = (role) => {
    switch (role) {
      case 'Etude':
        return '#AEDFF7';
      case 'EnService':
        return '#FFF3A3';
      case 'AttenteAutorisation':
        return '#98FFC9';
      case 'Projet':
        return '#FFCCE5';
      case 'SansSuite':
        return '#FFCCE5';
      case 'AInstaller':
        return '#FFCCE5';
      case 'RetardInstallation':
        return '#FFCCE5';
      default:
        return '#E0E0E0';
    }
  }



return (
  <div>
    {selectedInstallation ? (
      <div className="installation-details">
        <InstallationDetails installation={selectedInstallation} onBack={() => setSelectedInstallation(null)} />
      </div>
    ) : (
      <>
     <div className="heading">
      <h2>Installations</h2>
     </div>
      <div className="installationCardContainer">
        {installations.map((installation) => (
          <div className='installationCard' key={installation.id} onClick={() => setSelectedInstallation(installation)}>
            <div className="installationCardHeader">
              <p className='boldTxt'>{installation.refference} </p>
              <Tag txt={installation.status} backgroundColor={getBackgroundColorByStatus(installation.status)} />
            </div>
            {/* <p>{contact.email}</p> */}
          </div>
        ))}
      </div>
        </>
    )}
  </div>
)

}

export default InstallationContainerCard;
