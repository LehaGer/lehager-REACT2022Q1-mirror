import React, { FC } from 'react';
import FormsCard from '../FormsCard/FormsCard';
import ItemStyles from './FormsCardSet.module.css';
import { IFormsCardSetProps } from '../../types/interfaces';

const FormsCardSet: FC<IFormsCardSetProps> = ({ cardSetArray }) => {
  return (
    <div className={ItemStyles.formCardSet} data-testid="FormsCardSet">
      {cardSetArray?.map((dataSetElement, key) => (
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
