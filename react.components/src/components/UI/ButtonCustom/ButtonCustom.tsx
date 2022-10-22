import React from 'react';
import ItemStyles from './ButtonCustom.module.css';

interface IButtonCustom {
  name?: string;
}

class ButtonCustom extends React.Component<IButtonCustom> {
  constructor(props: IButtonCustom) {
    super(props);
  }

  render() {
    return <button className={ItemStyles.btnCustom}>{this.props.children}</button>;
  }
}

export default ButtonCustom;
