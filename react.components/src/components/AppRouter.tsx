import React, { FC, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import FormsPage from '../pages/Forms/FormsPage';
import { LoadContext } from '../context/LoadContext';
import Loader from './UI/Loader/Loader';
import CardFull from './CardFull/CardFull';

const AppRouter: FC = () => {
  const isLoading = useContext(LoadContext);

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="character/:id" element={<CardFull />} />
      <Route path="about" element={<About />} />
      <Route path="forms" element={<FormsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
