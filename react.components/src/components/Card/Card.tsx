import React from 'react';
import ShareButton from '../UI/Buttons/ShareButton/ShareButton';
import { ICardProps, ICardState, ICharacterRowInfo } from '../../types/interfaces';
import FavouriteButton from '../UI/Buttons/FavouriteButton/FavouriteButton';
import ButtonCustom from '../UI/Buttons/ButtonCustom/ButtonCustom';
import ItemStyles from './Card.module.css';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import CardFull from '../CardFull/CardFull';
import CharacterService from '../../API/CharacterService';

class Card extends React.Component<ICardProps, ICardState> {
  private charecterFullInfo: ICharacterRowInfo | undefined;
  constructor(props: ICardProps) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  setNewStateFullCard = async (newState: boolean) => {
    if (newState) {
      try {
        const response = await CharacterService.getCharacterById(Number(this.props.id));
        this.charecterFullInfo = response.data;
        console.log(this.charecterFullInfo);
      } catch (e) {
        console.log(e);
        this.charecterFullInfo = undefined;
      }
    }

    console.log('setNewStateFullCard', newState);
    await this.setState({
      isOpened: newState,
    });
  };

  render() {
    return (
      <>
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
            <ButtonCustom
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                this.setNewStateFullCard(true);
              }}
            >
              Learn more
            </ButtonCustom>
          </div>
        </div>
        <ModalWindow visible={this.state.isOpened} setVisible={this.setNewStateFullCard}>
          {this.state.isOpened ? (
            <CardFull character={this.charecterFullInfo as ICharacterRowInfo} />
          ) : (
            ''
          )}
        </ModalWindow>
      </>
    );
  }
}

export default Card;
