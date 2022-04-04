import React from 'react';
import ItemStyles from './FormsCard.module.css';

export enum genderTypes {
  MALE = 'male',
  FEMALE = 'female',
}

export interface IFormsCardProps {
  id?: string;
  firstName: string;
  lastName: string;
  zipCode: string;
  birthday: string;
  arrivingDate: string;
  country: string;
  isAgreeToProcConfData: boolean;
  isAgreeToGetAdvToEmail: boolean;
  gender: genderTypes;
  profilePicture: string;
}

export interface IFormsCardState {
  name?: string;
}

class FormsCard extends React.Component<IFormsCardProps, IFormsCardState> {
  constructor(props: IFormsCardProps) {
    super(props);
  }
  render() {
    return (
      <div className={ItemStyles.formCard}>
        FormsCard
        <div>{this.props.firstName}</div>
        <div>{this.props.lastName}</div>
        <div>{this.props.zipCode}</div>
        <div>{this.props.birthday}</div>
        <div>{this.props.country}</div>
        <div>{this.props.isAgreeToProcConfData}</div>
        <div>{this.props.isAgreeToGetAdvToEmail}</div>
        <div>{this.props.gender}</div>
        <div>{this.props.profilePicture}</div>
      </div>
    );
  }
}

export default FormsCard;
