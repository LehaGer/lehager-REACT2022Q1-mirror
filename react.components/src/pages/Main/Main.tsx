import React from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import { ICharacterRowInfo, IMainProps, IMainState } from '../../types/interfaces';

class Main extends React.Component<IMainProps, IMainState<ICharacterRowInfo>> {
  _isMounted = false;
  constructor(props: IMainProps) {
    super(props);

    this.state = {
      dataSet: [],
    };
  }

  loadCards = async (newCardSetData: ICharacterRowInfo[]) => {
    if (this._isMounted) {
      this.setState({
        dataSet: newCardSetData,
      });
    }
  };

  componentDidMount(): void {
    this._isMounted = true;
  }

  componentWillUnmount(): void {
    this._isMounted = false;
  }

  render() {
    return (
      <div className={ItemStyles.Main} data-testid="mainPage">
        <SearchBar name={'search-bar'} updateCardSet={this.loadCards} />
        <CardSet dataSet={this.state.dataSet} />
      </div>
    );
  }
}

export default Main;
