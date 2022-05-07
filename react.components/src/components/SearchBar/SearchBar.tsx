import React, { FC, useEffect, useState } from 'react';
import ItemStyles from './SearchBar.module.css';
import { ISearchBarProps } from '../../types/interfaces';

const SearchBar: FC<ISearchBarProps> = ({
  name = 'search-bar',
  type = 'text',
  placeholder = 'Search...',
  className = ItemStyles.searchBar,
  updateCharactersByName = () => null,
}) => {
  const [searchRequest, setSearchRequest] = useState<string>('');

  useEffect(() => {
    const savedRequest = localStorage.getItem(name) || '';
    setSearchRequest(savedRequest);
    updateCharactersByName(savedRequest);
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem(name, searchRequest);
    };
  }, [searchRequest]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchRequest(value);
    localStorage.setItem(name, value);
  };

  const handleKeyUp = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      await updateCharactersByName(searchRequest);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={searchRequest}
      onInput={handleInput}
      onKeyUp={handleKeyUp}
      data-testid="searchBar"
    />
  );
};

export default SearchBar;
