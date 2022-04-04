import React from 'react';
import FormsCard, { IFormsCardProps } from '../FormsCard/FormsCard';

interface IFormsCardSetProps {
  name?: string;
  cardSetArray?: IFormsCardProps[];
}

interface IFormsCardSetState {
  name?: string;
}

class FormsCardSet extends React.Component<IFormsCardSetProps, IFormsCardSetState> {
  constructor(props: IFormsCardSetProps) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.cardSetArray?.map((dataSetElement) => (
          <FormsCard
            key={dataSetElement?.id}
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
