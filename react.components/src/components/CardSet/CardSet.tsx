import React, { FC } from 'react';
import Card from '../Card/Card';
import ItemStyles from './CardSet.module.css';
import { ICardSetProps, ICharacterRowInfo } from '../../types/interfaces';

const CardSet: FC<ICardSetProps<ICharacterRowInfo>> = ({ dataSet }) => {
  return (
    <div className={ItemStyles.cardSet} data-testid="CardSet">
      {dataSet.map((dataSetElement) => (
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
};

export default CardSet;
