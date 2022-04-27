import React, { FC } from 'react';
import ItemStyles from './FormsCard.module.css';
import { IFormsCardProps } from '../../types/interfaces';

const FormsCard: FC<IFormsCardProps> = ({
  firstName,
  lastName,
  zipCode,
  birthday,
  country,
  isAgreeToProcConfData,
  isAgreeToGetAdvToEmail,
  gender,
  profilePicture,
}) => {
  return (
    <div className={ItemStyles.formCard} data-testid="FormsCard">
      <img src={profilePicture} alt={''} />
      <div>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{zipCode}</div>
        <div>{birthday}</div>
        <div>{country}</div>
        <div>
          {isAgreeToProcConfData ? 'Agree to proc conf data' : 'Not agree to proc conf data'}
        </div>
        <div>
          {isAgreeToGetAdvToEmail ? 'Agree to get adv to email' : 'Not agree to get adv to email'}
        </div>
        <div>{gender}</div>
      </div>
    </div>
  );
};

export default FormsCard;
