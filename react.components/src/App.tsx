import React, { FC } from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { LoadContext } from './context/LoadContext';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './components/ContextProviders/AppContext';

const App: FC = () => {
  return (
    <LoadContext.Provider value={false}>
      <AppProvider>
        <BrowserRouter>
          <div className={'App'}>
            <Navbar />
            <AppRouter />
          </div>
        </BrowserRouter>
      </AppProvider>
    </LoadContext.Provider>
  );
};

export default App;
