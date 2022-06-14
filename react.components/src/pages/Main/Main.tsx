import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import Loader from '../../components/UI/Loader/Loader';
import CharacterService from '../../API/CharacterService';
import { AppContext } from '../../context/AppContext';
import { characterCardsReducerActionVariants } from '../../reducers/characterCardsReducer';
import CardFilter from '../../components/CardFilter/CardFilter';
import { ICharacterQueryAttributes } from '../../types/interfaces';
import Pagination from '../../components/Pagination/Pagination';
import { paginationReducerActionVariants } from '../../reducers/paginationReducer';

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

  const isInitialMount = useRef(false);
  useEffect(() => {
    if (!isInitialMount.current)
      return () => {
        isInitialMount.current = true;
      };
    (async () => {
      await updateCardSet(
        {
          name: state.characterQuery,
          status: state.cardFilter.status,
          gender: state.cardFilter.gender,
          species: state.cardFilter.species,
        },
        state.pagination.currentPage
      );
      setIsDataLoading(false);
    })();
  }, [
    state.cardFilter.status,
    state.cardFilter.gender,
    state.cardFilter.species,
    state.pagination.pageCapacity,
    state.pagination.currentPage,
  ]);

  const updateCardSet = async (attributes?: ICharacterQueryAttributes, page = 1) => {
    setIsDataLoading(true);
    const firstElemNum = state.pagination.pageCapacity * page - state.pagination.pageCapacity;
    const lastElemNum = state.pagination.pageCapacity * page;

    const APIFirstElemPage = Math.ceil((firstElemNum + 1) / 20);
    const APILastElemPage = Math.ceil(lastElemNum / 20);

    if (APIFirstElemPage === APILastElemPage) {
      const { info: navigationInfoFromAPI, results: dataSetFormAPI } =
        await CharacterService.getCharacterByAttributes(
          { ...attributes, page: APIFirstElemPage } || {}
        );
      dispatch({
        type: paginationReducerActionVariants.SET_NAVIGATION_INFO,
        payload: {
          pageCapacity: state.pagination.pageCapacity,
          navigationInfo: navigationInfoFromAPI,
        },
      });
      const sliceStart = firstElemNum % 20;
      const sliceEnd = lastElemNum % 20 || 20;
      dispatch({
        type: characterCardsReducerActionVariants.SET_CARDS,
        payload: dataSetFormAPI.slice(sliceStart, sliceEnd),
      });
    } else {
      const { results: dataSetFormAPI_1 } = await CharacterService.getCharacterByAttributes(
        { ...attributes, page: APIFirstElemPage } || {}
      );
      const { info: navigationInfoFromAPI_2, results: dataSetFormAPI_2 } =
        await CharacterService.getCharacterByAttributes(
          { ...attributes, page: APILastElemPage } || {}
        );
      dispatch({
        type: paginationReducerActionVariants.SET_NAVIGATION_INFO,
        payload: {
          pageCapacity: state.pagination.pageCapacity,
          navigationInfo: navigationInfoFromAPI_2,
        },
      });
      const sliceStart = firstElemNum % 20;
      const sliceEnd = lastElemNum % 20;
      const dataSetSliced_1 = dataSetFormAPI_1.slice(sliceStart, 20);
      const dataSetSliced_2 = dataSetFormAPI_2.slice(0, sliceEnd);
      const dataSetFormAPI = dataSetSliced_1.concat(dataSetSliced_2);
      dispatch({
        type: characterCardsReducerActionVariants.SET_CARDS,
        payload: dataSetFormAPI,
      });
    }

    setIsDataLoading(false);
  };

  return (
    <div className={ItemStyles.Main} data-testid="mainPage">
      <SearchBar updateCharactersByName={updateCardSet} />
      <CardFilter />
      {isDataLoading ? <Loader /> : <CardSet dataSet={state.characterCards} />}
      <Pagination
        totalPages={state.pagination.pagesCount ?? 1}
        page={state.pagination.currentPage ?? 1}
        changePage={(pageNumber) => {
          dispatch({
            type: paginationReducerActionVariants.SET_CURRENT_PAGE,
            payload: {
              pageCapacity: state.pagination.pageCapacity,
              currentPage: pageNumber,
            },
          });
        }}
      />
    </div>
  );
};

export default Main;
