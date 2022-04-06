import React from 'react';
import { IFavouriteButtonProps } from '../../../../types/interfaces';
import ItemStyles from './FavouriteButton.module.css';
import favouriteIcon from '../../../../asserts/svg/favourite-icon.svg';

class FavouriteButton extends React.Component<IFavouriteButtonProps> {
  constructor(props: IFavouriteButtonProps) {
    super(props);
  }
  render() {
    return (
      <button className={ItemStyles.fvrBtn}>
        {/*<img src={favouriteIcon} alt="like-btn" />*/}
      </button>
    );
  }
}

export default FavouriteButton;
