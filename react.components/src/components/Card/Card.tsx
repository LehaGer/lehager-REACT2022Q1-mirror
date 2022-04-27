import React, { FC, useState } from 'react';
import ShareButton from '../UI/Buttons/ShareButton/ShareButton';
import { ICardProps, ICharacterRowInfo } from '../../types/interfaces';
import FavouriteButton from '../UI/Buttons/FavouriteButton/FavouriteButton';
import ButtonCustom from '../UI/Buttons/ButtonCustom/ButtonCustom';
import ItemStyles from './Card.module.css';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import CardFull from '../CardFull/CardFull';
import CharacterService from '../../API/CharacterService';
import Loader from '../UI/Loader/Loader';

const Card: FC<ICardProps> = ({ id, name, status, origin, location, image }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isFullCardLoading, setIsFullCardLoading] = useState<boolean>(true);
  const [isThere, setIsThere] = useState<boolean>(false);
  const [characterFullInfo, setICharacterFullInfo] = useState<ICharacterRowInfo>(
    {} as ICharacterRowInfo
  );

  const toggleFullCard = async (newState: boolean) => {
    await setIsOpened(newState);

    if (newState) {
      await setIsFullCardLoading(true);
      try {
        const response = await CharacterService.getCharacterById(Number(id));
        setIsThere(true);
        setICharacterFullInfo(response.data);
      } catch (e) {
        setIsThere(false);
        setICharacterFullInfo({} as ICharacterRowInfo);
      } finally {
        setIsFullCardLoading(false);
      }
    } else {
      setIsThere(false);
      setICharacterFullInfo({} as ICharacterRowInfo);
    }
  };

  const notFoundMsg = (
    <div className={ItemStyles.notFoundMsg} data-testid="CardNotFoundMsg">
      <div>No info was found =( </div>
    </div>
  );

  let contentElement;

  if (isFullCardLoading) {
    contentElement = <Loader />;
  } else {
    if (isThere) {
      contentElement = <CardFull character={characterFullInfo as ICharacterRowInfo} />;
    } else {
      contentElement = notFoundMsg;
    }
  }

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
          <ButtonCustom
            onClick={async (event: React.MouseEvent) => {
              event.preventDefault();
              await toggleFullCard(true);
            }}
            data-testid="learnMore"
          >
            Learn more
          </ButtonCustom>
        </div>
      </div>
      <ModalWindow visible={isOpened} setVisible={toggleFullCard}>
        {isOpened ? contentElement : ''}
      </ModalWindow>
    </>
  );
};

export default Card;
