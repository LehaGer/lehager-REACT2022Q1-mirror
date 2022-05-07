import React, { FC, useContext, useEffect, useState } from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import { ICharacterInfo } from '../../types/interfaces';
import Loader from '../../components/UI/Loader/Loader';
import CharacterService from '../../API/CharacterService';
import { AppContext } from '../../context/AppContext';
import { characterCardsReducerActionVariants } from '../../reducers/characterCardsReducer';

const Main: FC = () => {
  const [dataSet, setDataSet] = useState<ICharacterInfo[]>([]);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(true);

  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    alert('1st render : ' + dataSet.length);
    setDataSet(state.characterCards);
  }, []);

  useEffect(() => {
    return () => {
      alert(dataSet.length);
      dispatch({ type: characterCardsReducerActionVariants.SET_CARDS, payload: dataSet });
    };
  }, [dataSet]);

  const updateCardSet = async (name?: string) => {
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
};

export default Main;
