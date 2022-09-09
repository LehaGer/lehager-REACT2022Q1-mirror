import React, { FC, useEffect, useRef, useState } from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import Loader from '../../components/UI/Loader/Loader';
import CharacterService from '../../API/CharacterService';
import CardFilter from '../../components/CardFilter/CardFilter';
import { ICharacterQueryAttributes } from '../../types/interfaces';
import Pagination from '../../components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { paginationSlice } from '../../store/reducers/paginationSlice';
import { characterCardsSlice } from '../../store/reducers/characterCardsSlice';

const Main: FC = () => {
  const [isDataLoading, setIsDataLoading] = useState<boolean>(true);

  const characterQuery = useAppSelector((state) => state.characterQueryReducer);
  const characterCards = useAppSelector((state) => state.characterCardsReducer);
  const cardFilter = useAppSelector((state) => state.cardFilterReducer);
  const pagination = useAppSelector((state) => state.paginationReducer);
  const { setNavigationInfo, setCurrentPage } = paginationSlice.actions;
  const { setCards } = characterCardsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (characterQuery === '' && characterCards.length === 0) {
        await updateCardSet();
      }
      setIsDataLoading(false);
    })();
  }, []);

  const isInitialMount = useRef(false);
  useEffect(() => {
    if (!isInitialMount.current)
      return () => {
        isInitialMount.current = true;
      };
    (async () => {
      await updateCardSet(
        {
          name: characterQuery,
          status: cardFilter.status,
          gender: cardFilter.gender,
          species: cardFilter.species,
        },
        pagination.currentPage
      );
      setIsDataLoading(false);
    })();
  }, [
    cardFilter.status,
    cardFilter.gender,
    cardFilter.species,
    pagination.pageCapacity,
    pagination.currentPage,
  ]);

  const updateCardSet = async (attributes?: ICharacterQueryAttributes, page = 1) => {
    setIsDataLoading(true);

    const firstElemNum = pagination.pageCapacity * page - pagination.pageCapacity;
    const lastElemNum = pagination.pageCapacity * page;

    const APIFirstElemPage = Math.ceil((firstElemNum + 1) / 20);
    const APILastElemPage = Math.ceil(lastElemNum / 20);

    if (APIFirstElemPage === APILastElemPage) {
      const { info: navigationInfoFromAPI, results: dataSetFormAPI } =
        await CharacterService.getCharacterByAttributes(
          { ...attributes, page: APIFirstElemPage } || {}
        );
      dispatch(setNavigationInfo(navigationInfoFromAPI));
      const sliceStart = firstElemNum % 20;
      const sliceEnd = lastElemNum % 20 || 20;
      dispatch(setCards(dataSetFormAPI.slice(sliceStart, sliceEnd)));
    } else {
      const { results: dataSetFormAPI_1 } = await CharacterService.getCharacterByAttributes(
        { ...attributes, page: APIFirstElemPage } || {}
      );
      const { info: navigationInfoFromAPI_2, results: dataSetFormAPI_2 } =
        await CharacterService.getCharacterByAttributes(
          { ...attributes, page: APILastElemPage } || {}
        );
      dispatch(setNavigationInfo(navigationInfoFromAPI_2));
      const sliceStart = firstElemNum % 20;
      const sliceEnd = lastElemNum % 20;
      const dataSetSliced_1 = dataSetFormAPI_1.slice(sliceStart, 20);
      const dataSetSliced_2 = dataSetFormAPI_2.slice(0, sliceEnd);
      const dataSetFormAPI = dataSetSliced_1.concat(dataSetSliced_2);
      dispatch(setCards(dataSetFormAPI));
    }

    setIsDataLoading(false);
  };

  return (
    <div className={ItemStyles.Main} data-testid="mainPage">
      <SearchBar updateCharactersByName={updateCardSet} />
      <CardFilter />
      {isDataLoading ? <Loader /> : <CardSet dataSet={characterCards} />}
      <Pagination
        totalPages={pagination.pagesCount ?? 1}
        page={pagination.currentPage ?? 1}
        changePage={(pageNumber) => {
          dispatch(setCurrentPage(pageNumber));
        }}
      />
    </div>
  );
};

export default Main;
