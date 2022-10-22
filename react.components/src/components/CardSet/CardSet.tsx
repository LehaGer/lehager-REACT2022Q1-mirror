import React from 'react';
import Card from '../Card/Card';
import ItemStyles from './CardSet.module.css';
import { ICardSetProps, ICardSetState, ICharacterInfo } from '../../types/interfaces';

class CardSet extends React.Component<
  ICardSetProps<ICharacterInfo>,
  ICardSetState<ICharacterInfo>
> {
  constructor(props: ICardSetProps<ICharacterInfo>) {
    super(props);
  }

  render() {
    return this.props.dataSet.length ? (
      <div className={ItemStyles.cardSet} data-testid="CardSet">
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
    ) : (
      <div className={ItemStyles.notFoundMsg} data-testid="MainNotFoundMsg">
        <div>No matches were found =( </div>
      </div>
    );
  }
}

export default CardSet;
