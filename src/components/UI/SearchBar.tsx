import React from 'react';
import '../../styles/SearchBar.css';

interface SearchBarProps {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  marginBottom?: string;
}

interface SearchBarState {
  searchRequest?: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      searchRequest: '',
    };
  }

  static defaultProps: SearchBarProps = {
    name: 'default-name',
    type: 'text',
    placeholder: 'default searching request',
    className: 'search-bar',
  };

  componentDidMount(): void {
    this.setState({
      searchRequest:
        '' + (localStorage.getItem(this.props.name) ? localStorage.getItem(this.props.name) : ''),
    });

    window.addEventListener('beforeunload', this.handleSavingCurrentState);
  }

  componentWillUnmount(): void {
    this.handleSavingCurrentState();
    window.removeEventListener('beforeunload', this.handleSavingCurrentState);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;

    this.setState({ searchRequest: value });
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
        style={{
          marginBottom: this.props.marginBottom,
        }}
      />
    );
  }
}

export default SearchBar;
