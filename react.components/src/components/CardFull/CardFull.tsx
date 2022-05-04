import React from 'react';
import { ICardFullProps } from '../../types/interfaces';
import ItemStyles from './CardFull.module.css';

class CardFull extends React.Component<ICardFullProps> {
  constructor(props: ICardFullProps) {
    super(props);
  }

  render() {
    return this.props?.character ? (
      <div className={ItemStyles.card} data-testid="CardFull">
        <div className={ItemStyles.cardImg}>
          <img src={this.props.character.image} alt="character's image" />
        </div>
        <div className={ItemStyles.cardInfo}>
          <div className={ItemStyles.name} data-testid="CardFullName">
            {this.props.character.name}
          </div>
          <div className={ItemStyles.cardMataInfo}>
            <div className={[ItemStyles.status, ItemStyles.label].join(' ')}>Status: </div>
            <div className={[ItemStyles.status, ItemStyles.value].join(' ')}>
              {this.props.character.status ? this.props.character.status : '-'}
            </div>
            <div className={[ItemStyles.species, ItemStyles.label].join(' ')}>Species: </div>
            <div className={[ItemStyles.species, ItemStyles.value].join(' ')}>
              {this.props.character.species ? this.props.character.species : '-'}
            </div>
            <div className={[ItemStyles.type, ItemStyles.label].join(' ')}>Type: </div>
            <div className={[ItemStyles.type, ItemStyles.value].join(' ')}>
              {this.props.character.type ? this.props.character.type : '-'}
            </div>
            <div className={[ItemStyles.gender, ItemStyles.label].join(' ')}>Gender: </div>
            <div className={[ItemStyles.gender, ItemStyles.value].join(' ')}>
              {this.props.character.gender ? this.props.character.gender : '-'}
            </div>
            <div className={[ItemStyles.origin, ItemStyles.label].join(' ')}>Origin: </div>
            <div className={[ItemStyles.origin, ItemStyles.value].join(' ')}>
              <a href={this.props.character.origin.url}>{this.props.character.origin.name}</a>
            </div>
            <div className={[ItemStyles.location, ItemStyles.label].join(' ')}>Location: </div>
            <div className={[ItemStyles.location, ItemStyles.value].join(' ')}>
              <a href={this.props.character.location.url}>{this.props.character.location.name}</a>
            </div>
            <div className={[ItemStyles.episode, ItemStyles.label].join(' ')}>Episode(s): </div>
            <div className={[ItemStyles.episode, ItemStyles.value].join(' ')}>
              {this.props.character.episode.map((el, key) => (
                <div key={key}>
                  <a href={el}>{el.slice(40)}</a>
                </div>
              ))}
            </div>
            <div className={[ItemStyles.created, ItemStyles.label].join(' ')}>Created: </div>
            <div className={[ItemStyles.created, ItemStyles.value].join(' ')}>
              {this.props.character.created}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={ItemStyles.notFoundMsg} data-testid="CardNotFoundMsg">
        <div>No info was found =( </div>
      </div>
    );
  }
}

export default CardFull;
