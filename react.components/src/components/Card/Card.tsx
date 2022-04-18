import React from 'react';
import ShareButton from '../UI/Buttons/ShareButton/ShareButton';
import { ICardProps, ICardState, ICharacterRowInfo } from '../../types/interfaces';
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
      isOpened: false,
      isFullCardLoading: true,
      isThere: false,
      characterFullInfo: {} as ICharacterRowInfo,
    };
  }

  toggleFullCard = async (newState: boolean) => {
    await this.setState({
      isOpened: newState,
    });

    if (newState) {
      await this.setState({
        isFullCardLoading: true,
      });
      try {
        const response = await CharacterService.getCharacterById(Number(this.props.id));
        await this.setState({
          isThere: true,
          characterFullInfo: response.data,
        });
      } catch (e) {
        // console.log(e);
        await this.setState({
          isThere: false,
          characterFullInfo: {} as ICharacterRowInfo,
        });
      } finally {
        await this.setState({
          isFullCardLoading: false,
        });
      }
    } else {
      await this.setState({
        isThere: false,
        characterFullInfo: {} as ICharacterRowInfo,
      });
    }
  };

  render() {
    const notFoundMsg = (
      <div className={ItemStyles.notFoundMsg} data-testid="CardNotFoundMsg">
        <div>No info was found =( </div>
      </div>
    );

    let contentElement;

    if (this.state.isFullCardLoading) {
      contentElement = <Loader />;
    } else {
      if (this.state.isThere) {
        contentElement = <CardFull character={this.state.characterFullInfo as ICharacterRowInfo} />;
      } else {
        contentElement = notFoundMsg;
      }
    }

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
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                this.toggleFullCard(true);
              }}
              data-testid="learnMore"
            >
              Learn more
            </ButtonCustom>
          </div>
        </div>
        <ModalWindow visible={this.state.isOpened} setVisible={this.toggleFullCard}>
          {this.state.isOpened ? contentElement : ''}
        </ModalWindow>
      </>
    );
  }
}

export default Card;
