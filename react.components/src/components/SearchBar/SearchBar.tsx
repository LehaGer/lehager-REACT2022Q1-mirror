import React, { FC } from 'react';
import ItemStyles from './SearchBar.module.css';
import { ISearchBarProps } from '../../types/interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { characterQuerySlice } from '../../store/reducers/characterQuerySlice';

const SearchBar: FC<ISearchBarProps> = ({
  type = 'text',
  placeholder = 'Search...',
  className = ItemStyles.searchBar,
  updateCharactersByName = () => null,
}) => {
  const dispatch = useAppDispatch();
  const characterQuery = useAppSelector((state) => state.characterQueryReducer);
  const cardFilter = useAppSelector((state) => state.cardFilterReducer);
  const { setSearchString } = characterQuerySlice.actions;

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setSearchString(value));
  };
  const handleKeyUp = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      await updateCharactersByName({
        name: characterQuery,
        status: cardFilter.status,
        gender: cardFilter.gender,
        species: cardFilter.species,
      });
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={characterQuery}
      onInput={handleInput}
      onKeyUp={handleKeyUp}
      data-testid="searchBar"
    />
  );
};

export default SearchBar;
