import React from 'react';
import PropTypes from 'prop-types';
import './searchBar.css';
import { FaSearch } from 'react-icons/fa'; // Importez l'icône FaSearch

const SearchBar = ({ placeholder, onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <FaSearch className="search-icon" /> {/* Ajoutez l'icône ici */}
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  placeholder: 'Rechercher...',
};

export default SearchBar;
