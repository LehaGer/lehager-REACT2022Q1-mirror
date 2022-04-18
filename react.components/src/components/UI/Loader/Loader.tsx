import React from 'react';
import ItemStyles from './Loader.module.css';

class Loader extends React.Component {
  render() {
    return <div className={ItemStyles.loader} data-testid="Loader" />;
  }
}

export default Loader;
