import React from 'react';
import { IFavouriteButtonProps } from '../../../types/interfaces';
import ItemStyles from './FavouriteButton.module.css';
import favouriteIcon from '../../../asserts/svg/favourite-icon.svg';

export interface IFavouriteButton {
  isLiked: boolean;
}
class FavouriteButton extends React.Component<IFavouriteButtonProps, IFavouriteButton> {
  constructor(props: IFavouriteButtonProps) {
    super(props);

    this.state = {
      isLiked: false,
    };
  }

  render() {
    const isLiked = this.state.isLiked;
    return (
      <button
        className={ItemStyles.fvrBtn}
        style={{ backgroundColor: isLiked ? 'red' : 'rgba(0,0,0,0.1)' }}
        onClick={() => this.setState({ isLiked: !isLiked })}
      >
      </button>
    );
  }
}

export default FavouriteButton;
