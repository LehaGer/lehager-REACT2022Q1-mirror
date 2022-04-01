import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import Navbar from './Navbar/Navbar';

const AppRouter = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default AppRouter;
