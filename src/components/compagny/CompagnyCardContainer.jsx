import React, { useState } from 'react'
import Tag from '../shared/Tag/Tag'
import CompagnyDetails from './CompagnyDetails'
import './compagny.css'

function CompagnyCardContainer({ compagny }) {
  const [selectedCompagny, setSelectedCompagny] = useState(null)

  const getBackgroundColorCompagnyType = (type) => {
    switch (type) {
      case 'EI':
        return '#AEDFF7'
      case 'SA':
        return '#FFF3A3'
      case 'SARL':
        return '#98FFC9'
      case 'SAS':
        return '#FFCCE5'
      case 'SNC':
        return '#A3C3FF'
      case 'Associations':
        return '#D4A3FF'
      case 'Administration':
        return '#FFA3A8'
      case 'SCI':
        return '#A3FFC5'
      case 'SCP':
        return '#FFA3D1'
      case 'GIE':
        return '#D1FFA3'
      case 'GIP':
        return '#FFC3A3'
      default:
        return '#E0E0E0'
    }
  }
  return (
    <div className="userCardContainer">
      {selectedCompagny ? (
        <CompagnyDetails
          compagny={selectedCompagny}
          onBack={() => setSelectedCompagny(null)}
        />
      ) : (
        compagny.map((compagny) => (
          <div
            className="compagnyCard"
            key={compagny.id}
            onClick={() => setSelectedCompagny(compagny)}
          >
            <div className="compagnyCardHeader">
              <Tag
                txt={compagny.type}
                backgroundColor={getBackgroundColorCompagnyType(compagny.type)}
              />
              <p className="boldTxt">{compagny.nomCommercial}</p>
            </div>
            <p> ridet :{compagny.ridet}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default CompagnyCardContainer;
