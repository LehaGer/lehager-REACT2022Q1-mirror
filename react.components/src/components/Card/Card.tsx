import React from 'react';
import ShareButton from '../UI/ShareButton/ShareButton';
import { ICardProps, ICardState } from '../../types/interfaces';
import FavouriteButton from '../UI/FavouriteButton/FavouriteButton';
import ButtonCustom from '../UI/ButtonCustom/ButtonCustom';
import ItemStyles from './Card.module.css';

class Card extends React.Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);
  }

  render() {
    return (
      <div className={ItemStyles.card}>
        <div className={ItemStyles.cardImg}>
          <img src={this.props.image} alt={this.props.name} data-testid="Card" />
        </div>
        <div className={ItemStyles.cardMataInfo}>
          <div>{this.props.name}</div>
          <div>
            <div>Origin: </div>
            {this.props.origin}
          </div>
          <div>
            <div>Last location: </div> {this.props.location}
          </div>
        </div>
        <div className={ItemStyles.cardControls}>
          <FavouriteButton />
          <ShareButton />
          <ButtonCustom>Learn more</ButtonCustom>
        </div>
      </div>
    );
  }
}

export default Card;
