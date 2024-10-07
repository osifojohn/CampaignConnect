import React, { useState } from 'react';
import styles from './SearchComponent.module.css';
import searchIcon from '../../../public/icons/searchIcon.svg';

interface SearchInputProps {
  onSearch: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <span></span>
      <input
        placeholder="Search Description"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
      />
      <button onClick={handleSearch}>
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};
