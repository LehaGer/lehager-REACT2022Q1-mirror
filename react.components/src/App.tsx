import React from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { LoadContext } from './context/LoadContext';
import { BrowserRouter } from 'react-router-dom';

export interface IAppProps {
  name?: string;
}

export interface IAppState {
  isLoading: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount(): void {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <LoadContext.Provider value={this.state.isLoading}>
        <BrowserRouter>
          <div className={'App'}>
            <Navbar />
            <AppRouter />
          </div>
        </BrowserRouter>
      </LoadContext.Provider>
    );
  }
}

export default App;
