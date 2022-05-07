import React, { FC, useState } from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import { ICharacterInfo } from '../../types/interfaces';
import Loader from '../../components/UI/Loader/Loader';
import CharacterService from '../../API/CharacterService';

const Main: FC = () => {
  const [dataSet, setDataSet] = useState<ICharacterInfo[]>([]);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(true);

  updateCardSet = async (name?: string) => {
    setIsDataLoading(true);
    const dataSetFormAPI = await CharacterService.getCharacterByAttributes({ name: name });
    setIsDataLoading(false);
    setDataSet(dataSetFormAPI);
  };

    return (
      <div className={ItemStyles.Main} data-testid="mainPage">
        <SearchBar updateCharactersByName={updateCardSet} />
        {isDataLoading ? <Loader /> : <CardSet dataSet={dataSet} />}
      </div>
    );
}

export default Main;
