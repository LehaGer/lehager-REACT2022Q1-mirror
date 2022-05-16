import React, { FC, useContext, useEffect, useState } from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import Loader from '../../components/UI/Loader/Loader';
import CharacterService from '../../API/CharacterService';
import { AppContext } from '../../context/AppContext';
import { characterCardsReducerActionVariants } from '../../reducers/characterCardsReducer';

const Main: FC = () => {
  const [isDataLoading, setIsDataLoading] = useState<boolean>(true);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      if (state.characterQuery === '' && state.characterCards.length === 0) {
        await updateCardSet();
      }
      setIsDataLoading(false);
    })();
  }, []);

  const updateCardSet = async (name?: string) => {
    setIsDataLoading(true);
    const dataSetFormAPI = await CharacterService.getCharacterByAttributes({ name: name });
    setIsDataLoading(false);
    dispatch({ type: characterCardsReducerActionVariants.SET_CARDS, payload: dataSetFormAPI });
  };

  return (
    <div className={ItemStyles.Main} data-testid="mainPage">
      <SearchBar updateCharactersByName={updateCardSet} />
      {isDataLoading ? <Loader /> : <CardSet dataSet={state.characterCards} />}
    </div>
  );
};

export default Main;
