import React from 'react';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Search = ({entries, filteredEntries, setFilteredEntries}) => {
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = entries.filter((entry) => {
      return entry.word.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredEntries(newFilter);
  };

  const clearInput = () => {
    setFilteredEntries(entries);
    setWordEntered("");
  }

  return (
      <div className="searchInput">
        <input type="text"
          placeholder="Search..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {wordEntered.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
  );
}

export default Search;