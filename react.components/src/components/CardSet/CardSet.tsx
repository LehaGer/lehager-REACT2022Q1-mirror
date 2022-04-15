import React from 'react';
import Card from '../Card/Card';
import ItemStyles from './CardSet.module.css';
import { ICardSetProps, ICardSetState, ICharacterRowInfo } from '../../types/interfaces';

class CardSet extends React.Component<
  ICardSetProps<ICharacterRowInfo>,
  ICardSetState<ICharacterRowInfo>
> {
  constructor(props: ICardSetProps<ICharacterRowInfo>) {
    super(props);
  }

  render() {
    return (
      <div className={ItemStyles.cardSet}>
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
