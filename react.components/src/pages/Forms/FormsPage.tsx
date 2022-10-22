import React, { FC, useContext } from 'react';
import ItemStyles from './FormsPage.module.css';
import Form from '../../components/Form/Form';
import FormsCardSet from '../../components/FormsCardSet/FormsCardSet';
import { IFormsCardProps } from '../../types/interfaces';
import { AppContext } from '../../context/AppContext';
import { formCardsReducerActionVariants } from '../../reducers/formCardsReducer';

const FormsPage: FC = () => {
  const { state, dispatch } = useContext(AppContext);

  const addNewCard = (card: IFormsCardProps) => {
    dispatch({
      type: formCardsReducerActionVariants.SET_FORM_CARDS,
      payload: [...state.formCards, card],
    });
  };

  return (
    <div className={ItemStyles.Form} data-testid="formsPage">
      <Form addNewCard={addNewCard} />
      <FormsCardSet dataSet={state.formCards} />
    </div>
  );
};

export default FormsPage;
