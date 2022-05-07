import React, { FC, useContext, useEffect, useState } from 'react';
import ItemStyles from './SearchBar.module.css';
import { ISearchBarProps } from '../../types/interfaces';
import { AppContext } from '../../context/AppContext';
import { characterQueryReducerActionVariants } from '../../reducers/characterQueryReducer';

const SearchBar: FC<ISearchBarProps> = ({
  name = 'search-bar',
  type = 'text',
  placeholder = 'default searching request',
  className = ItemStyles.searchBar,
  updateCharactersByName = () => {
    return new Promise(() => {});
  },
}) => {
  const [searchRequest, setSearchRequest] = useState<string>('');

  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setSearchRequest(state.characterQuery);

    return () => {
      dispatch({
        type: characterQueryReducerActionVariants.SET_SEARCH_STR,
        payload: searchRequest,
      });
    };
  }, []);

  /*useEffect(() => {
    const savedRequest = localStorage.getItem(name) || '';

    setSearchRequest(savedRequest);
    (async () => {
      await updateCharactersByName(savedRequest);
    })();
  }, []);*/

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // localStorage.setItem(name, value);
    setSearchRequest(value);
  };

  const handleSubmit = async (event: React.KeyboardEvent) => {
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
      onInput={handleChangeValue}
      onKeyUp={handleSubmit}
      data-testid="searchBar"
    />
  );
};

export default SearchBar;
