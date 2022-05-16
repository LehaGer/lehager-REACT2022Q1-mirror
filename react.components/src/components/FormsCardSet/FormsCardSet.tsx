import React, { FC } from 'react';
import FormsCard from '../FormsCard/FormsCard';
import ItemStyles from './FormsCardSet.module.css';
import { ICardSetProps, IFormsCardProps } from '../../types/interfaces';

const FormsCardSet: FC<ICardSetProps<IFormsCardProps>> = ({ dataSet }) => {
  return (
    <div className={ItemStyles.formCardSet} data-testid="FormsCardSet">
      {dataSet?.map((dataSetElement, key) => (
        <FormsCard
          key={key}
          arrivingDate={dataSetElement.arrivingDate}
          birthday={dataSetElement.birthday}
          country={dataSetElement.country}
          firstName={dataSetElement.firstName}
          isAgreeToGetAdvToEmail={dataSetElement.isAgreeToGetAdvToEmail}
          isAgreeToProcConfData={dataSetElement.isAgreeToProcConfData}
          lastName={dataSetElement.lastName}
          profilePicture={dataSetElement.profilePicture}
          gender={dataSetElement.gender}
          zipCode={dataSetElement.zipCode}
        />
      ))}
    </div>
  );
};

export default FormsCardSet;
