import React, { FC, useState } from 'react';
import ShareButton from '../UI/Buttons/ShareButton/ShareButton';
import { ICardProps, ICharacterInfo } from '../../types/interfaces';
import FavouriteButton from '../UI/Buttons/FavouriteButton/FavouriteButton';
import ButtonCustom from '../UI/Buttons/ButtonCustom/ButtonCustom';
import ItemStyles from './Card.module.css';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import CardFull from '../CardFull/CardFull';
import CharacterService from '../../API/CharacterService';
import Loader from '../UI/Loader/Loader';

const Card: FC<ICardProps> = ({ id, name, origin, location, image }) => {
  const [isFullCardOpened, setIsFullCardOpened] = useState<boolean>(false);
  const [isFullCardLoading, setIsFullCardLoading] = useState<boolean>(true);
  const [characterFullInfo, setCharacterFullInfo] = useState<ICharacterInfo | null>(null);

  const handleClose = async () => {
    setIsFullCardOpened(false);
  };

  const handleMoreInfoClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    setIsFullCardOpened(true);
    setIsFullCardLoading(true);
    const response = await CharacterService.getCharacterById(Number(id));
    setIsFullCardLoading(false);
    setCharacterFullInfo(response);
  };

  return (
    <>
      <div className={ItemStyles.card}>
        <div className={ItemStyles.cardImg}>
          <img src={image} alt={name} data-testid="Card" />
        </div>
        <div className={ItemStyles.cardMataInfo}>
          <div data-testid="CardName">{name}</div>
          <div>
            <div>Origin: </div>
            {origin}
          </div>
          <div>
            <div>Last location: </div> {location}
          </div>
        </div>
        <div className={ItemStyles.cardControls}>
          <FavouriteButton />
          <ShareButton />
          <ButtonCustom onClick={handleMoreInfoClick} data-testid="learnMore">
            Learn more
          </ButtonCustom>
        </div>
      </div>
      {isFullCardOpened && (
        <ModalWindow onClose={handleClose}>
          {isFullCardLoading ? <Loader /> : <CardFull character={characterFullInfo} />}
        </ModalWindow>
      )}
    </>
  );
};

export default Card;
