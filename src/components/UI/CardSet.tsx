import React from 'react';
import Card, { CardProps, characterStatusSet } from './Card';
import { CharacterRowInfo } from '../pages/Main';
import '../../styles/CardSet.css';

interface CardSetProps<CharacterRowInfo> {
  dataSet: CharacterRowInfo[];
}

interface CardSetState<CardProps> {
  cards: CardProps[];
}

class CardSet extends React.Component<CardSetProps<CharacterRowInfo>, CardSetState<CardProps>> {
  constructor(props: CardSetProps<CharacterRowInfo>) {
    super(props);
  }
  render() {
    return (
      <div className={'card-set'}>
        {this.props.dataSet.map((dataSetElement) => (
          <Card
            key={dataSetElement.id}
            id={dataSetElement.id}
            name={dataSetElement.name}
            status={dataSetElement.status}
            origin={dataSetElement.origin.name}
            location={dataSetElement.location.name}
            image={dataSetElement.image}
          />
        ))}
      </div>
    );
  }
}

export default CardSet;
