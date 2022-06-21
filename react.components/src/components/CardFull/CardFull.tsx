import React, { FC, useContext, useEffect } from 'react';
import { ICardFullProps } from '../../types/interfaces';
import ItemStyles from './CardFull.module.css';
import { AppContext } from '../../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const CardFull: FC<ICardFullProps> = ({ character }) => {
  const { state } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const isStateContains = state.characterCards.some((e) => e.id === Number(id));

  useEffect(() => {
    if (!isStateContains) {
      navigate(`/`);
    }
  }, []);

  state.characterCards.forEach((el) => {
    if (el.id === Number(id)) {
      character = el;
    }
  });
  return character ? (
    <div className={ItemStyles.CardFullWrapper}>
      <div
        className={ItemStyles.goBack}
        onClick={() => {
          navigate(`/`);
        }}
      >
        🡠 Go back
      </div>
      <div className={ItemStyles.card} data-testid="CardFullModal">
        <div className={ItemStyles.cardImg}>
          <img src={character.image} alt="character's image" />
        </div>
        <div className={ItemStyles.cardInfo}>
          <div className={ItemStyles.name} data-testid="CardFullName">
            {character.name}
          </div>
          <div className={ItemStyles.cardMataInfo}>
            <div className={[ItemStyles.status, ItemStyles.label].join(' ')}>Status: </div>
            <div className={[ItemStyles.status, ItemStyles.value].join(' ')}>
              {character.status ? character.status : '-'}
            </div>
            <div className={[ItemStyles.species, ItemStyles.label].join(' ')}>Species: </div>
            <div className={[ItemStyles.species, ItemStyles.value].join(' ')}>
              {character.species ? character.species : '-'}
            </div>
            <div className={[ItemStyles.type, ItemStyles.label].join(' ')}>Type: </div>
            <div className={[ItemStyles.type, ItemStyles.value].join(' ')}>
              {character.type ? character.type : '-'}
            </div>
            <div className={[ItemStyles.gender, ItemStyles.label].join(' ')}>Gender: </div>
            <div className={[ItemStyles.gender, ItemStyles.value].join(' ')}>
              {character.gender ? character.gender : '-'}
            </div>
            <div className={[ItemStyles.origin, ItemStyles.label].join(' ')}>Origin: </div>
            <div className={[ItemStyles.origin, ItemStyles.value].join(' ')}>
              <a href={character.origin.url}>{character.origin.name}</a>
            </div>
            <div className={[ItemStyles.location, ItemStyles.label].join(' ')}>Location: </div>
            <div className={[ItemStyles.location, ItemStyles.value].join(' ')}>
              <a href={character.location.url}>{character.location.name}</a>
            </div>
            <div className={[ItemStyles.episode, ItemStyles.label].join(' ')}>Episode(s): </div>
            <div className={[ItemStyles.episode, ItemStyles.value].join(' ')}>
              {character.episode.map((el, key) => (
                <div key={key}>
                  <a href={el}>{el.slice(40)}</a>
                </div>
              ))}
            </div>
            <div className={[ItemStyles.created, ItemStyles.label].join(' ')}>Created: </div>
            <div className={[ItemStyles.created, ItemStyles.value].join(' ')}>
              {character.created}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={ItemStyles.notFoundMsg} data-testid="CardNotFoundMsg">
      <div>No info was found =( </div>
    </div>
  );
};

export default CardFull;
