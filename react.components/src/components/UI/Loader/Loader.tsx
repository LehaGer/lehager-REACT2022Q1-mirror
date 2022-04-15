import React from 'react';
import ItemStyles from './Loader.module.css';

export interface ILoaderProps {
  name?: string;
}

class Loader extends React.Component<ILoaderProps> {
  constructor(props: ILoaderProps) {
    super(props);
  }

  render() {
    return <div className={ItemStyles.loader} />;
  }
}

export default Loader;
