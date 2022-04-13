import React from 'react';
import ItemStyles from './ButtonCustom.module.css';

interface IButtonCustom {
  name?: string;
  onClick?: (event: React.MouseEvent) => void;
}

class ButtonCustom extends React.Component<IButtonCustom> {
  constructor(props: IButtonCustom) {
    super(props);
  }

  render() {
    return (
      <button className={ItemStyles.btnCustom} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default ButtonCustom;
