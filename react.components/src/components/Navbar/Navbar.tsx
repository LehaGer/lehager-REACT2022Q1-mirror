import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemStyles from './Navbar.module.css';

const Navbar = () => {
  interface activityStatus {
    isActive: boolean;
  }

  const setActive = ({ isActive }: activityStatus) => {
    return ItemStyles.navBar__link + ' ' + (isActive ? ItemStyles.activeLink : '');
  };

  return (
    <header>
      <nav className={ItemStyles.navBar}>
        <NavLink to="/" className={setActive} data-testid="mainLink">
          Main
        </NavLink>
        <NavLink to="/about" className={setActive} data-testid="aboutLink">
          About Us
        </NavLink>
        <NavLink to="/not-found" className={setActive} data-testid="notFoundLink">
          404
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
