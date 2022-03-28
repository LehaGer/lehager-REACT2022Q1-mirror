import React from 'react';
import ShareButton from './ShareButton/ShareButton';
import CardMUI from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ICardProps, ICardState } from '../../../../types/types';
import FavouriteButton from './FavouriteButton/FavouriteButton';
import ButtonCustom from '../../ButtonCustom/ButtonCustom';

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
    this.setState((state) => ({ ...state, isFavorite: !state.isFavorite }));
  };

  handleMouseEnterEvent = () => {
    this.setState((state) => ({
      ...state,
      isHovered: true,
    }));
  };

  handleMouseLeaveEvent = () => {
    this.setState((state) => ({
      ...state,
      isHovered: false,
    }));
  };

  handleSavingCurrentState = () => {
    localStorage.setItem(String(this.props.id), String(this.state.isFavorite));
  };

  render() {
    return (
      <CardMUI
        sx={{ maxWidth: 300, margin: '1em' }}
        onMouseEnter={this.handleMouseEnterEvent}
        onMouseLeave={this.handleMouseLeaveEvent}
        elevation={!this.state.isHovered ? 1 : 10}
        data-testid="Card"
      >
        <CardMedia component="img" alt={this.props.name} height="280" image={this.props.image} />
        <CardContent sx={{ height: 80 }}>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Origin: {this.props.origin}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last location: {this.props.location}
          </Typography>
        </CardContent>
        <CardActions>
          <FavouriteButton isFavorite={this.state.isFavorite} onClick={this.handleFavouriteClick} />
          <ShareButton />
          <ButtonCustom variant={'contained'} size="small" style={{ marginLeft: 'auto' }}>
            Learn More
          </ButtonCustom>
        </CardActions>
      </CardMUI>
    );
  }
}

export default Card;
