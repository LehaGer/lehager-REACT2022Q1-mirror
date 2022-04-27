import React, { FC, useState } from 'react';
import ItemStyles from './FormsPage.module.css';
import Form from '../../components/Form/Form';
import FormsCardSet from '../../components/FormsCardSet/FormsCardSet';
import { IFormsCardProps } from '../../types/interfaces';

const FormsPage: FC = () => {
  const [cardSet, setCardSet] = useState<IFormsCardProps[]>([]);

  const addNewCard = (card: IFormsCardProps) => {
    setCardSet((prevState) => [...prevState, card]);
  };

  return (
    <div className={ItemStyles.Form} data-testid="formsPage">
      <Form addNewCard={addNewCard} />
      <FormsCardSet cardSetArray={cardSet} />
    </div>
  );
};

export default FormsPage;
