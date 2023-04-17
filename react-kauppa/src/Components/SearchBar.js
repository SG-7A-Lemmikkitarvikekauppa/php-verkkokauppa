import React from 'react'
import './Header.css'

function SearchBar() {
    return (
      <div className='search-bar'>
        <input type="text" placeholder="Etsi tuotteita" />
        <button type="submit">Hae</button>
      </div>
    );
  }

export default SearchBar