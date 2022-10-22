import React, { FC } from 'react';
import ShareButton from '../UI/Buttons/ShareButton/ShareButton';
import { ICardProps } from '../../types/interfaces';
import FavouriteButton from '../UI/Buttons/FavouriteButton/FavouriteButton';
import ButtonCustom from '../UI/Buttons/ButtonCustom/ButtonCustom';
import ItemStyles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

const Card: FC<ICardProps> = ({ id, name, origin, location, image }) => {
  const characterCards = useAppSelector((state) => state.characterCardsReducer);

  const navigate = useNavigate();

  const handleMoreInfoClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    const isStateContains = characterCards.data.some((e) => e.id === id);
    if (isStateContains) {
      navigate(`character/${id}`);
    } else {
      navigate(`/`);
    }
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
    </>
  );
};

export default Card;
