import React from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import { ICharacterRowInfo, IMainProps, IMainState } from '../../types/interfaces';
import Loader from '../../components/UI/Loader/Loader';
import { LoadContext } from '../../context/LoadContext';
import CharacterService from '../../API/CharacterService';

class Main extends React.Component<IMainProps, IMainState<ICharacterRowInfo>> {
  _isMounted = false;
  static contextType = LoadContext;
  constructor(props: IMainProps) {
    super(props);

    this.state = {
      dataSet: [],
      isDataLoading: true,
      isThereCharacter: true,
    };
  }

  loadCards = async (newCardSetData: ICharacterRowInfo[]) => {
    if (this._isMounted) {
      this.setState({
        dataSet: newCardSetData,
      });
    }
  };

  updateCardSet = async (name?: string) => {
    await this.setState({
      isDataLoading: true,
      isThereCharacter: true,
    });

    try {
      const response = await CharacterService.getCharacterByAttributes({
        name: name,
      });
      this.loadCards(response.data.results);
    } catch (e) {
      // console.log(e);
      await this.setState({
        isThereCharacter: false,
      });
    } finally {
      if (this._isMounted) {
        await this.setState({
          isDataLoading: false,
        });
      }
    }
  };

  componentDidMount(): void {
    this._isMounted = true;
  }

  componentWillUnmount(): void {
    this._isMounted = false;
  }

  render() {
    const notFoundMsg = (
      <div className={ItemStyles.notFoundMsg} data-testid="MainNotFoundMsg">
        <div>No matches were found =( </div>
      </div>
    );

    let contentElement;

    if (this.state.isDataLoading) {
      contentElement = <Loader />;
    } else {
      if (this.state.isThereCharacter) {
        contentElement = <CardSet dataSet={this.state.dataSet} />;
      } else {
        contentElement = notFoundMsg;
      }
    }

    return (
      <div className={ItemStyles.Main} data-testid="mainPage">
        <SearchBar name={'search-bar'} updateCharactersByName={this.updateCardSet} />
        {contentElement}
      </div>
    );
  }
}

export default Main;
