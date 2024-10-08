import React, { useState } from 'react';
import styles from './SearchComponent.module.css';
import searchIcon from '../../../public/icons/searchIcon.svg';
import { SearchOutlined } from '@ant-design/icons';

interface SearchInputProps {
  onSearch: (value: string) => void;
  placeholder: string;
  containerClass: string;
  button: React.ReactNode;
}

interface DifferentDevicesProps {
  onSearch: (value: string) => void;
}

export const DesktopSearchInput: React.FC<DifferentDevicesProps> = ({
  onSearch,
}) => (
  <SearchInput
    onSearch={onSearch}
    placeholder="Search Description"
    containerClass={styles.desktopInputContainer}
    button={
      <button className={styles.desktopButton}>
        <img src={searchIcon} alt="Search" />
      </button>
    }
  />
);

export const MobileSearchInput: React.FC<DifferentDevicesProps> = ({
  onSearch,
}) => (
  <SearchInput
    onSearch={onSearch}
    placeholder="Search Campaigns"
    containerClass={styles.mobileInputContainer}
    button={
      <button className={styles.mobileButton}>
        <SearchOutlined className={styles.searchIcon} alt="" />
      </button>
    }
  />
);

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  placeholder,
  containerClass,
  button,
}) => {
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
    <div className={`${containerClass} ${styles.inputContainer}`}>
      {button}
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
      />
    </div>
  );
};
