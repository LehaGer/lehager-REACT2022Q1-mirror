import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemStyles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className="App-header">
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
