import React, { FC, useContext, useEffect, useState } from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import { ICharacterRowInfo } from '../../types/interfaces';
import Loader from '../../components/UI/Loader/Loader';
import CharacterService from '../../API/CharacterService';
import { AppContext } from '../../context/AppContext';
import { characterCardsReducerActionVariants } from '../../reducers/characterCardsReducer';

const Main: FC = () => {
  const [dataSet, setDataSet] = useState<ICharacterRowInfo[]>([]);
  const [isDataLoading, setDataLoading] = useState<boolean>(true);
  const [isThereCharacter, setThereCharacter] = useState<boolean>(true);

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
    setDataLoading(true);
    setThereCharacter(true);

    try {
      const response = await CharacterService.getCharacterByAttributes({
        name: name,
      });
      setDataSet(response.data.results);
    } catch (e) {
      setThereCharacter(false);
    } finally {
      setDataLoading(false);
    }
  };

  const notFoundMsg = (
    <div className={ItemStyles.notFoundMsg} data-testid="MainNotFoundMsg">
      <div>No matches were found =( </div>
    </div>
  );

  let contentElement;

  if (isDataLoading) {
    contentElement = <Loader />;
  } else {
    if (isThereCharacter) {
      contentElement = <CardSet dataSet={dataSet} />;
    } else {
      contentElement = notFoundMsg;
    }
  }

  return (
    <div className={ItemStyles.Main} data-testid="mainPage">
      <SearchBar updateCharactersByName={updateCardSet} />
      {contentElement}
    </div>
  );
};

export default Main;
