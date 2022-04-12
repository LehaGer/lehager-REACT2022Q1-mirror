import React from 'react';
import ItemStyles from './FormsPage.module.css';
import Form from '../../components/Form/Form';
import FormsCardSet from '../../components/FormsCardSet/FormsCardSet';
import { IFormsCardProps, IFormsPageProps, IFormsPageState } from '../../types/interfaces';

class FormsPage extends React.Component<IFormsPageProps, IFormsPageState> {
  constructor(props: IFormsPageProps) {
    super(props);

    this.state = {
      cardSet: [],
    };

    this.addNewCard = this.addNewCard.bind(this);
  }

  addNewCard(card: IFormsCardProps) {
    this.setState((state) => ({
      cardSet: [...state.cardSet, card],
    }));
  }

  render() {
    return (
      <div className={ItemStyles.Form} data-testid="formsPage">
        <Form addNewCard={this.addNewCard} />
        <FormsCardSet cardSetArray={this.state.cardSet} />
      </div>
    );
  }
}

export default FormsPage;
