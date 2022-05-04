import React from 'react';
import ShareButton from '../UI/Buttons/ShareButton/ShareButton';
import { ICardProps, ICardState } from '../../types/interfaces';
import FavouriteButton from '../UI/Buttons/FavouriteButton/FavouriteButton';
import ButtonCustom from '../UI/Buttons/ButtonCustom/ButtonCustom';
import ItemStyles from './Card.module.css';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import CardFull from '../CardFull/CardFull';
import CharacterService from '../../API/CharacterService';
import Loader from '../UI/Loader/Loader';

class Card extends React.Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);

    this.state = {
      isFullCardOpened: false,
      isFullCardLoading: true,
      characterFullInfo: null,
    };
  }

  toggleFullCard = async (newState: boolean) => {
    this.setState({ isFullCardOpened: newState });
    if (newState) {
      this.setState({ isFullCardLoading: true });
      const response = await CharacterService.getCharacterById(Number(this.props.id));
      this.setState({ isFullCardLoading: false });
      this.setState({ characterFullInfo: response });
    } else {
      this.setState({ characterFullInfo: null });
    }
  };

  render() {
    return (
      <>
        <div className={ItemStyles.card}>
          <div className={ItemStyles.cardImg}>
            <img src={this.props.image} alt={this.props.name} data-testid="Card" />
          </div>
          <div className={ItemStyles.cardMataInfo}>
            <div data-testid="CardName">{this.props.name}</div>
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
            <ButtonCustom
              onClick={async (event: React.MouseEvent) => {
                event.preventDefault();
                await this.toggleFullCard(true);
              }}
              data-testid="learnMore"
            >
              Learn more
            </ButtonCustom>
          </div>
        </div>
        <ModalWindow visible={this.state.isFullCardOpened} setVisible={this.toggleFullCard}>
          {this.state.isFullCardOpened ? (
            this.state.isFullCardLoading ? (
              <Loader />
            ) : (
              <CardFull character={this.state.characterFullInfo} />
            )
          ) : null}
        </ModalWindow>
      </>
    );
  }
}

export default Card;
