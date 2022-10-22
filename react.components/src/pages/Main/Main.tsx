import React from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';

const Main: React.FC = () => {
  return (
    <div className={ItemStyles.Main} data-testid="mainPage">
      <SearchBar name={'search-bar'} style={{ marginBottom: '3em' }} />
      <CardSet />
    </div>
  );
};

export default Main;
