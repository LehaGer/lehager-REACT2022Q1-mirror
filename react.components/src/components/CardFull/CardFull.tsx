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
  }, [isStateContains, navigate]);

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
      <div className={ItemStyles.card} data-testid="CardFull">
        <div className={ItemStyles.cardImg}>
          <img src={character.image} alt="character's image" />
        </div>
        <div className={ItemStyles.cardInfo}>
          <div className={ItemStyles.name} data-testid="CardFullName">
            {character.name}
          </div>
          <div className={ItemStyles.cardMataInfo}>
            <div className={`${ItemStyles.status} ${ItemStyles.label}`}>Status: </div>
            <div className={`${ItemStyles.status} ${ItemStyles.value}`}>
              {character.status ? character.status : '-'}
            </div>
            <div className={`${ItemStyles.species} ${ItemStyles.label}`}>Species: </div>
            <div className={`${ItemStyles.species} ${ItemStyles.value}`}>
              {character.species ? character.species : '-'}
            </div>
            <div className={`${ItemStyles.type} ${ItemStyles.label}`}>Type: </div>
            <div className={`${ItemStyles.type} ${ItemStyles.value}`}>
              {character.type ? character.type : '-'}
            </div>
            <div className={`${ItemStyles.gender} ${ItemStyles.label}`}>Gender: </div>
            <div className={`${ItemStyles.gender} ${ItemStyles.value}`}>
              {character.gender ? character.gender : '-'}
            </div>
            <div className={`${ItemStyles.origin} ${ItemStyles.label}`}>Origin: </div>
            <div className={`${ItemStyles.origin} ${ItemStyles.value}`}>
              <a href={character.origin.url}>{character.origin.name}</a>
            </div>
            <div className={`${ItemStyles.location} ${ItemStyles.label}`}>Location: </div>
            <div className={`${ItemStyles.location} ${ItemStyles.value}`}>
              <a href={character.location.url}>{character.location.name}</a>
            </div>
            <div className={`${ItemStyles.episode} ${ItemStyles.label}`}>Episode(s): </div>
            <div className={`${ItemStyles.episode} ${ItemStyles.value}`}>
              {character.episode.map((el, key) => (
                <div key={key}>
                  <a href={el}>{el.slice(40)}</a>
                </div>
              ))}
            </div>
            <div className={`${ItemStyles.type} ${ItemStyles.label}`}>Created: </div>
            <div className={`${ItemStyles.type} ${ItemStyles.value}`}>{character.created}</div>
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
