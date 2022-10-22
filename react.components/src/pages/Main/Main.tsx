import React, { FC, useEffect, useRef } from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import Loader from '../../components/UI/Loader/Loader';
import CharacterService from '../../API/CharacterService';
import CardFilter from '../../components/CardFilter/CardFilter';
import { ICharacterQueryAttributes, IPagination } from '../../types/interfaces';
import Pagination from '../../components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { paginationSlice } from '../../store/reducers/paginationSlice';
import { CARD_SET_STATUS } from '../../store/reducers/characterCardsSlice';

const Main: FC = () => {
  const characterQuery = useAppSelector((state) => state.characterQueryReducer);
  const characterCards = useAppSelector((state) => state.characterCardsReducer);
  const cardFilter = useAppSelector((state) => state.cardFilterReducer);
  const pagination = useAppSelector((state) => state.paginationReducer);
  const { setCurrentPage } = paginationSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (characterQuery === '' && characterCards.data.length === 0) {
        await updateCardSet();
      }
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
          ...cardFilter,
        },
        pagination
      );
    })();
  }, [
    cardFilter.status,
    cardFilter.gender,
    cardFilter.species,
    pagination.pageCapacity,
    pagination.currentPage,
  ]);

  const updateCardSet = async (
    attributes?: ICharacterQueryAttributes,
    pageInfo: IPagination = { currentPage: 1, pageCapacity: pagination.pageCapacity }
  ) => {
    dispatch(
      CharacterService.getCharacterByAttributes({
        ...attributes,
        currentPage: pageInfo.currentPage,
        pageCapacity: pageInfo.pageCapacity,
      })
    );
  };

  return (
    <div className={ItemStyles.Main} data-testid="mainPage">
      <SearchBar updateCharactersByName={updateCardSet} />
      <CardFilter />
      {characterCards.status === CARD_SET_STATUS.LOADING ? (
        <Loader />
      ) : (
        <CardSet dataSet={characterCards.data} />
      )}
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
