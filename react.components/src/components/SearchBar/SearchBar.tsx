import React from 'react';
import ItemStyles from './SearchBar.module.css';
import { ISearchBarProps, ISearchBarState } from '../../types/interfaces';

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);

    this.state = {
      searchRequest: '',
    };
  }

  static defaultProps: ISearchBarProps = {
    name: 'search-bar',
    type: 'text',
    placeholder: 'Search...',
    className: ItemStyles.searchBar,
    updateCharactersByName: () => null,
  };
  private searchBarName: string = this.props.name || 'search-bar';

  componentDidMount(): void {
    const searchRequest = localStorage.getItem(this.searchBarName) || '';
    this.setState({ searchRequest: searchRequest });
    this.props.updateCharactersByName(searchRequest);
  }

  componentWillUnmount(): void {
    localStorage.setItem(this.searchBarName, this.state.searchRequest);
  }

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ searchRequest: value });
    localStorage.setItem(this.searchBarName, value);
  };

  handleKeyUp = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      await this.props.updateCharactersByName(this.state.searchRequest);
    }
  };

  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        className={this.props.className}
        value={this.state.searchRequest}
        onInput={this.handleInput}
        onKeyUp={this.handleKeyUp}
        data-testid="searchBar"
      />
    );
  }
}

export default SearchBar;
