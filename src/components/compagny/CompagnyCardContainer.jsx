import React, { useState } from 'react';
import Tag from '../shared/Tag/Tag';
import CompagnyDetails from './CompagnyDetails';
import './compagny.css';
import SearchBar from '../shared/SearchBar/SearchBar';

function CompagnyCardContainer({ compagny }) {
  const [selectedCompagny, setSelectedCompagny] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState(''); // Nouvel état pour le filtre de type

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleTypeChange = (e) => {
    setFilterType(e.target.value); // Mettre à jour le type de filtre
  };
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
  const filteredCompagny = compagny.filter((compagny) => {
    return (
      compagny.nomCommercial.toLowerCase().includes(searchQuery) &&
      (filterType ? compagny.type === filterType : true)
    );
  });

  return (
    <div>
      {selectedCompagny ? (
        <CompagnyDetails
          compagny={selectedCompagny}
          onBack={() => setSelectedCompagny(null)}
        />
      ) : (
        <>
          <div className="searchAndFilterCompagny">
            <div>

            <SearchBar onSearch={handleSearch} placeholder="Rechercher une entreprise..." />
            </div>
            <div>

            {/* Ajout du filtre par type */}
            <select onChange={handleTypeChange} value={filterType}>
              <option value="">Filtrer par forme juridiques</option>
              <option value="">Tous</option>
              <option value="EI">EI</option>
              <option value="SA">SA</option>
              <option value="SARL">SARL</option>
              <option value="SAS">SAS</option>
              <option value="SNC">SNC</option>
              <option value="Association">Association</option>
              <option value="Administration">Administration</option>
              <option value="SCI">SCI</option>
              <option value="SCP">SCP</option>
              <option value="GIE">GIE</option>
              <option value="GIP">GIP</option>
            </select>
            </div>
          </div>
          <div className="cardContainer">
            {filteredCompagny.map((compagny) => (
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
                <p>ridet :{compagny.ridet}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CompagnyCardContainer;