import React from 'react';
import ShareButton from '../UI/ShareButton/ShareButton';
import { ICardProps, ICardState } from '../../types/interfaces';
import FavouriteButton from '../UI/FavouriteButton/FavouriteButton';
import ButtonCustom from '../UI/ButtonCustom/ButtonCustom';
import ItemStyles from './Card.module.css';

class Card extends React.Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);

    this.state = {
      isFavorite: false,
      isHovered: false,
    };
  }
  componentDidMount(): void {
    this.setState((state, props) => ({
      ...state,
      isFavorite: localStorage.getItem(String(props.id))
        ? localStorage.getItem(String(props.id)) === 'true'
        : false,
    }));

    window.addEventListener('beforeunload', this.handleSavingCurrentState);
  }

  componentWillUnmount(): void {
    this.handleSavingCurrentState();
    window.removeEventListener('beforeunload', this.handleSavingCurrentState);
  }

  handleFavouriteClick = () => {
    this.setState((state) => ({ isFavorite: !state.isFavorite }));
  };

  handleMouseEnterEvent = () => {
    this.setState({
      isHovered: true,
    });
  };

  handleMouseLeaveEvent = () => {
    this.setState({
      isHovered: false,
    });
  };

  handleSavingCurrentState = () => {
    localStorage.setItem(String(this.props.id), String(this.state.isFavorite));
  };

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
