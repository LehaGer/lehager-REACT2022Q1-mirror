import React from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={'App'}>
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
