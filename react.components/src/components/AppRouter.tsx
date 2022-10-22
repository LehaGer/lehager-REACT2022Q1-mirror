import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import FormsPage from '../pages/Forms/FormsPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="forms" element={<FormsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
