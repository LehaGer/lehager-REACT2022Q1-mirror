import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import FormsPage from '../pages/Forms/FormsPage';
import { LoadContext } from '../context/LoadContext';
import Loader from './UI/Loader/Loader';

export interface IAppRouter {
  name?: string;
}

class AppRouter extends React.Component<IAppRouter> {
  static contextType = LoadContext;
  constructor(props: IAppRouter) {
    super(props);
  }
  render() {
    if (this.context) {
      return <Loader />;
    }
    return (
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="forms" element={<FormsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default AppRouter;
