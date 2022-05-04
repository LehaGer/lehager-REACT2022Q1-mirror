import React from 'react';
import ItemStyles from './Main.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardSet from '../../components/CardSet/CardSet';
import { IMainProps, IMainState } from '../../types/interfaces';
import Loader from '../../components/UI/Loader/Loader';
import { LoadContext } from '../../context/LoadContext';
import CharacterService from '../../API/CharacterService';

class Main extends React.Component<IMainProps, IMainState> {
  static contextType = LoadContext;
  constructor(props: IMainProps) {
    super(props);

    this.state = {
      dataSet: [],
      isDataLoading: true,
    };
  }

  updateCardSet = async (name?: string) => {
    this.setState({ isDataLoading: true });
    const dataSetFormAPI = await CharacterService.getCharacterByAttributes({ name: name });
    this.setState({ isDataLoading: false });
    this.setState({ dataSet: dataSetFormAPI });
  };

  render() {
    return (
      <div className={ItemStyles.Main} data-testid="mainPage">
        <SearchBar updateCharactersByName={this.updateCardSet} />
        {this.state.isDataLoading ? <Loader /> : <CardSet dataSet={this.state.dataSet} />}
      </div>
    );
  }
}

export default Main;
