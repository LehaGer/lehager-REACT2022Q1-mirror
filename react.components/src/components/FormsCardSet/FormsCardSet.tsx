import React from 'react';
import FormsCard from '../FormsCard/FormsCard';
import ItemStyles from './FormsCardSet.module.css';
import { IFormsCardSetProps } from '../../types/interfaces';

class FormsCardSet extends React.Component<IFormsCardSetProps> {
  constructor(props: IFormsCardSetProps) {
    super(props);
  }
  render() {
    return (
      <div className={ItemStyles.formCardSet} data-testid="FormsCardSet">
        {this.props.cardSetArray?.map((dataSetElement, key) => (
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
  }
}

export default FormsCardSet;
