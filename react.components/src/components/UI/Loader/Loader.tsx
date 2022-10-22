import React, { FC } from 'react';
import ItemStyles from './Loader.module.css';

const Loader: FC = () => {
  return <div className={ItemStyles.loader} data-testid="Loader" />;
};

export default Loader;
