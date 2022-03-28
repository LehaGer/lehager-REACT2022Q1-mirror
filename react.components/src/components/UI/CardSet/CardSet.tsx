import React from 'react';
import Card from './Card/Card';
import ItemStyles from './CardSet.module.css';
import { CharacterRowInfo, CardSetProps, CardSetState } from '../../../types/types';
import axios from 'axios';

class CardSet extends React.Component<
  CardSetProps<CharacterRowInfo>,
  CardSetState<CharacterRowInfo>
> {
  _isMounted = false;
  constructor(props: CardSetProps<CharacterRowInfo>) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  loadCards = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?page=1');
      if (this._isMounted) {
        this.setState({
          cards: response.data.results,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount(): void {
    this._isMounted = true;
    this.loadCards().then();
  }

  componentWillUnmount(): void {
    this._isMounted = false;
  }

  render() {
    return (
      <div className={ItemStyles.cardSet}>
        {this.state.cards.map((dataSetElement) => (
          <Card
            key={dataSetElement.id}
            id={dataSetElement.id}
            name={dataSetElement.name}
            status={dataSetElement.status}
            origin={dataSetElement.origin.name}
            location={dataSetElement.location.name}
            image={dataSetElement.image}
            data-testid="CardInCardSet"
          />
        ))}
      </div>
    );
  }
}

export default CardSet;
