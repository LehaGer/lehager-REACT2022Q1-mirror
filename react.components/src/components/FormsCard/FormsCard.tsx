import React from 'react';
import ItemStyles from './FormsCard.module.css';
import { IFormsCardProps } from '../../types/interfaces';

class FormsCard extends React.Component<IFormsCardProps> {
  constructor(props: IFormsCardProps) {
    super(props);
  }
  render() {
    return (
      <div className={ItemStyles.formCard} data-testid="FormsCard">
        <img src={this.props.profilePicture} alt={''} />
        <div>
          <div>{this.props.firstName}</div>
          <div>{this.props.lastName}</div>
          <div>{this.props.zipCode}</div>
          <div>{this.props.birthday}</div>
          <div>{this.props.country}</div>
          <div>
            {this.props.isAgreeToProcConfData
              ? 'Agree to proc conf data'
              : 'Not agree to proc conf data'}
          </div>
          <div>
            {this.props.isAgreeToGetAdvToEmail
              ? 'Agree to get adv to email'
              : 'Not agree to get adv to email'}
          </div>
          <div>{this.props.gender}</div>
        </div>
      </div>
    );
  }
}

export default FormsCard;
