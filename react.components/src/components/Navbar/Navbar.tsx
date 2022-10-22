import React from 'react';
import { matchRoutes, NavLink, useLocation } from 'react-router-dom';
import ItemStyles from './Navbar.module.css';
import { ICharacterInfo } from '../../types/interfaces';
import { useAppSelector } from '../../hooks/redux';

const Navbar = () => {
  const characterCards = useAppSelector((state) => state.characterCardsReducer);
  const location = useLocation();

  const matchesResult = matchRoutes([{ path: '/character/:id' }], location);
  const characterId = matchesResult?.[0]?.params?.id;

  let character: ICharacterInfo | undefined;
  characterCards.data.forEach((el) => {
    if (el.id === Number(characterId)) {
      character = el;
    }
  });

  return (
    <header className="App-header">
      {character ? (
        <div className={ItemStyles.currentRoute}>
          <div className={ItemStyles.RouteElement}>Main</div> /{' '}
          <div className={ItemStyles.RouteElement}>{character.name}</div>
        </div>
      ) : (
        ''
      )}
      <nav className={ItemStyles.navBar}>
        <NavLink to="/" className="App-link" data-testid="mainLink">
          Main
        </NavLink>
        <NavLink to="/about" className="App-link" data-testid="aboutLink">
          About Us
        </NavLink>
        <NavLink to="/not-found" className="App-link" data-testid="notFoundLink">
          404
        </NavLink>
        <NavLink to="/forms" className="App-link" data-testid="formsLink">
          Forms
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
