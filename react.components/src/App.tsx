import React, { FC } from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { LoadContext } from './context/LoadContext';
import { HashRouter } from 'react-router-dom';
import { AppProvider } from './components/AppProvider/AppProvider';

const App: FC = () => {
  return (
    <LoadContext.Provider value={false}>
      <AppProvider>
        <HashRouter>
          <div className={'App'}>
            <Navbar />
            <AppRouter />
          </div>
        </HashRouter>
      </AppProvider>
    </LoadContext.Provider>
  );
};

export default App;
