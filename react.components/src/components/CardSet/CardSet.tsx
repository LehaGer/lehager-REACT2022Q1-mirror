import React, { FC } from 'react';
import Card from '../Card/Card';
import ItemStyles from './CardSet.module.css';
import { ICardSetProps, ICharacterInfo } from '../../types/interfaces';

const CardSet: FC<ICardSetProps<ICharacterInfo>> = ({ dataSet }) => {
  return dataSet.length ? (
    <div className={ItemStyles.cardSet} data-testid="CardSet">
      {dataSet.map((dataSetElement) => (
        <Card
          key={dataSetElement.id}
          id={dataSetElement.id}
          name={dataSetElement.name}
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
};

export default CardSet;
