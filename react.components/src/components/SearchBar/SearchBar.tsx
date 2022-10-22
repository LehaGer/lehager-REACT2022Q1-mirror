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
    this.setState({
      searchRequest: localStorage.getItem(this.props.name) || '',
    });
  }

  componentWillUnmount(): void {
    this.handleSavingCurrentState();
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({
      searchRequest: value,
    });
    localStorage.setItem(this.props.name, value);
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
        onInput={this.handleChange}
        style={this.props.style}
        data-testid="searchBar"
      />
    );
  }
}

export default SearchBar;
