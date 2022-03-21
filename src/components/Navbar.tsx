import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  interface activityStatus {
    isActive: boolean;
  }

  const setActive = ({ isActive }: activityStatus) => {
    return 'navbar__link ' + (isActive ? 'active-link' : '');
  };

  return (
    <header>
      <div className={'navbar'}>
        <NavLink to="/" className={setActive}>
          Main
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About Us
        </NavLink>
        <NavLink to="/not-found" className={setActive}>
          404
        </NavLink>
        <NavLink to="/wrong-path" className={setActive}>
          Not existing page
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
