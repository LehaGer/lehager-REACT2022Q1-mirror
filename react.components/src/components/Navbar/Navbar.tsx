import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemStyles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <nav className={ItemStyles.navBar}>
        <NavLink to="/" data-testid="mainLink">
          Main
        </NavLink>
        <NavLink to="/about" data-testid="aboutLink">
          About Us
        </NavLink>
        <NavLink to="/not-found" data-testid="notFoundLink">
          404
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
