import React, { FC, useContext } from 'react';
import ItemStyles from './SearchBar.module.css';
import { ISearchBarProps } from '../../types/interfaces';
import { AppContext } from '../../context/AppContext';
import { characterQueryReducerActionVariants } from '../../reducers/characterQueryReducer';

const SearchBar: FC<ISearchBarProps> = ({
  type = 'text',
  placeholder = 'Search...',
  className = ItemStyles.searchBar,
  updateCharactersByName = () => null,
}) => {
  const { state, dispatch } = useContext(AppContext);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch({
      type: characterQueryReducerActionVariants.SET_SEARCH_STR,
      payload: value,
    });
  };
  const handleKeyUp = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      await updateCharactersByName(state.characterQuery);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={state.characterQuery}
      onInput={handleInput}
      onKeyUp={handleKeyUp}
      data-testid="searchBar"
    />
  );
};

export default SearchBar;
