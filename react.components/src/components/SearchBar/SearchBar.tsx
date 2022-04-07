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
    name: 'default-name',
    type: 'text',
    placeholder: 'default searching request',
    className: ItemStyles.searchBar,
  };

  componentDidMount(): void {
    this.setState((state, props) => ({
      searchRequest: localStorage.getItem(props.name) || '',
    }));
  }

  componentWillUnmount(): void {
    this.handleSavingCurrentState();
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;

    this.setState({
      searchRequest: value,
    });
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
        onChange={this.handleChange}
        data-testid="searchBar"
      />
    );
  }
}

export default SearchBar;
