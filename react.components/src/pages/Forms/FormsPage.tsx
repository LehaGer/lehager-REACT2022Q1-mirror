import React, { FC } from 'react';
import ItemStyles from './FormsPage.module.css';
import Form from '../../components/Form/Form';
import FormsCardSet from '../../components/FormsCardSet/FormsCardSet';
import { IFormsCardProps } from '../../types/interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { formCardsSlice } from '../../store/reducers/formCardsSlice';

const FormsPage: FC = () => {
  const dispatch = useAppDispatch();
  const formCards = useAppSelector((state) => state.formCardsReducer);
  const { setFormCards } = formCardsSlice.actions;

  const addNewCard = (card: IFormsCardProps) => {
    dispatch(setFormCards([...formCards, card]));
  };

  return (
    <div className={ItemStyles.Form} data-testid="formsPage">
      <Form addNewCard={addNewCard} />
      <FormsCardSet dataSet={formCards} />
    </div>
  );
};

export default FormsPage;
