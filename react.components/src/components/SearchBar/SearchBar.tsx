import React from 'react';
import ItemStyles from './SearchBar.module.css';
import { ISearchBarProps, ISearchBarState } from '../../types/interfaces';
import CharacterService from '../../API/CharacterService';

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);

    this.state = {
      searchRequest: '',
    };
  }

  static defaultProps: ISearchBarProps = {
    name: 'default-name',
    type: 'text',
    placeholder: 'default searching request',
    className: ItemStyles.searchBar,
    updateCardSet: () => {},
  };

  updateCharactersByName = async (name?: string) => {
    try {
      const response = await CharacterService.getCharacterByAttributes({
        name: name,
      });
      this.props.updateCardSet(response.data.results);
    } catch (e) {
      console.log(e);
      this.props.updateCardSet([]);
    }
  };

  async componentDidMount(): Promise<void> {
    await this.setState({
      searchRequest: localStorage.getItem(this.props.name) || '',
    });
    await this.updateCharactersByName(this.state.searchRequest);
  }

  componentWillUnmount(): void {
    this.handleSavingCurrentState();
  }

  handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({
      searchRequest: value,
    });
    localStorage.setItem(this.props.name, value);
  };

  handleSubmit = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.updateCharactersByName(this.state.searchRequest);
    }
  };

  handleSavingCurrentState = () => {
    localStorage.setItem(this.props.name, this.state.searchRequest as string);
  };

  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        className={this.props.className}
        value={this.state.searchRequest}
        onInput={this.handleChangeValue}
        onKeyUp={this.handleSubmit}
        data-testid="searchBar"
      />
    );
  }
}

export default SearchBar;
