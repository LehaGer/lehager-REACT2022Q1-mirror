import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import Navbar from './Navbar/Navbar';

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
