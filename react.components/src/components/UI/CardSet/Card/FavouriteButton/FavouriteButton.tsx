import React from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import { IFavouriteButtonProps } from '../../../../../types/types';

class FavouriteButton extends React.Component<IFavouriteButtonProps> {
  render() {
    return (
      <Tooltip title={!this.props.isFavorite ? 'Add to favourites' : 'Remove from favourites'}>
        <IconButton
          aria-label="add to favorites"
          onClick={this.props.onClick}
          data-testid="favouriteButton"
        >
          <FavoriteIcon
            sx={this.props.isFavorite ? { color: red[500] } : { color: 'primary' }}
            data-testid="favouriteIcon"
          />
        </IconButton>
      </Tooltip>
    );
  }
}

export default FavouriteButton;
