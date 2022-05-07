import React, { FC, useEffect, useState } from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { LoadContext } from './context/LoadContext';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './components/ContextProviders/AppContext';

const App: FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <LoadContext.Provider value={isLoading}>
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
