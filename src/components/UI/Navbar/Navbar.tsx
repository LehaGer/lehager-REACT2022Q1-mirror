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
      <nav className={ItemStyles.navBar} data-testid="navbar">
        <NavLink to="/" className={setActive} data-testid="main-link">
          Main
        </NavLink>
        <NavLink to="/about" className={setActive} data-testid="about-link">
          About Us
        </NavLink>
        <NavLink to="/not-found" className={setActive} data-testid="not-found-link">
          404
        </NavLink>
        <NavLink to="/wrong-path" className={setActive} data-testid="wrong-link">
          Not existing page
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
