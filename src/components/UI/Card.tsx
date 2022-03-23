import React from 'react';
import CardMUI from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button, { ButtonProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  '&.MuiButton-root': {
    '&.MuiButton-containedPrimary': {
      backgroundColor: '#ffa5009c',
      '&.MuiButton-containedPrimary': {
        '&:hover, &.Mui-focusVisible': {
          color: 'white',
        },
        '&.Mui-active': {
          color: 'white',
        },
      },
    },
  },
}));

export enum characterStatusSet {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export interface CardProps {
  id: number;
  name: string;
  status: string;
  origin: string;
  location: string;
  image: string;
}

interface CardState {
  isFavorite: boolean;
}

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);

    this.state = {
      isFavorite: false,
    };
  }
  componentDidMount(): void {
    this.setState({
      isFavorite: localStorage.getItem(String(this.props.id))
        ? localStorage.getItem(String(this.props.id)) === 'true'
        : false,
    });

    window.addEventListener('beforeunload', this.handleSavingCurrentState);
  }

  componentWillUnmount(): void {
    this.handleSavingCurrentState();
    window.removeEventListener('beforeunload', this.handleSavingCurrentState);
  }

  handleFavouriteClick = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };

  handleSavingCurrentState = () => {
    localStorage.setItem(String(this.props.id), String(this.state.isFavorite));
  };

  render() {
    return (
      <CardMUI sx={{ maxWidth: 300, margin: '1em' }}>
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
          <IconButton aria-label="add to favorites" onClick={this.handleFavouriteClick}>
            <FavoriteIcon sx={this.state.isFavorite ? { color: red[500] } : { color: 'primary' }} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <StyledButton variant={'contained'} size="small" style={{ marginLeft: 'auto' }}>
            Learn More
          </StyledButton>
        </CardActions>
      </CardMUI>
    );
  }
}

export default Card;
